# artel

Comunidad de desarrollo de software y incubadora privada de proyectos.

## Qué es

**artel** es una comunidad de personas que desarrollan software, organizada como cooperativa, y una incubadora privada de proyectos. Esta web es la puerta de entrada pública: cuenta el manifiesto, los proyectos, quiénes somos, cómo unirse, las preguntas frecuentes y cómo contactar. Los repositorios y el trabajo diario viven fuera de este sitio.

Está pensada para quien quiere saber cómo trabajamos, para quien busca un proyecto que resolver o en el que colaborar y para quien se plantea entrar en la comunidad. No es un portfolio comercial ni una landing de captación: es la explicación pública de la casa.

El sitio es estático, bilingüe (ES por defecto, EN en `/en/…`) y sin dependencias de UI. La dirección de arte es un tratado de historia natural del siglo XIX —papel, grabado, láminas y marginalia—, con tema claro y oscuro.

## Stack

- **Astro 7** (SSG) con TypeScript estricto.
- **Vitest** para la lógica pura.
- **Cloudflare Pages** para el despliegue.
- **Fontsource** para las fuentes autohospedadas.
- Sin frameworks CSS ni librerías de UI.

## Requisitos

- Node 22+ (Astro 7 exige ≥22.23.4).
- pnpm 10+.

## Comandos

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Servidor de desarrollo en `localhost:4321`. |
| `pnpm build` | Genera el sitio estático en `dist/`. |
| `pnpm preview` | Sirve `dist/` para revisar el build. |
| `pnpm check` | Typecheck con `astro check`. |
| `pnpm test` | Tests de Vitest. |
| `pnpm test:watch` | Tests en modo watch. |

## Estructura

```
.
├── docs/
│   ├── constitution.md     # principios innegociables
│   ├── design.md           # sistema visual
│   ├── proto/              # prototipo visual aprobado (desechable)
│   └── assets/             # marca y referencias
├── specs/                  # specs SDD (NNN-nombre/)
├── src/
│   ├── assets/brand/       # logo
│   ├── components/         # brand, decor, layout, sections, ui
│   ├── content/            # proyectos y socios (es/en)
│   ├── i18n/               # diccionarios ES/EN
│   ├── layouts/            # BaseLayout
│   ├── lib/                # lógica pura + tests
│   ├── pages/              # rutas ES y EN
│   ├── scripts/            # scroll-draw
│   └── styles/             # fonts, tokens, base
├── .agents/skills/sdd/     # skill de SDD
├── .opencode/              # comandos y agentes SDD
├── astro.config.mjs
├── package.json
└── pnpm-lock.yaml
```

## Editar contenido

### Proyectos

Cada proyecto es un Markdown en `src/content/proyectos/es/` y su traducción en `src/content/proyectos/en/`, con el **mismo nombre de archivo** (`taller.md` en ambas carpetas). Ese nombre es el slug de la URL.

Campos del esquema (`src/content.config.ts`):

- `title` — nombre del proyecto.
- `summary` — una línea de descripción.
- `status` — `incubacion | desarrollo | publico | pausado`.
- `year` — año, número.
- `stack` — array de strings.
- `repo`, `url` — URLs opcionales.
- `order` — orden en la lista.
- `draft` — `true` lo oculta; por defecto `false`.

Añadir un proyecto crea automáticamente `/proyectos/<slug>/` y `/en/proyectos/<slug>/`. Si falta la versión EN, se usa la ES.

### Socios

Mismo patrón: `src/content/socios/{es,en}/`, mismo nombre de archivo. Campos: `name`, `role`, `bio`, `links` (array opcional de `{ label, url }`) y `order`. Aparecen en `/socios/` y `/en/socios/`; si falta la versión EN, se usa la ES.

### Copy de interfaz

El texto de la interfaz (nav, hero, manifiesto, panel, unirse, FAQ, contacto, footer y metadatos) está en `src/i18n/es.ts` y `src/i18n/en.ts`. Los dos implementan el tipo `Dictionary` de `src/i18n/types.ts`: si añades una clave, añádela en ambos. Nada de texto visible hardcodeado en componentes.

## Tema claro/oscuro

Un script inline en el `<head>` de `src/layouts/BaseLayout.astro`, antes del CSS, lee `localStorage['artel-theme']`. Si no existe, usa `prefers-color-scheme`. Aplica `data-theme="light|dark"` en `<html>` y actualiza `<meta name="theme-color">`. El botón `ThemeToggle` alterna el tema y guarda la elección; sin JS no se muestra. No hay opción «auto» en la interfaz. El panel de «Socios» es siempre una superficie oscura: `#14140C` en claro y `#2B271C` en oscuro, con marco y viñeta.

## Despliegue en Cloudflare Pages

- Framework preset: **Astro**.
- Build command: `pnpm build`.
- Build output: `dist`.
- Variables: `NODE_VERSION=22`; `PNPM_VERSION=10` si el entorno no usa ya pnpm 10+.
- Antes de publicar, cambia `site` en `astro.config.mjs` por el dominio final. Ahora es `https://artel.dev`, un placeholder; de ahí salen canonical, OG y sitemap.

El proyecto no usa adapter: el build es estático.

## Flujo SDD

El proyecto sigue Spec-Driven Development. En resumen: constitución (`docs/constitution.md`) → spec en `specs/NNN-nombre/spec.md` con requisitos EARS y estado `borrador` → clarificación → plan → tareas → implementación (tests primero) → validación. Una spec no se implementa si no está `aprobada` ni si tiene dudas `[NECESITA ACLARACIÓN]`. Los cambios de requisitos van primero a la spec. El detalle está en `AGENTS.md`.

## Documentación

- `docs/constitution.md` — principios innegociables.
- `docs/design.md` — sistema visual, tokens y componentes.
- `docs/proto/index.html` — prototipo visual de referencia.
- `specs/` — specs SDD.
- `AGENTS.md` — flujo y convenciones para agentes.
