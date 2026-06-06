# Workflow

## Objetivo

Registrar cambios del proyecto de forma consistente sin depender de memoria, commits sueltos o explicaciones informales.

## Secuencia recomendada

1. Identificar el cambio real hecho en el proyecto.
2. Detectar si fue pequeno, mediano o grande.
3. Clasificarlo por tipo.
4. Elegir quick log o full log.
5. Actualizar el archivo de changelog existente o crear `docs/changes/YYYY-MM-DD-XX.md` si no hay convencion.

## Prioridades

- Reutilizar el changelog ya existente si el proyecto tiene uno.
- Mantener consistencia de formato dentro del mismo proyecto.
- Preferir varias entradas claras antes que una entrada gigante y confusa.
- Si no hay convencion previa, usar archivos por fecha completa y correlativo diario de dos digitos.

## Cuando agrupar cambios

Agrupar solo cuando:

- forman parte de la misma tarea
- afectan el mismo flujo
- tienen una razon comun

Separar entradas cuando:

- mezclan bugfix y feature sin relacion
- tocan modulos distintos
- tienen impactos diferentes
- corresponden a nuevas funcionalidades separadas registradas el mismo dia

## Cierre de cada registro

Siempre dejar claro, aunque sea en una linea:

- que cambio
- cual fue el impacto
- si quedo algun pendiente
