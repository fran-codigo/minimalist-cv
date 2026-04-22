# Spec: Modo Oscuro Quirúrgico

## Contexto y Problema
El portafolio/CV minimalista, construido con Astro, carecía de un modo oscuro, lo que afectaba la comodidad de lectura para los usuarios que prefieren esquemas de color nocturnos. El diseño original utilizaba colores duros en tonos grises dentro de cada componente, imposibilitando un cambio dinámico de tema.

## Objetivo
Implementar un modo oscuro manual, persistente y no intrusivo que se integre de forma natural en el diseño minimalista del CV.

## Alcance
- **Variables CSS**: Centralizar todos los colores hardcodeados en variables globales en `:root`.
- **Modos de Tema**: Definir los colores para el modo oscuro en la clase `html.dark`.
- **Toggle UI**: Agregar un botón de cambio (sol/luna) en el encabezado de la sección `Hero` (junto al nombre).
- **Toggle Paleta**: Agregar un comando "Cambiar tema claro/oscuro" (Ctrl+T) en el `KeyboardManager` (`ninja-keys`).
- **Persistencia**: Guardar la preferencia en `localStorage` y evitar el parpadeo de pantalla (FOUC) mediante un script en el `<head>`.
- **Impresión**: Garantizar que el modo oscuro nunca se aplique al imprimir (forzando variables claras en `@media print`).
- **Mejoras Visuales**: Refinar la sección de "Experiencia" utilizando viñetas de disco (`ul` / `li`), mejorando el interlineado y ajustando los tonos grises de las descripciones para optimizar la legibilidad en ambos modos.

## No Alcance
- No se detecta o sincroniza de forma reactiva con el tema del sistema (solo se usa como estado inicial si no hay preferencia guardada).
- No se utilizan librerías de componentes UI complejas ni frameworks CSS adicionales (se mantiene CSS puro y componentes Astro).
- No se alteran otros flujos de datos (`cv.json` o layouts ajenos a colores).

## Solución Técnica
1. **Layout Principal (`src/layouts/Layout.astro`)**:
   - Variables CSS extraídas y centralizadas (`--color-bg`, `--color-text-base`, etc.).
   - Clase `.dark` en `html` para sobreescribir colores.
   - Forzado de colores claros en `@media print`.
   - Script inline en el `<head>` para cargar la preferencia y evitar el flash blanco.
2. **Componentes Refactorizados**:
   - Sustitución de colores hex por variables CSS en: `Hero.astro`, `Experience.astro`, `Education.astro`, `Projects.astro`, `Skills.astro` y `KeyboardManager.astro`.
   - Modificación general de los estilos `h1, h2, h3, h4` y `p` a nivel global.
3. **Botón Toggle (`src/components/sections/Hero.astro`)**:
   - Inserción del botón (`#theme-toggle`) en el `header` junto al título principal.
   - Script y estilos específicos (soles y lunas en SVG) que reaccionan a la clase `.dark`.
4. **Comando de Paleta (`src/components/KeyboardManager.astro`)**:
   - Se añadió la acción de "Cambiar tema" usando el handler `toggleTheme` y la tecla de atajo `Ctrl+T`.
5. **Ajuste de Experiencia (`src/components/sections/Experience.astro`)**:
   - Cambio de guiones manuales a listas con `list-style-type: disc`.
   - Ajuste de interlineado y paddings para un bloque de lista más limpio y ordenado.

## Criterios de Aceptación Cumplidos
- [x] El CV tiene un botón en el header que alterna de modo claro a oscuro.
- [x] Existe el atajo Ctrl+T (en la paleta de comandos) para alternar el tema.
- [x] El estado del tema se guarda en el navegador (persiste al recargar).
- [x] No hay flash blanco al recargar la página si el tema oscuro está activo.
- [x] Al abrir el diálogo de impresión, los estilos se fuerzan al modo claro independientemente de la preferencia en pantalla.
- [x] Las descripciones en el bloque de experiencia utilizan colores legibles y los puntos destacados de experiencia son viñetas reales (`disc`).
- [x] Los títulos (`h1`-`h4`) adoptan correctamente el color `var(--color-text-heading)` adaptándose en ambos modos.