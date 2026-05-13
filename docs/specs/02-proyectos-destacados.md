# Spec: Página de Proyectos Destacados

## Contexto
El portafolio actual muestra todos los proyectos en la página principal, lo cual puede ser abrumador cuando la lista crece. El usuario requiere limitar el número de proyectos en la vista principal y proporcionar una sección separada para explorar el portafolio completo, manteniendo el diseño original.

## Problema
Al agregar muchos proyectos al `cv.json`, la sección "Proyectos" en la landing page (`src/pages/index.astro`) se vuelve muy larga y no permite destacar estratégicamente algunos trabajos por encima de otros.

## Objetivo
- Limitar a los proyectos más relevantes (3 a 6 máximo) en la página principal.
- Crear una nueva página independiente para listar todos los proyectos registrados.
- Habilitar una bandera (flag) en `cv.json` que decida cuáles proyectos aparecen en la página principal.
- Mantener la coherencia del diseño en ambas vistas.

## Alcance
- Edición de `src/components/sections/Projects.astro` para filtrar por flag y limitar la cantidad, agregando un link hacia la lista completa.
- Creación de `src/pages/proyectos/index.astro` reutilizando componentes de diseño existentes.
- Edición de `cv.json` para incluir la propiedad booleana `isFeatured` en los objetos de la lista de proyectos.

## No Alcance
- Refactorización de estilos globales.
- Alteración de la estructura del resto del portafolio.
- Añadir paginación o búsqueda en la nueva página de proyectos (solo un listado estático por ahora).

## Criterios de Aceptación
1. La landing page exhibe solo aquellos proyectos de `cv.json` donde `"isFeatured": true`, hasta un máximo de 6 elementos.
2. Al final de la sección de proyectos destacados hay un enlace que conduce a `/proyectos`.
3. La ruta `/proyectos` carga exitosamente y muestra un grid con *todos* los proyectos que existen en el `cv.json`.
4. El diseño y animaciones de los proyectos (ej: flicker de viñetas, badges) se mantienen idénticos al original.
5. Se ha agregado la propiedad `isFeatured` a los proyectos en el archivo `cv.json`.

## Impacto Técnico
- **Astro Component**: `Projects.astro` ahora incorpora la lógica de filtrado `.filter(project => project.isFeatured).slice(0, 6)`.
- **Nuevo Endpoint Estático**: Astro generará la nueva ruta en build time a partir de `src/pages/proyectos/index.astro`.
- **Estructura de Datos**: El esquema implícito de `projects` en `cv.json` ahora soporta y espera el booleano `isFeatured` (retrocompatible con falso/indefinido por el filtro estricto).

## Plan de Implementación
1. [x] Modificar `cv.json` añadiendo la propiedad `"isFeatured": true` en al menos dos proyectos a modo de prueba.
2. [x] Editar `src/components/sections/Projects.astro` para filtrar por `isFeatured`, aplicar un límite `.slice(0, 6)` y agregar un botón/enlace "Ver todos los proyectos".
3. [x] Crear `src/pages/proyectos/index.astro` estructurada como un Layout con una sección dedicada que mapea todos los elementos de `projects` de `cv.json`, e incluye un botón "Volver al inicio".
4. [x] Escribir la especificación en `docs/specs/02-proyectos-destacados.md`.

## Verificación
- Abrir la página principal localmente y verificar visualmente que solo aparecen proyectos con `isFeatured` = true.
- Hacer click en "Ver todos los proyectos" y verificar que la URL cambie a `/proyectos` y muestre el portafolio íntegro.
- Validar consola en busca de advertencias sobre `isFeatured` faltante en el resto de los elementos (si no se aplicó en todos). No debería haber errores.