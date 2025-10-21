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
```

## Prueba de Integración - Operaciones Encadenadas

Esta prueba verifica cómo interactúan múltiples operaciones matemáticas en la calculadora, encadenando resultados intermedios.

**Descripcion**: En esta prueba se agrega el siguiente operador en este caso **la resta**, si esta prueba hace bien la operacion matematica de 3 operadores
este dara una aprovacion satisfactoria, de igual manera este logro pasar dichos requerimientos de forma satisfactoria

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
```
## Prueba de Rendimiento - 100,000 Cálculos

Esta prueba mide el tiempo que tarda el motor de JavaScript en procesar la misma operación compleja 100,000 veces, evaluando el rendimiento de la calculadora.

### Código de la Prueba

```javascript
/**
 * **Prueba de Rendimiento: 100,000 Cálculos**
 * Mide el tiempo que tarda el motor de JS en procesar
 * la misma operación compleja miles de veces.
 */
function testRendimiento() {
    console.log("⏱️ Iniciando Prueba de Rendimiento...");
    
    // 1. Configuración
    const REPETICIONES = 100000; // Cien mil veces
    const EXPRESION_COMPLEJA = '(150.5 * 3.14) / 2 + (45 - 15.3)';
    
    // 2. Iniciar el cronómetro
    // Le damos un nombre único: 'calculo_100k'
    console.time('calculo_100k');

    // 3. Ejecutar el bucle
    for (let i = 0; i < REPETICIONES; i++) {
        // IMPORTANTE: Debemos reasignar la expresión en cada ciclo,
        // porque calculateResult() sobrescribe display.value con el resultado.
        display.value = EXPRESION_COMPLEJA;
        
        // Ejecutamos la función que queremos probar
        calculateResult();
    }

    // 4. Detener el cronómetro y mostrar el resultado
    // Usamos el mismo nombre: 'calculo_100k'
    console.timeEnd('calculo_100k');
    
    console.log(`Prueba de Rendimiento Finalizada. ${REPETICIONES} cálculos completados.`);
    console.log(`El resultado final en el display es: ${display.value}`); // Debería ser 251.62
}

// --- Ejecutar las pruebas ---
// testSumaCorrecta();
// testOperacionesEncadenadas();
testRendimiento();
