//VARIABLES
let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 2 * PI;

// BOLEANOS
booleanoAnd = booleano1 && booleano2;
booleanoNot = !booleano1;
booleanoMix0 =
  (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

// OPERADORES
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

// BUCLES
contarHasta10_2 = 0;
for (let i = 0; contarHasta10_2 !== 10; i++) {
  contarHasta10_2++;
}

let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
  postI += postJ++;
}

let sumaPares = 0;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}
