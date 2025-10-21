# Documentación de Pruebas - Calculadora

Esta actividad contiene pruebas para validar el funcionamiento de una calculadora simple implementada en JavaScript.

---

## Prueba Unitaria - Suma Correcta

Una **prueba unitaria** verifica que una función individual funcione correctamente de manera aislada.

### Caso: `3 + 5`

```javascript
// **Prueba Unitaria: Suma Correcta (3 + 5)**
function testSumaCorrecta() {
    // 1. Limpiar el estado inicial
    clearDisplay();

    // 2. Realizar la operación (3 + 5)
    appendToDisplay('3');
    appendToDisplay('+');
    appendToDisplay('5');

    // 3. Calcular el resultado
    calculateResult();

    // 4. Verificar el resultado
    const esperado = 8;
    const obtenido = display.value;

    if (obtenido == esperado) {
        console.log(`Prueba Unitaria (Suma): ¡Éxito! 3 + 5 = ${obtenido}`);
    } else {
        console.error(`Prueba Unitaria (Suma): Falló. Esperado: ${esperado}, Obtenido: ${obtenido}`);
    }
}

// Ejecutar la prueba
// testSumaCorrecta();

## Prueba de Integración - Operaciones Encadenadas

Esta prueba verifica cómo interactúan múltiples operaciones matemáticas en la calculadora, encadenando resultados intermedios.

### Caso de Prueba: `5 * 2 - 4`

```javascript
// **Prueba de Integración: Operaciones Encadenadas (5 * 2 - 4)**
function testOperacionesEncadenadas() {
    // 1. Limpiar el estado inicial
    clearDisplay();

    // 2. Primera operación: Multiplicación (5 * 2)
    appendToDisplay('5');
    appendToDisplay('*');
    appendToDisplay('2');
    calculateResult(); // Resultado intermedio: 10

    // 3. Segunda operación: Resta (- 4)
    appendToDisplay('-'); // Se concatena al resultado (10 - ...)
    appendToDisplay('4');
    calculateResult(); // Resultado final: 6

    // 4. Verificar el resultado
    const esperado = 6;
    const obtenido = display.value;

    if (obtenido == esperado) {
        console.log(`Prueba de Integración (Encadenadas): ¡Éxito! 5 * 2 - 4 = ${obtenido}`);
    } else {
        console.error(`Prueba de Integración (Encadenadas): Falló. Esperado: ${esperado}, Obtenido: ${obtenido}`);
    }
}

// Ejecutar la prueba
testOperacionesEncadenadas();
