# Hero compacto

## Objetivo y alcance
Acercar los bloques de presentación y PLAYER_01 y reducir la altura del hero conservando su estética y contenido. No modificar navegación, otras secciones ni componentes compartidos.

## Implementación y criterios
- Limitar el conjunto a 960px y reducir la separación horizontal a 1.5rem.
- Reducir padding vertical, márgenes del texto y acciones e interlineado del título.
- Limitar PLAYER_01 a 400px en escritorio y 340px en móvil, conservando la proporción de la ilustración y sus controles.
- Mantener una columna hasta 680px, sin ocultar contenido ni fijar alturas.

## Verificación
Revisión estática del diff y de los breakpoints. Pendiente comprobar visualmente en escritorio (1366×768 y 1024×768), tablet (768px) y móvil (375px y 320px), incluidos enlaces y controles. En móvil el contenido apilado puede requerir scroll. No ejecutar scripts ni levantar servidores.
