// // 1 - Métodos
// const animal = {
//     nome: "bob",
//     latir: function(){
//         console.log("Au au")
//     }
// };

// console.log(animal.nome);

// animal.latir();

// // 2 - Aprofundando em Métodos

// const pessoa = {
//     nome: "carlos",

//     getNome: function () {
//         return this.nome;
//     },

//     setNome: function (novoNome) {
//         this.nome = novoNome;
//     }
// };

// console.log(pessoa.nome);

// console.log(pessoa.getNome());

// pessoa.setNome("Joaquin");

// console.log(pessoa.getNome())

// // 3 - Prototype - fullback
// const text = "asd"

// console.log(Object.getPrototypeOf(text));

// const bool = true

// console.log(Object.getPrototypeOf(bool));

// // 4 - Mais sobre prototype
// const myObject = {
//     a: "b"
// }

// console.log(Object.getPrototypeOf(myObject));

// // 5 - Classes Básicas
// const cachorro = {
//     raca: null
// }

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);

// // 6 - Classes baseadas em funções construtoras
// function criarCachorro(nome, raca) {
//     const cachorro = Object.create({})
//     cachorro.nome = nome
//     cachorro.raca = raca

//     return cachorro
// }

// const bob = criarCachorro("bob", "Vira lata");

// console.log(bob);

// // 7 - Funções como classe "construtoras"
// function Cachorro(nome, raca) {
//     this.nome = nome
//     this.raca = raca
// }

// const husky = new Cachorro("Ozzy", "Husky");

// console.log(husky);

// // 8 Classes de função com métodos
// Cachorro.prototype.uivar = function() {
//     console.log("Auuuuu!")
// };

// console.log(Cachorro);

// husky.uivar();

// // 9 - Classes es6
// class CachorroClasse {
//     constructor(nome, raca) {
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new CachorroClasse("Jeff", "Labrador");

// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));

// 10 - Mais sobre classes

// class Caminhao {
//     constructor(eixos, cor) {
//         this.eixos = eixos;
//         this.cor = cor;
//     }

//     descreverCaminhao() {
//     console.log(`Este caminhão tem ${this.eixos} eixos é da cor ${this.cor}`);
//     }
// }

// const scania = new Caminhao(6, "Vermelha");

// console.log(scania);

// scania.descreverCaminhao();

// // 11 - override
// class Humano {
//     constructor(nome, idade) {
//         this.nome
//         this.idade
//     }
// }

// const carlos = new Humano("Carlos", 23);

// console.log(carlos);

// Humano.prototype.idade = "Não definida";

// console.log(carlos.idade);

// console.log(Humanp.prototype.idade);

// 12 - Symbols em Classes

    class Aviao {
        constructor(marca, turbinas) {
            this.marca = marca
            this.turbinas = turbinas
        }
    }

    const asas = Symbol()
    const pilotos = Symbol()

    Aviao.prototype[asas] = 2;

    Aviao.prototype[pilotos] = 3;

    const boeing = new Aviao("Boeing", 10);

    console.log(boeing);

    console.log(boeing[asas]);
    
    console.log(boeing[pilotos]);

// 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }


    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionar(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, nodejs";

console.log(myPost);

// 14 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo()

console.log(shark)

console.log(shark.patas)

// 15 - instanceof
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Lobo("a", "b") instanceof Cachorro);