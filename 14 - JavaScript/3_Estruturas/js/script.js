// 1 Variáveis
// let nome = "Matheus";

//console.log(nome)

//nome = "Carlos Z"

//console.log(nome)

//const idade = 23;

//console.log(idade)

// 2 - Mais sobre variáveis
// let 2teste = "inválido"
// let @teste = "inválido"

//let a = 10,
   // b = 20,
 //   c = 30;

//console.log(a, b, c,);


// 3 - prompt
// const age = prompt("Digite sua idade:")

// console.log(`Voce tem ${age} anos`)

// 4 - funcão alert

// alert("Testando");

// const number = 10

// alert(`O numero é ${number}`)

// 5 - math
//console.log(Math.max(5, 2, 1, 10));

//console.log(Math.floor(5.13));

//console.log(Math.ceil(5.14));

// 6 - console

//console.error("erro")

//console.warn("aviso")

// 7 - if

//const m = 10

//if(m > 5) {
  //  console.log("M é maior que 5")
//}

// 8 - else

// if(1 < 5) {
//    console.log("Teste")
// } else {
//    console.log("boa")
// }

// 9 - else if

//let userName = "Jose"
//let userAge = "23"

//if(userName === "Jose") {
 //   console.log("Teste do José")
//} else if(userName === "Carlos" && userAge === 23) {
 //   console.log("Olá CARLOS")
//} else {
  //  console.log("Nenhuma condição")
//

// 10 - While

//let p = 0

//while(p < 5) {
//   console.log(`Repetindo ${p}`)
  //  p = p + 1;
//}

// 11 - Do While

//let o = 10;

//do {
//  console.log(`Valor de o: ${o}`)
//  o--
// } while (o > 1)


// 12 - for (Mais utilizada)

//for(let t = 0; t < 10; t++) {
//  console.log("Repetindo algo")
//}

let r = 10

for(r; r > 0; r = r - 1) {
  console.log(`o r está diminuindo ${r}`)
}


// 14 - Forçando a saída do loop BREAK
for(let g = 20; g > 10; g--) {
  console.log(`O valor de g é: ${g}`)
  
  if (g === 12) {
    console.log("O g é 12!");
    break;
  }
}

// 15 - Pulando uma execução do loop (continue)
for(let s = 1; s < 10; s = s + 1){
  // operador resto = %
  if(s % 2 === 0) {
    console.log("Número par!")
    continue

    console.log(s);
  }
}

// 16 - Switch

const job = "Medico"

switch(job) {
  case "Programador":
    console.log("Você é programador")
    break
  case "Advogado":
    console.log("Você é um advogado")
    break
  default:
    console.log("Profissão não encontrada")
}



