# Checklist

## Antes de programar

- Que supuestos estoy haciendo?
- La solicitud es ambigua en algo que cambie la implementacion?
- Ya revise el codigo o docs para no preguntarle al usuario algo que el repo responde?
- Si debo preguntar, puedo formular una sola pregunta con respuesta recomendada?
- Existe una solucion mas simple que la primera idea?
- Que contara exactamente como exito?

## Mientras implemento

- Estoy agregando algo que el usuario no pidio?
- Estoy creando abstracciones para codigo de un solo uso?
- Estoy tocando archivos o logica no relacionada?
- Cada cambio se puede justificar directamente por el pedido?

## Antes de terminar

- Mantuve el cambio lo mas pequeno posible?
- Limpie solo los residuos creados por mi cambio?
- Deje una forma concreta de verificar el resultado?
- Expuse claramente supuestos, tradeoffs y riesgos restantes?

## Preguntas utiles de revision

- Que parte de este cambio es especulativa?
- Que se puede borrar sin afectar el resultado pedido?
- Que linea del diff no mapea limpio al pedido?
- Que evidencia muestra que el cambio cumple el objetivo?
