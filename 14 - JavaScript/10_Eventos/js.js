// 1 - Adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {

    console.log("clicou aqui!")

})

// exemplo acima disparou o evento

// 2 - removendo evento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("other-btn");

thirdBtn.addEventListener("click", () => {

    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);

})

// 3 - Argumento do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.offsetx);
    console.log(e.pointerType);
    console.log(e.target);

})

// 4 - propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsiderContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
})

btnInsiderContainer.addEventListener("click", () => {
    e.stopPropagation()
    console.log("Evento 2")
})

// 5 - removendo evento padrão
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Não alterou a página")
})

// 6 - eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

