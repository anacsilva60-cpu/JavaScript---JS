//#region Usando if e else

const idade = 20;

if (idade >= 18){
    console.log("\nMaior de idade");
}
else {
    console.log("\nMenor de idade");
}
console.log("--------------------------------------------")
//#endregion

//#region Usando if e else

const nota = 10;
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
    console.log("Não é possivel adicionar uma nota maior que 10")
}

console.log("--------------------------------------------")

//#endregion

//#region Usando if conjunto

const senha = 20;
const email = "aaaaaaaa@gmail.com"
const ativo = true;

if (senha === 20 && email === "aaaaaaaa@gmail.com") {
    console.log("Usuário Autorizado");
}
else {
    console.log("Acesso Negado!")
}

console.log("--------------------------------------------")

//#endregion

//#region Case

const dia = 9

switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia não encontrado"); // Manter o default sempre no final

    // Quando usamos o switch case?
    //    - Quando temos muitas condições para verificar;
    //    - Quando temos uma variável que pode ter muitos valores diferentes;
    //    - Quando queremos deixar o código mais legível.

    // Quando usamos if/else?
    //    - Quando temos poucas condições para verificar.

}
console.log("--------------------------------------------")
//#endregion

//#region Abstração if/else

const idade2 = 20;
let mensagem;

if (idade2 >= 18){
    mensagem = "Maior"
}
else {
    mensagem = "Menor"
}

// --------------> pode refazer com operador ternario

// const mensagem = idade >= 18 ? "Maior" : "Menor";
// console.log(mensagem)

console.log("--------------------------------------------")
//#endregion