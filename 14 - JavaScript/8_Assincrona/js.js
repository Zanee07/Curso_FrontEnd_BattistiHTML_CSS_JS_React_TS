// // Assincrona - repostas que não são obtidads de formas imediatas


// // 1 - setTimeout
// console.log("Ainda não executou")

// setTimeout(function() {

//     console.log("Requisição assíncrona")

// }, 2000)

// console.log("Ainda não executou 2")

// // 2 setInterval
// console.log("Ainda não começou")

// setInterval(function() {
//     console.log("Intervalo assíncrono");
// }, 3000);

// console.log("Ainda não começou");

// 3 - Promise (Prometamos que vai ter um valorr esse valor pode chegar em um valor futuro)

const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa
    .then((value) => {
        console.log(`A soma é ${value}`);
        return value;
    })
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é ${value}`));

console.log("Outro código");

// 4 - Falha na promise
Promise.resolve(4 * "asd")
.then((n) => {
    if(Number.isNaN(n)) {
        throw new Error("Valores inválidos")
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`))

// 5 - rejeição 
function checkNumber(n) {
    return new Promise.
}

