const FILE_NAME = "CV-Andres-Bellorin.pdf";

/** Baixa public/cv.pdf e, se o navegador permitir, abre o menu de compartilhamento. */
export async function shareCv() {
  let file: File;
  try {
    const response = await fetch("/cv.pdf");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    file = new File([await response.blob()], FILE_NAME, { type: "application/pdf" });
  } catch (error) {
    console.error(error);
    alert("Não foi possível baixar o CV. Tente novamente.");
    return;
  }

  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = FILE_NAME;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 10_000);

  if (!navigator.canShare?.({ files: [file] })) return;
  try {
    await navigator.share({ files: [file], title: "Currículo" });
  } catch (error) {
    // AbortError: a pessoa fechou o menu. O arquivo já foi baixado.
    if ((error as DOMException).name !== "AbortError") console.warn(error);
  }
}
