// Obtener el elemento de la pantalla
const display = document.getElementById('display');

// Función para agregar un valor (número u operador) a la pantalla
function appendToDisplay(value) {
    display.value += value;
}

// Función para limpiar la pantalla (Botón AC)
function clearDisplay() {
    display.value = '';
}

// Función para borrar el último caracter (Botón DEL)
function deleteLast() {
    // slice(0, -1) corta el último caracter del string
    display.value = display.value.slice(0, -1);
}

// Función para calcular el resultado (Botón =)
function calculateResult() {
    try {
        // eval() toma el string (ej. "5+3") y lo ejecuta como código JS.
        // ¡Es muy poderoso pero puede ser inseguro en proyectos grandes!
        const result = eval(display.value);
        
        // Manejar división por cero (que da 'Infinity')
        if (result === Infinity || result === -Infinity) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        // Si la expresión es inválida (ej. "5++3"), muestra Error
        display.value = 'Error';
    }
}