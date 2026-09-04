//#region -  Manipulação básica
console.log("\n ----> Atividade 01");

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexirica"];

//     Adicione "Morango" no final.
    frutas.push("Morango");

//     Adicione "Abacaxi" no início.
    frutas.unshift("Abacaxi");

//     Remova o último elemento.
    frutas.pop();

//     Remova o primeiro elemento.
    frutas.shift();

//     Mostre a quantidade de frutas.
    console.log(frutas.length);
    
//#endregion

//#region - forEach
console.log("\n ----> Atividade 02");

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];

//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 
nomes.forEach(nome => {
    console.log(`Olá, ${nome}!`);
});
//#endregion

//#region map
console.log("\n ----> Atividade 03");
const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.
const precosComAcrescimo = precos.map(preco => (preco * 0.10) + preco);
console.log(precosComAcrescimo);

//#endregion

//#region filter
console.log("\n ----> Atividade 04");

const numeros = [5, 12, 18, 25, 30, 7, 40];

//Crie um novo array somente com números maiores que 20.
const numeroMaior = numeros.filter((numero) => {
    return numero > 20;
})
console.log(numeroMaior); 

//#endregion

//#region find
console.log("\n ----> Atividade 05");

const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.
const numero = numeros.find((n) => n > 20);
console.log(numero);

//#endregion

//#region some
console.log("\n ----> Atividade 06");

const idades = [12, 15, 17, 20, 14];

//Existe alguém maior de idade? Utilize o some para encontrar! 
const maiorIdade = numeros.some(n => n >= 18);
console.log(maiorIdade);

//every
//Usando o array acimima codifique respondendo: Todos são maiores de idade?
const todosMaiorIdade = numeros.every(n => n >= 18);
console.log(todosMaiorIdade);
console.log("Não, nem todos tem maior idade.");

//#endregion

//#region reduce
console.log("\n ----> Atividade 07");

const valores = [100, 200, 50, 150];

//Calcule o valor total.
const somaValor = valores.reduce((total, valor)=> {
    return total + valor;
}, 0);
console.log(somaValor);

//#endregion