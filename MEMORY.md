# MEMORY.md — artel

Memoria del proyecto entre sesiones. Máximo ~50 líneas: resume o elimina lo que ya no aporte.

## Estado actual

- **artel** es una comunidad de desarrollo de software (modelo cooperativo) y una incubadora privada de proyectos. Web pública estática en **Astro 7.4.4** (SSG), **TypeScript 6**, **Vitest 5**, desplegada en **Cloudflare Pages**.
- **19 rutas**: home, proyectos, 3 fichas de proyecto, socios, unirse, FAQ, contacto y 404 en ES; las mismas (sin 404) bajo `/en/`. Proyectos y socios en Markdown (Content Collections + Zod); copy en `src/i18n/{es,en}.ts`.
- Dirección de arte: tratado de historia natural del s. XIX; tema claro/oscuro; lámina SVG que se dibuja con el scroll.

## Decisiones (y por qué)

- **SSG sin adapter**: la web es informativa; Cloudflare Pages sirve `dist/`. Sin servidor ni runtime.
- **Tema con `data-theme`** en `<html>`, `localStorage['artel-theme']` y `prefers-color-scheme` en la primera visita. El script del `<head>` corre antes del CSS para evitar FOUC. Sin opción «auto».
- **El panel de Socios no se invierte**: es oscuro en ambos temas (`#14140C` en claro, `#2B271C` en oscuro, con marco y viñeta). El papel claro en oscuro deslumbraba.
- **Contenido en colecciones + copy en i18n**: editar proyectos o socios no toca componentes; el copy de interfaz comparte un `Dictionary` y cae a ES si falta la versión EN.
- **Fuentes autohospedadas** con Fontsource: privacidad y cero Google Fonts.
- **Logo por máscara alfa** (`<mask>` SVG inline con el PNG) hasta el SVG monocromo definitivo.
- **404 único en ES**, no indexable, sin selector de idioma; enlaza al inicio, contacto y home EN.
- **Skills `mcps` e `identidad-visual`**: la primera fija el uso de MCPs (Chrome DevTools para QA visual y privacidad); la segunda, el sistema visual (tokens, tema, lámina y checklist) para que ninguna UI se salga.

## Aprendizajes y errores a evitar

- `mask-image: url(../assets/logo.png)` se bloquea al abrir con `file://`; usar un `<mask>` SVG inline con `<image href>`.
- `--accent` (#C0904B) no pasa AA como texto sobre papel (2,4:1); usar `--accent-deep` (#8A5E24, 4,8:1).
- pnpm 12 + `@astrojs/check` exige TypeScript ≤ 6 (el peer es `^5 || ^6`).
- Astro scopea también el ancestro `.js`; como el `class="js"` vive en `<html>`, el selector del botón necesita `:global(.js)`.
- Los elementos mono que en el proto no estaban en el grupo de versalitas necesitan `line-height: 1.65` explícito para no desplazar las secciones.

## Próximos pasos

- SVG monocromo del logo y favicon; retirar la máscara PNG.
- Specs `001-identidad-visual`, `002-laminas-scroll`, `003-colecciones`, `004-paginas`, `005-despliegue`.
- Sustituir los socios y los stacks placeholder por datos reales.
- Decidir si el manifiesto y la FAQ pasan a una colección `paginas`.
- MCPs del entorno de agentes.
