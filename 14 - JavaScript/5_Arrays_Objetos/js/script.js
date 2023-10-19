// // 1 - array
// const lista = [1, 2, 3, 4, 5];

// console.log(lista);

// console.log(typeof lista);

// const itens = ["Carlos", true, 2, 4];

// console.log(itens)

// // 2 Mais sobre arrays
// const arr = ["a", "b", "c"];

// console.log(arr[0]);

// console.log(arr[2]);


// // 3 - Propriedades
// const numbers = [5, 3, 4];

// console.log(numbers.length);

// console.log(numbers["length"]);

// const myName = "CARLOS";

// console.log(myName.length);

// // 4 - métodos 
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "Algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase());

// console.log(text.indexOf("g"));

// // 5 - objetos
// const person = {
//     name1: "Carlos",
//     age: 23,
//     Job: "Programador"
// }

// console.log(person)

// // 6 - criando e deletando propriedades
// const car = {
//     engine: 2.0,
//     brand: "VW",
//     model: "Tiguan",
//     km: 20000,
// };

// console.log(car);

// car.doors = 4;

// console.log(car)

// delete car.km;

// console.log(car);

// 7 - Mais sobre Objetos
// const obj = {
//     a: "teste",
//     b: true
// }

// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj);

// console.log(obj2);

// // 8 - Conhecendo melhor os objetos
// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))

// // 9 - Mutação (Mutability)
// const a = {
//     name: "Carlos"
// }

// const b = a

// console.log(a);
// console.log(a);

// console.log(a === b);

// a.age = 31;

// console.log(b)

// // 10 - Loop em arrays (Bem importante esse looping)
// const users = ["Carlos", "Mateus"]

// for(let i = 0; i < users.length; i++) {
//     console.log(`Listando o usuário: ${users[i]}`);
// }

// //11 - push e pop
// const array = ["a","b","c"];

// array.push("d");

// console.log(array);

// console.log(array.length);

// array.pop();

// console.log(array);

// const itemRemovido = array.pop()

// console.log(itemRemovido);

// console.log(array);

// array.push("z","x");

// console.log(array);

// // 12 - Métodos de array: shift e unshift;

// const letters = ["a", "b", "c"];

// const letter = letters.shift();

// console.log(letter);

// console.log(letters);

// letters.unshift("p", "q", "r");

// letters.unshift("z");

// console.log(letters);

// // 13 - Métodos de array: indexOf e lastIndexOf

// const myElements = ["Morango", "Maça", "Abacate"];

// console.log(myElements.indexOf("Maça"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Abacate"));

// console.log(myElements.indexOf("Mamão"));

// console.log(myElements.lastIndexOf("Mamão"));

// // 14 - Método de array: slice 
// const testeSlice = ["a", "b", "c", "d", "e", "f"]

// const subArray = testeSlice.slice(2, 4);

// console.log(subArray);

// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4 + 1);

// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20);

// console.log(subArray3);

// // 15 - Metodos de array: forEach
// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {

//     console.log(`O número é ${numero}`)

// });

// const posts = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segunda post", category: "JavaScript"},
//     {title: "Terceiro post", category: "Phyton"},
// ]

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria ${post.category} `)

// }); 

// // 16 - metodos array: includes
// const brands = ["BMW", "VW", "FIAT"];

// console.log(brands.includes("FIAT"));

// // Se quiser incluir em um programa e avisar que tem a marca

// if(brands.includes("BMW")) {
//     console.log("Há carros da marca BMW!")
// }

// // 17 - Reverse
// const reverseTeste = [1, 2, 3, 4, 5];

// reverseTeste.reverse();

// console.log(reverseTeste);

// // 18 - Metodo de string: trim
// const trimTest = "  testando \n  "

// console.log(trimTest);

// console.log(trimTest.trim());

// console.log(trimTest.length);

// console.log(trimTest.trim().length);

// 19 - Método de string - padstart

// const testePadstart = "1"

// const newNumber = testePadstart.padStart(4, "0")

// console.log(testePadstart);

// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0")

// console.log(testePadEnd)

// // 20 - Método de string: split
// const frase = "O rato roeu"

// const arrayDaFrase = frase.split(" ");

// console.log(arrayDaFrase);

// // 21 - Métodos de string: join
// const fraseDenovo = arrayDaFrase.join(" ")

// console.log(fraseDenovo);

// // 22 - métodos de string repeat
// const palavra = "Testando";

// console.log(palavra.repeat(5));

// // 23 - rest operator (recurso mais moderno)

// const somaInfinita = (...args) => {
//     let total = 0;

//     for (let i = 0; i < args.length; i++) {

//         total += args[i];

//     }

//     return total;
// };

// console.log(somaInfinita(1, 2, 3));

// console.log(somaInfinita(5, 6))

// // 24 - estrutura de repetição for of
// const somaInfinita2 = (...args) => {
//     let total = 0

//     for(num of args) {
//         total += num;
//     }

//     return total;

// };

// console.log(somaInfinita2(1, 2, 4));

// 25 - Destructuring em objetos
const userDetails = {
    firstName: "Carlos",
    lastName: "Zanella",
    job: "Programador"
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job);

// renomear variaveis
const {firstName: primeiroNome } = userDetails;

console.log(firstName);

// 26 - Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"]

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
const myJson = 
'{"name": "Carlos", "age": 23, "skills": ["PHP", "JS", "React"]}';

// 28 - JSON para objeto e para JSON

const myObject = JSON.parse(myJson);

console.log(myObject.name);

console.log(typeof myObject);

//  json inlivado
const badJson = '{"name": Carlos, "age": 23}'

// const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)



