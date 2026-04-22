# Checklist

## Antes de programar

- Que supuestos estoy haciendo?
- La solicitud es ambigua en algo que cambie la implementacion?
- Existe una solucion mas simple que la primera idea?
- Que contara exactamente como exito?

## Mientras implemento

- Estoy agregando algo que el usuario no pidio?
- Estoy creando abstracciones para codigo de un solo uso?
- Estoy tocando archivos o logica no relacionada?
- Cada cambio se puede justificar directamente por el pedido?

## Antes de terminar

- Mantube el cambio lo mas pequeno posible?
- Limpié solo los residuos creados por mi cambio?
- Dejé una forma concreta de verificar el resultado?
- Expuse claramente supuestos, tradeoffs y riesgos restantes?

## Preguntas utiles de revision

- Que parte de este cambio es especulativa?
- Que se puede borrar sin afectar el resultado pedido?
- Que linea del diff no mapea limpio al pedido?
- Que evidencia muestra que el cambio cumple el objetivo?
