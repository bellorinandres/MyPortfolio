// Gera public/cv.pdf a partir da versão de impressão. Uso: npm run cv
// Requer Chrome instalado; use a variável CHROME para outro executável.
import { execFile } from "node:child_process";
import { copyFile } from "node:fs/promises";
import { promisify } from "node:util";
import { build, preview } from "astro";

await build({});
const server = await preview({ server: { port: 4399 } });

try {
  await promisify(execFile)(
    process.env.CHROME ?? "google-chrome",
    [
      "--headless=new",
      "--no-pdf-header-footer",
      "--virtual-time-budget=5000",
      "--print-to-pdf=public/cv.pdf",
      `http://localhost:${server.port}/`,
    ],
    { timeout: 60_000 },
  );
} finally {
  await server.stop();
}

await copyFile("public/cv.pdf", "dist/cv.pdf");
console.log("public/cv.pdf gerado");
