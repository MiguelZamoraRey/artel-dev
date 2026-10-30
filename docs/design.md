# Diseño — artel

Sistema visual del sitio. La fuente de verdad de los valores es `src/styles/tokens.css`; este documento explica el criterio, las excepciones y los componentes.

## Concepto

Tratado de historia natural del siglo XIX: papel envejecido, grabado a línea, láminas, pies de figura, números de lámina y marginalia. El naturalismo es estética, no vocabulario: el copy no usa metáfora taxonómica.

La página se lee como una edición: márgenes anchos, reglas de 1 px, versalitas mono para metadatos y una única sección nocturna tipo Haeckel. El panel de «Socios» es siempre una superficie oscura; en tema oscuro es una hoja apenas elevada, con marco y viñeta.

## Paleta y tokens

### Claro (`:root`)

| Token | Valor |
|---|---|
| `--paper` | `#F4ECD8` |
| `--paper-deep` | `#EADFC4` |
| `--ink` | `#323C2A` |
| `--ink-soft` | `#5B6450` |
| `--accent` | `#C0904B` |
| `--accent-deep` | `#8A5E24` |
| `--rule` | `rgba(50, 60, 42, .18)` |
| `--panel` | `#14140C` |
| `--panel-ink` | `#E8E0CC` |
| `--panel-soft` | `#BDB6A2` |
| `--panel-rule` | `rgba(232, 224, 204, .16)` |
| `--panel-accent` | `#C0904B` |

### Oscuro (`html[data-theme="dark"]`)

| Token | Valor |
|---|---|
| `--paper` | `#14140C` |
| `--paper-deep` | `#1D1C13` |
| `--ink` | `#E8E0CC` |
| `--ink-soft` | `#BDB6A2` |
| `--accent` | `#C0904B` |
| `--accent-deep` | `#D9A867` |
| `--rule` | `rgba(232, 224, 204, .16)` |
| `--panel` | `#2B271C` |
| `--panel-ink` | `#E8E0CC` |
| `--panel-soft` | `#C4BBA4` |
| `--panel-rule` | `rgba(232, 224, 204, .20)` |
| `--panel-accent` | `#D9A867` |

El panel es oscuro en ambos temas. El tema claro no lo invierte: `#14140C` sobre papel. En oscuro se eleva a `#2B271C`, con borde `--panel-rule` y viñeta radial `radial-gradient(circle at 50% 35%, rgba(232, 224, 204, .05), transparent 70%)`, por debajo del motivo radial SVG.

### Contrastes (WCAG 2.1)

| Par | Ratio |
|---|---|
| Papel claro: `--ink` / `--paper` | 9,83:1 |
| Papel claro: `--ink-soft` / `--paper` | 5,27:1 |
| Papel claro: `--accent-deep` / `--paper` | 4,81:1 |
| Página oscura: `--ink` / `--paper` | 14,06:1 |
| Página oscura: `--ink-soft` / `--paper` | 9,14:1 |
| Página oscura: `--accent-deep` / `--paper` | 8,59:1 |
| Panel del tema claro (`#14140C`): `--panel-ink` | 14,06:1 |
| Panel del tema claro: `--panel-soft` | 9,14:1 |
| Panel del tema claro: `--panel-accent` | 6,46:1 |
| Panel del tema oscuro (`#2B271C`): `--panel-ink` | 11,33:1 |
| Panel del tema oscuro: `--panel-soft` | 7,80:1 |
| Panel del tema oscuro: `--panel-accent` | 6,91:1 |

El 14,06 del tema claro es el **panel** oscuro (`#14140C`), no el papel: tinta sobre papel claro da 9,83. `--accent` (`#C0904B`) queda para decoración; como texto sobre papel no pasa AA (2,4:1), por eso existe `--accent-deep`.

## Tipografía

- **Cormorant Garamond** (300/400/600 + italic 300/400): display, h1/h2/h3 y pies de lámina.
- **Spectral** (300/400 + italic 300/400): cuerpo de texto.
- **IBM Plex Mono** (400/500): metadatos, kickers, etiquetas, números de lámina y botones.

Autohospedadas con Fontsource (`src/styles/fonts.css`), `font-display: swap`. Sin Google Fonts.

