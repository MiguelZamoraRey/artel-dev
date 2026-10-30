# AGENTS.md

Convenciones y flujo de trabajo para cualquier agente que trabaje en este repositorio.

## Qué es este proyecto

**artel** es una comunidad de personas que desarrollan software, organizada como cooperativa, y una incubadora privada de proyectos. Esta web es su puerta de entrada pública: el manifiesto, los proyectos, los socios, cómo unirse, las preguntas frecuentes y el contacto. Los repositorios y el trabajo diario viven fuera de esta web.

El sitio es estático (Astro SSG), se despliega en Cloudflare Pages y está en español por defecto (`/`) e inglés en `/en/…`. El contenido de proyectos y socios se edita en Markdown (Content Collections + Zod); el copy de la interfaz vive en `src/i18n/`. La dirección de arte es un tratado de historia natural del siglo XIX —papel, grabado, láminas, marginalia— con tema claro y oscuro.

> El repositorio se trabaja con **opencode v2**: agentes con `permissions:` array, MCP bajo `mcp.servers` y comandos en `.opencode/commands/`. En la TUI, el cambio de agente es **Shift+Tab**.

## Estructura

- **Constitución**: `docs/constitution.md` — principios innegociables.
- **Diseño**: `docs/design.md` — sistema visual, tokens, tipografía y componentes.
- **Specs**: `specs/NNN-nombre/` con `spec.md`, `plan.md` y `tasks.md`.
- **Prototipo**: `docs/proto/` — referencia visual aprobada; desechable.
- **Assets**: `docs/assets/` — marca y referencias de la dirección de arte.
- **Aplicación**: `src/{pages,layouts,components,content,i18n,lib,styles,scripts,assets}`.
- **Comandos SDD**: `.opencode/commands/sdd-*` (invoca `/sdd-*`).
- **Skill**: `.agents/skills/sdd/`.
- **Agentes SDD**: `.opencode/agents/` (coordinator, planner, implementer, reviewer).

## Comandos

| Comando | Qué hace |
|---|---|
| `pnpm dev` | Servidor de desarrollo. |
| `pnpm build` | Genera el sitio estático en `dist/`. |
| `pnpm preview` | Sirve el build para revisarlo. |
| `pnpm check` | Typecheck con `astro check`. |
| `pnpm test` | Tests de Vitest. |
| `pnpm test:watch` | Tests en modo watch. |

## Flujo de trabajo SDD

Flujo: Constitución → Spec → Clarificación → Plan → Tareas → Implementación → Validación → Cambio.

### Estado de las specs

Una spec pasa por `borrador` → `aprobada` → `implementada` (línea "Estado:" al inicio de `spec.md`).

### 1. Constitución

- `docs/constitution.md` define los principios innegociables. Toda spec, plan y tarea debe cumplirlos.
- Los cambios de principios se hacen con `/sdd-constitution`.

### 2. Especificar

- Crea `specs/NNN-nombre/spec.md` con `/sdd-spec` o siguiendo la skill `sdd`.
- Requisitos en EARS (`RF-x`: CUANDO / SI…ENTONCES / MIENTRAS / EL SISTEMA) e historias de usuario (`HU-x`).
- La spec describe el QUÉ y el POR QUÉ. Nada de stack, arquitectura ni nombres de archivos.

### 3. Clarificar

- Revisa la spec como un QA con `/sdd-clarify`: ambigüedades, contradicciones, casos límite, conflictos con la constitución y seguridad (OWASP).
- No implementes una spec que no esté `aprobada` o que tenga dudas abiertas `[NECESITA ACLARACIÓN]`.

### 4. Planificar

- Genera `specs/NNN-nombre/plan.md` con `/sdd-plan`: archivos, funciones, algoritmo, interfaz y decisiones justificadas, cubriendo todos los RF.

### 5. Tareas

- Genera `specs/NNN-nombre/tasks.md` con `/sdd-tasks`: tareas de 20-30 min, con los RF que cubre cada una y "Hecho cuando:" verificable.

### 6. Implementar

- Una tarea a la vez con `/sdd-implement`, tests primero.
- Referencia el ID de cada requisito (`RF-x`) en comentarios.

### 7. Validar

- Recorre la spec RF por RF con `/sdd-validate`: qué test cubre cada RF y su resultado.
- Comprueba los criterios de finalización antes de marcar la spec como `implementada`.

### Cambios (mantenimiento)

- Un nuevo requisito va primero a la spec (`/sdd-change`), luego al plan y las tareas, y por último al código.

## Convenciones

- **La spec manda.** No implementes lógica no descrita en la spec sin avisar.
- **Requisitos en EARS** (`RF-x`) verificables; nada de "rápido", "intenso" o "bonito" sin criterio medible.
- **TypeScript estricto.** No uses `any` salvo justificación.
- **CSS propio con tokens.** Los colores, tipografías y medidas salen de `src/styles/tokens.css`. Prohibido Tailwind, CSS-in-JS o frameworks de UI.
- **Sin JS de cliente** salvo islas justificadas; sin librerías.
- **Contenido = datos.** Proyectos y socios en `src/content/`; copy de interfaz en `src/i18n/`; nada hardcodeado en componentes.
- **Toda cadena visible existe en ES y EN.**
- **Accesibilidad AA**: contraste, `:focus-visible`, `prefers-reduced-motion` y funcionamiento sin JS.
- **Tests Vitest** para la lógica pura de `src/lib/`.
- **Fuentes autohospedadas** (Fontsource), sin Google Fonts.
- **No añadas comentarios** innecesarios; el código debe explicarse por sí mismo.
- **Documentación**: los cambios de arquitectura o diseño se reflejan en `README.md`, `AGENTS.md` y `docs/design.md`.

## Seguridad

- No commitees secretos ni claves. Usa `.env.example` en lugar de `.env`.
- El contenido se valida con Zod en build; no hay backend ni entradas de usuario en runtime.
- El contacto es `mailto:`; sin formularios de terceros ni trackers.
- Aplica principios OWASP en las specs (validación, autorización, datos sensibles).

## Commits

- Los realiza siempre el mantenedor. Los agentes **nunca** commitean ni hacen push.

## Antes de terminar

- `pnpm check`, `pnpm test` y `pnpm build` en verde.

## Memoria

- Al empezar, lee `MEMORY.md` para conocer el estado del proyecto y las decisiones tomadas.
- Al terminar una tarea, actualízalo: estado actual, decisiones importantes (con su porqué) y errores a evitar.
- Mantenlo breve (máximo ~50 líneas): resume o elimina lo que ya no aporte.
- Si algo se convierte en una regla permanente, propón moverlo a `AGENTS.md` en lugar de dejarlo en la memoria.
- No guardes nunca datos sensibles (claves, tokens, datos personales).
