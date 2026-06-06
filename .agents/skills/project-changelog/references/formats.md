# Formatos de registro

## Formato recomendado para `docs/changes/YYYY-MM-DD-01.md`

```md
## 2026-04-02

### fix (micro)
Se corrigio el calculo de total en el carrito cuando habia descuentos acumulados.

- Archivos: `app/cart.ts`, `app/discounts.ts`
- Impacto: el total mostrado ahora coincide con el cobro final
- Pendiente: agregar prueba para descuentos combinados
```

## Quick log

Usar este bloque cuando el cambio sea pequeno:

```md
## YYYY-MM-DD

### tipo (nivel)
Resumen corto del cambio.

- Archivos: `ruta/opcional.ts`
- Impacto: resultado practico
- Pendiente: opcional
```

## Full log

Usar este bloque cuando el cambio merezca mas contexto:

```md
## YYYY-MM-DD

### tipo (nivel) - Titulo corto

Contexto:
Descripcion breve del problema o necesidad.

Cambio realizado:
Descripcion concreta de lo implementado.

Impacto funcional:
Como cambia el comportamiento para usuario o negocio.

Impacto tecnico:
Que cambia internamente.

Archivos o modulos:
- `ruta/uno.ts`
- `ruta/dos.ts`

Pendientes o riesgos:
- Item opcional
```

## Nombre de archivo

Usar siempre fecha completa y correlativo diario de dos digitos:

- `docs/changes/2026-04-14-01.md`
- `docs/changes/2026-04-14-02.md`
- `docs/changes/2026-04-14-03.md`

Regla:

- Si en el mismo dia se agrega una nueva funcionalidad o una entrada separada, incrementar el correlativo.
- Revisar primero los archivos ya existentes de esa fecha para continuar la secuencia correcta.

Mantener exactamente la misma estructura interna del contenido en todos los archivos del dia.
