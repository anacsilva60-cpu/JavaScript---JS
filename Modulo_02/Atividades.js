//Atividade 1 — Saudação
//Crie uma função chamada saudacao que receba um nome e retorne uma mensagem.
//Resultado esperado : Olá, Maria!
console.log("\n----> Atividade 1");

function saudacao(nome) {
    return {nome};
}
const nome_saudacao = saudacao("Maria");

console.log(`Olá, ${nome_saudacao.nome}. Prazer em conhece-lá!`);
//----------------------------------------------------------------------

//Atividade 2 — Calculadora
//Crie quatro funções para cada uma das operações +, -, *, /
//Cada função deve receber dois números e retornar o resultado.
console.log("\n----> Atividade 2");

function somar(numero1, numero2) {
    return(numero1 + numero2); 
}
console.log("Soma: ", somar(46, 12));

function sub(numero1, numero2) {
    return(numero1 - numero2); 
}
console.log("Subtração: ", sub(46, 12));

function mult(numero1, numero2) {
    return(numero1 * numero2); 
}
console.log("Multiplicação: ", mult(46, 12));

function div(numero1, numero2) {
    return(numero1 / numero2); 
}
console.log(`Divisão:  ${div(46, 12).toFixed(2)}`);


//----------------------------------------------------------------------

//Atividade 3 — Verificação de idade
//Crie uma função que receba uma idade e retorne: Menor de idade ou Maior de idade
console.log("\n----> Atividade 3");

function validacao_idade(idade) {
    return {idade};
}
const idade = validacao_idade (16);

if (idade >= 18) {
    console.log("Maior Idade");
}
else{
    console.log("Menor Idade");
}

//----------------------------------------------------------------------

//Atividade 4 — Arrow Function

/*

    Transforme:
        function calcularDobro(numero) {
            return numero * 2;
        }

    em uma arrow function.
*/
console.log("\n----> Atividade 4");

const calcularDobro = (numero) => {
    return numero * 2;
}
console.log("Arrow function: ", calcularDobro(26));

//----------------------------------------------------------------------