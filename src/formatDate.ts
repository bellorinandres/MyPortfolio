export const formatDate = (date: string) => {
  const month = new Date(date).toLocaleDateString("pt-BR", { month: "short", timeZone: "UTC" });
  return `${month.replace(".", "")} ${date.slice(0, 4)}`;
};
