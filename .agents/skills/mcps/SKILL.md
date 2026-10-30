---
name: mcps
description: Úsala cuando trabajes con servidores MCP del proyecto: usar el navegador para QA visual, consultar documentación de librerías, añadir o depurar un MCP, o comprobar que las tools están disponibles.
---

# MCPs del proyecto

Los MCP amplían las tools del agente. Cada servidor añade contexto: configura solo lo que se usa.

## Dónde se configura

`opencode.json`, en la raíz, bajo `mcp.servers` (opencode v2). Cada servidor es:

- `type: "local"` + `command` en array (proceso local).
- `type: "remote"` + `url` (servidor HTTP).

Tras editar el archivo, reinicia opencode. Comprueba con `/mcps` u `opencode mcp list`; en la sesión, las tools aparecen con el prefijo del servidor.

## Servidores

| Servidor | Tipo | Para qué | Flags / secretos |
|---|---|---|---|
| `chrome-devtools` | local | QA visual: navegar, snapshot de accesibilidad, capturas, consola, red y rendimiento | `npx -y chrome-devtools-mcp@latest --no-usage-statistics --no-performance-crux --isolated`; sin secretos |

### Candidatos (no configurados)

- **Context7** — documentación de librerías. **No configurado**: no hay tools disponibles; no lo uses.
- **Playwright** — automatización E2E. **No configurado**: no hay tools disponibles; no lo uses.

No los añadas sin decisión del usuario.

## Chrome DevTools MCP

Aporta navegación, snapshot de accesibilidad (con `uid`), capturas, consola con stack traces, peticiones de red y trazas de rendimiento/Core Web Vitals.

### QA visual paso a paso

1. `pnpm dev` en marcha (Astro en `http://localhost:4321`).
2. `list_pages` y `navigate_page` a `http://localhost:4321`.
3. `take_snapshot` antes de interactuar; usa los `uid` del snapshot para clicar o escribir.
4. `take_screenshot` a `/tmp/opencode/`; nunca dentro del repo.
5. Alterna el tema con `evaluate_script` (`document.documentElement.dataset.theme = 'dark'` y `localStorage.setItem('artel-theme', 'dark')`) o clicando `ThemeToggle`.
6. `list_console_messages`: 0 errores es el criterio de aceptación.
7. Repite a 390, 768, 1024 y 1440 px (viewport) y revisa desbordes, foco y contraste.

## Privacidad

El MCP ve todo lo que hay en el navegador: no navegues a cuentas personales, correo, banca ni datos sensibles. `--isolated` usa un perfil temporal, sin sesiones previas.

`--no-usage-statistics` y `--no-performance-crux` son obligatorios en este proyecto (constitución, principio 7).

## Añadir un MCP

1. Justifica para qué sirve y si merece el coste de contexto: cada tool se inyecta en el prompt.
2. Elige local o remote y documenta el `command` o la `url`.
3. Secretos: `{env:VAR}` en `opencode.json` y `VAR=` en `.env.example`. Nunca el valor.
4. Activa los flags de privacidad si el servidor los tiene.
5. Reinicia opencode y prueba una tool real, no solo que aparezca en la lista.
6. Documenta el servidor en la tabla de esta skill y en `MEMORY.md`.

## Problemas típicos

- El navegador no arranca hasta la primera tool; es normal.
- `--isolated` usa un perfil temporal: no hay sesiones ni cookies previas.
- Conflicto de puerto: si 4321 está ocupado, `pnpm dev` elige otro; compruébalo antes de navegar.
- Usa Node LTS; `npx` descarga la última versión del paquete si no está en caché.
- Si una tool no aparece, revisa `mcp.servers`, reinicia y mira el log de opencode.

## Anti-patrones

- Añadir MCPs que no se usan: cada uno mete tools en el contexto y degrada la sesión.
- Meter secretos en `opencode.json` o en el repo.
- Usar el navegador para leer datos personales o cuentas.
- Dar por bueno un MCP porque aparece en la lista sin probar una tool.
