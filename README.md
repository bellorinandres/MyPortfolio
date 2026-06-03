# Portfolio de Andres Bellorin

Portfolio pessoal desenvolvido com Astro para apresentar experiência profissional, habilidades, idiomas, projetos e informações de contato em uma interface responsiva.

O site combina uma experiência visual de livro aberto em desktop com uma versão simples e vertical em dispositivos menores. Também inclui tema claro/escuro, paleta de comandos, SEO preparado para produção e estilos específicos para impressão como currículo.

## Stack

- Astro 6
- TypeScript
- HTML e CSS
- `hotkeypad` para paleta de comandos
- `@astrojs/sitemap` para geração de sitemap

## Funcionalidades

- Layout responsivo com visual de livro aberto em desktop.
- Tema claro/escuro com persistência em `localStorage`.
- Paleta de comandos com atalhos de teclado.
- Versão otimizada para impressão em formato de currículo.
- SEO com metadados, Open Graph, Twitter Cards, JSON-LD, sitemap e `robots.txt`.
- Conteúdo centralizado em `src/cv.json`.
- Favicon personalizado com a letra `A`.

## Como executar

Instale as dependências e inicie o servidor local:

```sh
npm install
npm run dev
```

Depois acesse o endereço exibido no terminal.

## Comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção em `dist`. |
| `npm run preview` | Visualiza o build de produção localmente. |
| `npm run astro` | Executa comandos da CLI do Astro. |

## Conteúdo

As informações principais do portfolio ficam em `src/cv.json`.

Edite esse arquivo para atualizar:

- Nome, cargo, localização e resumo profissional.
- E-mail e links sociais.
- Experiência profissional.
- Educação.
- Projetos.
- Habilidades técnicas.
- Idiomas.

## Domínio e SEO

A URL principal do site fica em `basics.url` dentro de `src/cv.json`.

Ao trocar ou comprar um domínio, atualize esse valor e gere um novo build. Essa URL é usada para metadados, canonical URL, Open Graph, Twitter Cards, sitemap e `robots.txt`.

## Impressão

O projeto possui estilos específicos para impressão. Na impressão, a interface visual do site é simplificada para ficar parecida com uma folha de currículo: fundo branco, texto escuro e sem botões de interação.

## Estrutura Principal

- `src/pages/index.astro`: página inicial e layout principal do portfolio.
- `src/pages/robots.txt.ts`: geração dinâmica do `robots.txt`.
- `src/Layouts/Layouts.astro`: HTML base, metadados, tema global e estilos globais.
- `src/components/sections`: seções do portfolio.
- `src/components/ThemeToggle.astro`: botão de alternância de tema.
- `src/components/KeyBoardManager.astro`: paleta de comandos e atalhos de teclado.
- `src/icons`: ícones usados no site.
- `public`: imagens e arquivos públicos.

## Build de produção

Para validar o projeto antes de publicar:

```sh
npm run build
```

O resultado será gerado em `dist/`.
