# Constitución — artel

Principios innegociables. Toda spec, plan y tarea debe cumplirlos. Si una spec contradice uno, se para y se resuelve antes de implementar.

## 1. La spec manda

Nada se implementa sin una spec `aprobada`. Si falta una decisión, se para y se pregunta; no se improvisa.

**Criterio:** ninguna tarea ni commit implementa un `RF-x` que no esté en una spec aprobada; las dudas `[NECESITA ACLARACIÓN]` bloquean la implementación.

## 2. Estático por defecto

El sitio es SSG. El JS de cliente solo aparece cuando no hay alternativa CSS/HTML; el presupuesto de JS propio es ≤ 10 KB por página; cero librerías de UI.

**Criterio:** `pnpm build` genera `dist/` sin servidor; el JS propio por página no supera 10 KB (gzip); `package.json` no contiene frameworks de UI.

## 3. CSS propio con tokens

Un único origen de verdad para color y tipografía: `src/styles/tokens.css`. Los componentes no inventan colores ni tipografías; nada de Tailwind, CSS-in-JS ni frameworks CSS.

**Criterio:** ningún componente define colores de texto o superficie propios; los tokens nuevos se añaden a `tokens.css` y a `docs/design.md`. La textura de papel y la viñeta del panel son las únicas capas fuera de tokens y están documentadas.

## 4. Contenido = datos

Proyectos y socios son Markdown validado con Zod en `src/content/`; el copy de interfaz vive en `src/i18n/`. Prohibido hardcodear contenido en componentes.

**Criterio:** añadir un proyecto o un socio no requiere tocar componentes; `pnpm build` falla si el frontmatter no valida.

## 5. i18n completa

Toda página de contenido y toda cadena visible existe en ES y EN; `hreflang` correcto; el inglés no puede quedarse atrás. El 404 es la única página de sistema, no indexable.

**Criterio:** `es.ts` y `en.ts` implementan el mismo `Dictionary`; cada ruta de contenido tiene su `/en/…`; el build no deja páginas EN sin equivalente.

## 6. Accesibilidad AA

Contraste ≥ 4.5:1 en texto normal, foco visible, un solo `h1` por página, `prefers-reduced-motion` respetado y funcionamiento sin JS.

**Criterio:** los pares de tokens de `docs/design.md` cumplen AA; toda la navegación se puede hacer con teclado; la lámina se ve completa sin JS.

## 7. Privacidad

Sin cookies, sin analytics de terceros y sin trackers. Fuentes autohospedadas; formularios solo si no exponen datos a terceros.

**Criterio:** cero peticiones a dominios de terceros al cargar una página; cero cookies; el contacto es `mailto:`.

## 8. Rendimiento

Imágenes con dimensiones explícitas y formatos modernos; fuentes con `swap`; sin filtros ni máscaras costosas por frame.

**Criterio:** las imágenes declaran `width`/`height`; las fuentes usan `font-display: swap`; la lámina anima con `stroke-dashoffset`, no con filtros.

## 9. Tests como puerta

La lógica pura de `src/lib/` se prueba con Vitest. `pnpm check`, `pnpm test` y `pnpm build` deben estar en verde antes de dar algo por terminado.

**Criterio:** los tres comandos pasan; cada función pura nueva llega con su test.

## 10. Idioma

Código en inglés; interfaz, contenido y documentación en español.

**Criterio:** identificadores, tipos y nombres de archivo de código en inglés; textos visibles, contenido y documentación en español.
