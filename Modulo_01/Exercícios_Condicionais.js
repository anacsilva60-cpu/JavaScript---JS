//#region atividades 

// Atividade 1 — Maioridade - Crei uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".]
console.log("---> Atividade 1");
const idade = 20;

if (idade >= 18){
    console.log("Maior de idade");
}
else {
    console.log("Menor de idade");
}

//Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.
console.log("\n---> Atividade 2");

const nota = 6.9;
const nota_aredondada = Number(nota.toFixed(2));

if (nota_aredondada < 5) {
    console.log("Reprovado");
}
if (nota_aredondada >= 5 && nota_aredondada < 7){
    console.log("Recuperação");
}

if (nota_aredondada >= 7 && nota_aredondada <= 10){
     console.log("Aprovado");
}
else if (nota_aredondada > 10){
    console.log("Não é possivel adicionar uma nota maior que 10");
}

console.log("\n--> Atividade 2.1");

switch(true){
    case (nota_aredondada < 5):
        console.log("Reprovado");
        break;
    case (nota_aredondada >= 5 && nota_aredondada < 7):
        console.log("Recuperação");
        break;
    case (nota_aredondada >= 7 && nota_aredondada <= 10):
        console.log("Aprovado");
        break;
    case (nota_aredondada > 10):
        console.log("Não é possivel adicionar uma nota maior que 10");
        break;
    default:
        console.log("Nota não Encontrada")
    
        
}

//Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.
console.log("\n--> Atividade 3");

const senha = "AC21";
const usuario = "AnaCarol";

if (senha === "AC21" && usuario === "AnaCarol"){
    console.log("Usuário Autorizado");
}
else {
    console.log("Acesso Negado");
}

//Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído).
console.log("\n--> Atividade 4");

const statusPedido = 1;

switch(statusPedido){
    case 1:
        console.log("Pendente");
        break;
     case 2:
        console.log("Pago");
        break;
    case 3:
        console.log("Enviado");
        break;
    case 4:
        console.log("Processando");
        break;
    case 5:
        console.log("Entregue");
        break;
    case 6:
        console.log("Concluído");
        break;
    default:
        console.log("Não há Pedido");
}

//Atividade 5 — Contador - Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.
console.log("\n--> Atividade 5");

let contador = 1;

for (let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

//atividade 6 - Refaça o exercicio 5 agora usando for...of e while.
console.log("\n--> Atividade 6");

while(contador <= 100){
    if (contador % 2 === 0){
        console.log(contador);
    }

    contador++;
}

console.log("\n--> Atividade 6.1");

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const pares of numeros){
    if (pares % 2 === 0){
         console.log(pares);
    }
}

//Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.
console.log("\n--> Atividade 7");

const nomes = ["Ana", "Bianca", "Beatriz", "Yasmim", "Duda", "Larissa", "Gustavo", "Vinícius", "Kauan", "João"];
for (const nome of nomes){
    console.log(nome);
}

//Atividade 8 - Crie um array com 10 números e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. ]
console.log("\n--> Atividade 8");

for (const nome of nomes) {
    if (nome.length > 5){
        console.log(nome);
    }
}

//Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];

*/
console.log("\n--> Atividade 9");
const numeros_9 = [10, 20, 30, 40, 50];
soma = 0;

for (const numero_9 of numeros_9){
    soma += numero_9
    console.log(soma)
}

//Atividade 10 — Desafio do backend 
/* 
    Dado o array abaixo, mostre somente o pedidos pagos 

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];
*/
console.log("\n--> Atividade 10");

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];

for (let i = 0; i < pedidos.length; i++){
    if (pedidos[i].pago === true){
        console.log(pedidos[i]);
    }
}
//#endregion