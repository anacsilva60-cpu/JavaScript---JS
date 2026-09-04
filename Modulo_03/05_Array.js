const frutas = ["maça", "banana", "laranja", "uva", "abacaxi", "pera"];

// Acessando elementos do Array
console.log("\nAcessando elementos do Array");
console.log(frutas[3]);


// Contando elementos do Array
console.log("\nContando elementos do Array");
console.log(frutas.length);


// Acessando o último elemento do Array
console.log("\nAcessando o último elemento do Array");
console.log(frutas[frutas.length - 1]);


// Alterando elemento do Array
console.log("\nAlterando elemento do Array");
frutas[0] = "Morango";
console.log(frutas);


// Colocando no final do Array
console.log("\nColocando no final do Array");
frutas.push("Uva");
console.log(frutas);


// Colocando no início
console.log("\nColocando no início");
frutas.unshift("Manga");
console.log(frutas);


// Deleta o final do Array
console.log("\nDeleta o final do Array");
frutas.pop();
console.log(frutas);


// Deleta o início do Array
console.log("\nDeleta o início do Array");
frutas.shift();
console.log(frutas);


// Deleta item final do Array, e mostra ele
console.log("\nDeleta item final do Array, e mostra ele");
const itemRemovido = frutas.pop();
console.log(itemRemovido);


// Varrendo o Array | for of...   -----------------------------------------------------------------------------------
console.log("\nVarrendo o Array");

for (const fruta of frutas) {
    console.log(fruta);
}

// forEach executa uma função para cada elemento do Array --------------------------------------------------------------------------
// console.log("\n forEach");

// frutas.forEach((fruta) => {
//     console.log(fruta);
// });

// Primeira letra maiuscula
console.log("\nPrimeira letra maiuscula");

frutas.forEach((fruta) => {
    const nomeFrutaPrimeiraLetraMaiuscula = 
    fruta.charAt(0).toUpperCase() + fruta.slice(1); // coloca em maiusculo a posição 0 (primeira letra), e faz com que as outras continuem minusculas (slice)
    console.log(nomeFrutaPrimeiraLetraMaiuscula);
});

// ===================================================================================================================================

// forEach - O que quero fazer com cada elemento?

// map - Como quero transformar cada elemento?

// filter - Quais elemento quero manter?

console.log("\n==========================================================================================\n");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// map - criar um novo Array com os elementos modificados ----------------------------------------------------------
console.log("\n----> map");

const numeroDobrados = numeros.map((numero) => {
    return numero / 2;
});
console.log(numeroDobrados);


// filter - criar um novo Array com os elementos que atendam a uma condição ------------------------------------------
console.log("\n----> filter");

const maioresQue3 = numeros.filter((numero) => {
    return numero > 3;
})
console.log(maioresQue3); 


// find - procura um elemento que satisfaça uma condição --------------------------------------------------------------
console.log("\n----> find");

const numeroFind = numeros.find((n) => n > 4);
console.log(numeroFind);

//  Diferença de Filter e Find 

// ===> filter
// -> retorna vários elementos

// ===> find
// -> retorna o primeiro elemento


// some - Verifica se pelo menos um atende a uma condição --------------------------------------------------------------------
console.log("\n----> some");

const existeMaiorQue5 = numeros.some(n => n > 8);
console.log(existeMaiorQue5);


// every - verifica se todos os elementos atendem a uma condição ---------------------------------------------------------------
// retorna true ou false (boolean)
console.log("\n----> every");

const todosMaioresQue0 = numeros.every(n => n > 0);
console.log(todosMaioresQue0);


// reduce - reduz o Array a um único valor, aplicando uma função a cada elemento -----------------------------------------------
console.log("\n----> reduce");

const soma = numeros.reduce((total, numero)=> {
    return total + numero;
}, 0);
console.log(soma);

// #region for | map e filter

// Quero criar um novo Array contendo apenas os produtos que estão disponíveis 

const produtos = [
    { nome: "Produto 1", disponível: true },
    { nome: "Produto 2", disponível: false },
    { nome: "Produto 3", disponível: true },
    { nome: "Produto 4", disponível: true }
];

// ==> for of 
console.log("\n ----> for of");

const produtosDisponiveis = [];

for (const produto of produtos) {
    if (produto.disponível){
        produtosDisponiveis.push(produto.nome);
    };
};
console.log(produtosDisponiveis);


// // ==> map e filter
console.log("\n ----> map e filter")
const prodDisponiveis = produtos
    .filter((produto) => produto.disponível)
    .map((produto) => produto.nome);

console.log(prodDisponiveis);


// // --> map
console.log("\n ----> map");

const produtoMap = produtosDisponiveis.map((produto) => {
    return produto;
});
console.log(produtoMap);


// // --> filter
console.log("\n ----> filter"); 

const produtoFilter = produtosDisponiveis.filter((produto) => {
    return produto;
});
console.log(produtoFilter); 

// #endregion
