# Documentación de Pruebas - Calculadora

Esta actividad contiene pruebas para validar el funcionamiento de una calculadora simple implementada en JavaScript.

---

## Prueba Unitaria - Suma Correcta

Una **prueba unitaria** verifica que una función individual funcione correctamente de manera aislada.

**Descripcion**: Este codigo hace una verificacion en donde limpia todo el display y hace la suma de forma automatica
si la realiza este pasara la prueba de forma satisfactoria en este caso si cumplio con dicho requisito

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
