# 04 · Detalles de proyecto como casos de estudio

## Objetivo y alcance aprobado
Aplicar la propuesta tipográfica y de presentación aceptada por el usuario: páginas de detalle con identidad RPG y lectura editorial. Afecta a las 13 rutas existentes, mediante una plantilla compartida; no rediseña landing ni listado, no cambia rutas, URLs ni datos de `cv.json`.

## Presentación y criterios
- Encabezado: regreso al listado, nombre, resumen breve, estado solo si existe, stack, enlace al sitio solo cuando esté documentado y portada grande sin recortar la interfaz. Sin repositorios inventados.
- Source Sans 3 autoalojada para cuerpo a 18–20 px, interlineado 1.7, ancho de lectura acotado. Press Start 2P en encabezados cortos; VT323 en navegación, etiquetas, stack y controles. La fuente nueva solo se carga en detalles.
- Contexto: necesidad y solución a partir del texto actual; tres a cinco funciones principales y decisiones técnicas respaldadas por contenido existente. No inventar resultados, métricas, roles ni fechas.
- Documentación original en un bloque nativo desplegable: conservar todo el contenido de cada página, incluidas capturas, enlaces y acceso de demo ya publicado. Corregir tamaño de las imágenes y jerarquía tipográfica dentro de ese bloque.
- Galería curada de capturas representativas con pies descriptivos, lazy loading y enlaces a originales. Ampliación con diálogo nativo, cierre mediante botón/Escape/clic fuera, foco restaurado, anterior/siguiente por botones y flechas solo con el visor abierto. Sin carrusel automático.
- Índice lateral sticky en escritorio y desplegable en móvil; enlaces funcionales sin JS. Navegación anterior/siguiente incluye las 13 rutas, sin enlaces ficticios ni bucle en extremos.
- Cafetería, sin captura propia, muestra fallback y no galería vacía. KontrolFit Desktop identifica sus capturas como provisionales de la versión web.
- Devstagram existe como ruta, pero no en `cv.json`: usar únicamente título, stack, capturas y enlace de su página; omitir estado y fechas no documentados.
- Impresión clara: documentación expandida en impresión, sin índice, controles o diálogo. Movimiento reducido respetado. Sin JS las imágenes de la galería abren el original y la documentación funciona con `details`.

## Implementación
- `src/layouts/ProjectLayout.astro`: estructura común y estilos locales; eliminar reglas globales genéricas que afectaban `main`, títulos, párrafos e imágenes.
- `src/data/projectDetails.ts`: resúmenes, categorías, funciones, decisiones y selección visual vinculados a rutas explícitas; metadatos existentes se leen de `cv.json`.
- `src/components/projects/ProjectGallery.astro`: galería y lightbox progresivo sin librerías.
- `public/fonts/`: Source Sans 3 oficial y licencia SIL OFL, sin nuevas dependencias.
- Conservar intacto el contenido fuente de `src/pages/proyectos/*.astro`; el slot original pasa al apartado ampliable.

## Verificación
Revisión estática de cobertura de las 13 rutas, correspondencia con datos, existencia de capturas/fuentes/licencia, orden anterior/siguiente y ausencia de estilos genéricos globales.

Pendiente de ejecutar por el usuario (flujo SSD sin scripts del proyecto, servidores ni instalaciones): `pnpm build`; revisión con `pnpm dev` en 320, 375, 768, 1024 y 1440 px; teclado, Escape/flechas y retorno de foco, apertura de documentación, fallback sin JS, reduced-motion, impresión y regresiones de landing/listado. La validación estática no sustituye el build ni la revisión visual.
