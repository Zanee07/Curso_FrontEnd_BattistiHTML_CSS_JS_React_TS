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