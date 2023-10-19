// 1 - strict
"use strict"; // Usados em projetos profissionais, ele identifica o erro no inspecionar do google

//opa = "teste";

const opa = "teste"

// 2 - Método de debug: console log
let a = 1
let b = 2

if(a == 1) {
    a = b + 2;
}

console.log(a)

for(let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a)
}

if(a > 5) {
    a = 25;
}

console.log(a)

// 3 - debugger
let c = 1
let d = 2

if(c ==1) {
    c = d + 2
}

// debugger; //no debbug do navegador ele trava aqui

for(let i = 0; i < d; i++) {
    c = c + 2;
}

console.log("executou o loop");

debugger;

if (c > 5) {
    c = 25;
}