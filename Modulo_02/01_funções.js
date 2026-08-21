// #region Declarando Funções
console.log("\n----> Declarando função");

function quando_ClicarNoBotao() {
    console.log("Obrigado por comprar em nossa loja!");
}
// Invocação da Função
quando_ClicarNoBotao();

function exibir_mensagem() {
    console.log("Bebam água!!");
}
exibir_mensagem();
// #endregion

// #region Função com Operadores
console.log("\n----> Função com operadores");

function soma() {
    const resultado = 8 + 3;
    console.log(resultado);
}
soma();
// #endregion

// #region Função em Paremetros
console.log("\n----> Função com parametros");

function soma(numero1, numero2) {
    console.log(numero1 + numero2);
}

soma(8, 3);
soma(10, 20);
soma(128, 256);
// #endregion

// #region Função com "return"
console.log("\n----> Função com return");

function somar(numero1, numero2) {
    return(numero1 + numero2); //------------> return é como entregar o resultado para outra parte para o programa utilizar
}
const resultado = somar(20, 26);
console.log(resultado);    // -----------> console.log() é como mostrar o resultado em uma tela

if (resultado >= 11){
    console.log("O SENAI é massa!");
}
else{
    console.log("Ainda é massa!");
}
// #endregion

console.log("\n----> Exercício de Calculo de Desconto");

const valor = 400;
const desconto = 20;
const valor_final = calcular_desconto(valor, desconto);

// -----------> Chamada das funções

calcular_imposto(valor_final);

calculo_cashBack(valor_final);

calculo_parcela(valor_final);

// -----------> Funções

function calcular_desconto(valor, desconto) {
    return valor - desconto;
}

// Regra Imposto sobre o produto
function calcular_imposto() {
    const valor_imposto = valor_final * 0.04;
    console.log(`Valor tributário: ${valor_imposto.toFixed(2)}`);
}


// Regra CashBack 
function calculo_cashBack() {
    if (valor_final > 50) {
        const cashBack = valor_final * 0.10;
        console.log("Valor de CashBack: " + cashBack);
}            
}
   

/* Regra de Parcelamento
Para parcelar: R$ 100,00 + juros 2%

Para ser sem juros break, valor acima de R$ 399,00

limite 6 parcelas
*/
function calculo_parcela (valor_final) {
    if (valor_final > 399) {
        const valor_parcela = valor_final / 4;
        console.log(`Valor Parcelado sem Juros: ${valor_parcela.toFixed(2)} `);
}
    if (valor_final >= 100) {
        const valor_parcela = (valor_final * 1.02) / 4;
        console.log(`Valor Parcelado com Juros: ${valor_parcela.toFixed(2)}`);
}
    else{
        console.log("O valor não atinge o mínimo de R$ 100,00 para parcelamento")
}
}