Escala con `clamp()` en `tokens.css`: `--step--1` (~11–12 px), `--step-0` (~17–19 px), `--step-1`, `--step-2`, `--step-3` y `--step-4` (hasta 7 rem). Cuerpo a ~19 px, línea 1,65 y medida `--measure: 66ch`.

## Retícula y ritmo

- `.wrap`: máximo 1320 px, centrado, padding `--pad` (1,25–4,5 rem).
- Reglas de 1 px con `--rule`; sin sombras difusas.
- Secciones con `padding-block` en `clamp()`; el manifiesto usa marginalia de 150 px y cuerpo de 66ch; los proyectos, una columna de «Fig.» de 110 px.
- El panel ocupa el ancho completo con `border-block` de 1 px y viñeta radial.

## Componentes

- `brand/Logo`: marca en `currentColor` con máscara alfa (`<mask>` SVG inline con el PNG). Tamaños 40/34/32 px. Pendiente el SVG monocromo definitivo.
- `ui/ThemeToggle`: botón real, sol/luna, `aria-pressed`, `localStorage`, oculto sin JS.
- `ui/Ornament`: ornamento simétrico de imprenta; 190 px; separador estático.
- `ui/Plate`: figura genérica con marco de 1 px, número arriba a la derecha y pie «Fig. N — …».
- `ui/Kicker`: número, etiqueta y regla; usa variables para el panel.
- `ui/Cta`: etiqueta, email grande y nota.
- `layout/Header`: sticky; marca, nav, ES/EN y tema.
- `layout/Footer`: fondo `--paper-deep`, datos en mono y reglas.
- `layout/PageIntro`: portada de las páginas internas.
- `sections/Hero`, `Manifesto`, `Projects`, `NightPanel`, `Join`, `Faq`, `Contact`, `Members`.
- `decor/ScrollPlate`: la lámina animada.

## Lámina que se dibuja

`src/components/decor/ScrollPlate.astro` contiene la rama botánica: 20 `<path>` (tallo, 8 hojas con nervio y 3 capullos), `pathLength="1"`, `stroke="currentColor"`, grosor 1,4–1,7. Por defecto se ve completa; al inicializar JS se añade `is-armed` y `stroke-dashoffset: calc(1 - var(--draw, 0))`.

`src/scripts/scroll-draw.ts`:

- `progressFor(top, height, vh) = clamp01((vh - top) / (vh + height))` (`src/lib/draw.ts`).
- Listener `scroll` pasivo con `requestAnimationFrame`; escribe `--draw`.
- `IntersectionObserver` para enganchar y desenganchar; recalcula en `resize`.
- Con `prefers-reduced-motion: reduce` no se engancha y el trazo queda completo.
- Sin JS, trazo completo. En `@media print`, trazo completo.

Opacidad .14 en claro y .18 en oscuro; el pie de lámina va a opacidad plena. A ≥1200 px va absoluta en el margen derecho; entre 900 y 1199 px, en flujo a la derecha; por debajo de 900 px se oculta y aparece el separador a línea.

## Referencias y créditos

- `docs/assets/inspiring1.jpg` — Haeckel, radiolarios: fondo negro, linework claro y simetría radial. Inspira el panel.
- `docs/assets/inspiring2.jpg` — Sowerby, 1809: lámina botánica, número arriba a la derecha, pie manuscrito.
- `docs/assets/inspiring3.jpg` — Iris pallida: papel envejecido, foxing, cursiva y disecciones.
- `docs/assets/inspiring4.jpg` — lámina de 1827: partes anotadas con números y líneas guía.
- `docs/assets/inspiring5.jpg` — ornamento de imprenta: trazo simétrico; inspira los separadores.
- `docs/assets/logo.png` — marca actual; `complexLogo.png` queda reservado como lámina decorativa.

Las referencias son de dominio público. `docs/proto/index.html` es el prototipo visual aprobado y desechable.

## Reglas

- Nada de sombras difusas: las separaciones son reglas de 1 px o cambios de superficie.
- Nada de gradientes salvo la viñeta radial del panel.
- Sin emojis: los iconos son SVG de línea; las flechas son tipográficas.
- El panel es siempre oscuro (`#14140C` en claro, `#2B271C` en oscuro); no se invierte a papel.
- `--accent` es decorativo; para texto sobre papel se usa `--accent-deep`.
- Fuentes autohospedadas; sin Google Fonts.
- El copy no usa metáfora taxonómica; el naturalismo es solo estética.
