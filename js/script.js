let nombre = "";

nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuántos años tienes?"));
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}`);

let pregunta = parseInt(prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`));

if (pregunta == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (pregunta == 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
    alert("Debes introducir el número 1 o el 2.");
}