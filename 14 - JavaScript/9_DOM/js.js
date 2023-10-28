// // 1 - movendo-se pelo dom

// console.log(document.body);

// console.log(document.body.childNodes[1]);

// console.log(document.body.childNodes[1].childNodes);

// console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Selecionar elementos por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - Selecionar elementos por ID

const title = document.getElementById("title")

console.log(title)

// 4 - selecionando elementos por classe
const products = document.getElementsByClassName(products);

console.log(products);

// 5 - Encontrando elementos por CSS
const productsQuery = document.querySelectorAll(".product");

console.log(productsQuery)

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer)

// 6 - Alterando o HTML - insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title)

// 7 - Método appendChild (adicionando)
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li);

// 8 - replaceChild (trocar)
const h2 = document.createElement("h2")

h2.textContent = "Meu novo título"

header.replaceChild(h2, title)