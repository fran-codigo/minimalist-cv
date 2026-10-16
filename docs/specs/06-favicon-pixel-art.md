# 06 — Favicon pixel art

## Objetivo y alcance
Rediseñar el icono de la pestaña para integrarlo con el estilo RPG oscuro del portafolio. Usar las iniciales FS de Franco Silva, azul y rojo sobre fondo nocturno, con marco escalonado. No modificar iconos sociales, contenido ni el resto de la interfaz; conservar `public/Logo.png` como recurso anterior.

## Comportamiento y criterios de aceptación
- Todas las páginas que utilizan `Layout.astro` comparten el nuevo favicon SVG.
- Monograma dibujado con bloques, sin fuentes externas, curvas, degradados ni animaciones.
- Retícula equivalente a 16 × 16 píxeles, con geometría alineada y `shape-rendering="crispEdges"`, para mantener nitidez a tamaños pequeños.
- Usar exclusivamente colores de la paleta existente, definidos dentro del SVG para no depender del CSS del documento.

## Implementación y verificación
Reemplazar el SVG inicial de Astro en `public/favicon.svg` y actualizar el enlace de `src/layouts/Layout.astro` a `/favicon.svg`, con tipo `image/svg+xml` y `sizes="any"`.

Verificar estructura XML, geometría de bloques, referencia desde el layout y `git diff --check`. Revisar una rasterización local a 16 y 32 píxeles con herramientas ya disponibles. La comprobación final en una pestaña del navegador queda pendiente; no ejecutar scripts del proyecto, levantar servidores ni instalar dependencias.
