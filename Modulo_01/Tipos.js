const nome1 = "Ana"; // ----> string
const idade1 = 16; // ----> number
const programadora = true // ----> boolean

console.log("\n" + typeof nome1);   
console.log(typeof idade1);
console.log(typeof programadora);

// typeof -------------> Mostra os tipos que podemos ter, sendo: 
// string
// number
// boolean
// underfined
// null

// -------------- String --------------

const nome = "Ana";
const cidade = "São Paulo";
const idade2 = 19;
const altura = 1.60;
const possuiTatuagem = true;

// Foram 01 - Interpolação de string
console.log(`\nMeu nome é ${nome}, tenho ${idade2} anos, ${altura} de altura, moro na cidade de ${cidade}, e ${possuiTatuagem} tatuagem.`);

// Forma 02 - Concatenação de string 
console.log("Meu nome é " + nome + " , tenho " + idade2 + " anos, " + altura + " de altura, moro na cidade de " + cidade + " , e " + possuiTatuagem + " tatuagem \n")

const altura2 = 1.65;
const temperatura = -10;

console.log(typeof altura2);
console.log(typeof temperatura + "\n");

// Boolean 
let maior_de_idade = true;

const idade3 = 16;

if (idade3 >= 18) {
    console.log("Maior de Idade\n");
}
else {
    maior_de_idade = false;
    console.log("Menor de Idade\n");
    console.log(maior_de_idade);
}
    console.log(maior_de_idade + "\n");

// Undefined e Null (Indefinido e Nulo)

let nome2; // -----> Não definido a um valor
console.log(nome2);

let usuario = null; // ------> O valor não existe 
console.log(usuario);