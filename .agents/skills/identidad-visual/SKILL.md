---
name: identidad-visual
description: Úsala cuando crees o modifiques cualquier interfaz del proyecto: componentes, páginas, CSS, tokens, tipografía, layout, tema claro/oscuro, animaciones o copy visual.
---

# Identidad visual

Resumen operativo del sistema visual. La fuente de verdad es `docs/design.md` y `src/styles/tokens.css`; los principios están en `docs/constitution.md`.

## Concepto

Tratado de historia natural del siglo XIX: papel, grabado, láminas, pies de figura, números de lámina, marginalia y ornamentos de imprenta. El naturalismo es **estética**, no vocabulario: el copy no habla de especies ni especímenes.

## Reglas duras

- Tokens solo desde `src/styles/tokens.css`; no inventes colores ni tipografías en componentes.
- Prohibido Tailwind, CSS-in-JS y frameworks de UI.
- Sin sombras difusas: reglas de 1 px o cambios de superficie.
- Sin emojis: iconos SVG de línea y flechas tipográficas.
- Sin gradientes salvo la viñeta radial del panel.
- Fuentes autohospedadas (Fontsource); nada de Google Fonts.

## Paleta y contraste

| Par | Ratio |
|---|---|
| Papel claro: `--ink` / `--paper` | 9,83:1 |
| Panel del tema claro (`#14140C`): ink / soft / accent | 14,06 / 9,14 / 6,46 |
| Panel del tema oscuro (`#2B271C`): ink / soft / accent | 11,33 / 7,80 / 6,91 |
| `--accent` / papel | 2,4:1 (decorativo) |
| `--accent-deep` / papel | 4,81:1 (texto) |

La tabla completa de tokens está en `docs/design.md`. El panel es oscuro en ambos temas: `#14140C` en claro y `#2B271C` en oscuro, con `--panel-ink`, `--panel-soft` y `--panel-accent`.

## Tipografía

- **Cormorant Garamond** — display; cursiva para pies de lámina.
- **Spectral** — cuerpo.
- **IBM Plex Mono** — metadatos y versalitas.

Escala con `clamp()` en `tokens.css`; cuerpo a ~19 px, línea 1,65 y medida `--measure: 66ch`. Un solo `h1` por página.

## Retícula

`.wrap` de 1320 px con `--pad` (1,25–4,5 rem), márgenes anchos y reglas de 1 px. `Plate` usa marco de 1 px, número arriba a la derecha y pie `Fig. N — …`.

## Tema

`data-theme` en `<html>`, `localStorage['artel-theme']` y `prefers-color-scheme` en la primera visita. El script inline del `<head>` corre antes del CSS (sin FOUC). El panel es oscuro en ambos temas (`#14140C` en claro, `#2B271C` en oscuro) con marco y viñeta; nunca papel claro en oscuro.

## Movimiento

La lámina se dibuja con `pathLength="1"` y `stroke-dashoffset` al ritmo del scroll; sin bucles propios. `prefers-reduced-motion` deja el trazo completo; sin JS se ve completa; `print` completo.

## Accesibilidad

AA en ambos temas. `:focus-visible` con `--accent-deep`. El contraste no depende del fondo: fondo sólido detrás del texto. Nada de información solo por color.

## Referencias

`docs/assets/inspiring1..5.jpg` — Haeckel, Sowerby, Iris pallida, lámina de 1827 y ornamento de imprenta; dominio público. `logo.png` es la marca actual; `complexLogo.png` queda reservado como lámina decorativa.

## Checklist antes de dar por buena una UI

- [ ] Tokens usados; ninguno hardcodeado.
- [ ] Contraste AA en claro y oscuro.
- [ ] Foco visible.
- [ ] Sin JS la página se lee.
- [ ] 390 px sin desbordes.
- [ ] Consola limpia.
- [ ] `pnpm check`, `pnpm test` y `pnpm build` en verde.
- [ ] `docs/design.md` actualizado si hay tokens nuevos.

## Anti-patrones

- Colores hardcodeados en componentes.
- `opacity` para simular contraste.
- Sombras difusas.
- Iconos de librería.
- Texto claro sobre panel claro.
- Animaciones que siguen al parar el scroll.
