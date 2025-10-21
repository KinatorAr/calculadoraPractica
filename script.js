// Simulación del DOM para el entorno de prueba
const display = {
    value: ''
};

// **IMPORTANTE:** Estas son las funciones de tu código
function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(display.value);

        if (result === Infinity || result === -Infinity) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

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
