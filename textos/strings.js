let nombre = "Ariel";
let apellido = "Martinez";

let estudiante = nombre + " " + apellido;
console.log(estudiante);

let estudianteMayus = estudiante.toLocaleUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus);

let numLetras = estudiante.length;
console.log(numLetras);

let primerLetra = nombre.charAt();
console.log(primerLetra);

let ultimaLetra = apellido.charAt(7);
console.log(ultimaLetra);

let espacios = estudiante.trim();
console.log(espacios.length);

let boolean = nombre.includes(`${nombre}`);
console.log(boolean);

