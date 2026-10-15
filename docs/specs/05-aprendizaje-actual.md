# 05 — Aprendizaje actual

## Objetivo y alcance
Agregar el aprendizaje actual aprobado por el usuario entre Inventario y Educación: Hono + Vue + Cloudflare, con un objetivo práctico de despliegue full stack mediante planes gratuitos. Sin modificar habilidades dominadas, navegación ni datos del CV.

## Comportamiento y criterios de aceptación
- Panel «Actualmente aprendiendo» con etiqueta visible «EN PROGRESO» y encabezado «Hono + Vue + Cloudflare».
- Texto aprobado: «Estoy explorando Hono para crear APIs conectadas a aplicaciones Vue y desplegarlas en Cloudflare, aprovechando sus planes gratuitos para lanzar proyectos full stack sin coste inicial.»
- Reutilizar RetroPanel y la paleta y tipografías existentes; sin barras de progreso, animaciones nuevas ni dependencias.
- Mantener orden Inventario → Aprendizaje → Educación en escritorio y móvil; actualizar la numeración de Educación a 06.

## Implementación y verificación
Crear `src/components/sections/Learning.astro` e integrarlo en la sidebar de `src/pages/index.astro`. Actualizar el índice de `src/components/sections/Education.astro`.

Revisión estática de estructura, importaciones y estilos; ejecutar únicamente `git diff --check`. Queda pendiente comprobar en navegador el ajuste del título largo, las columnas a 850px, la vista móvil a 360px y la impresión. No ejecutar scripts del proyecto ni instalar dependencias.
