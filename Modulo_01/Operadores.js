// #region Operadores Matemáticos Basicos
console.log("--------------Atividade 1--------------");

const a = 5;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // ----> Resto da Divisão
// #endregion

// #region Operadores De Comparação
console.log("--------------Atividade 2--------------");

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); // ----> Comparação de Valor
console.log(a === b);// ----> Comparação de valor e Tipo
console.log(a !== b); //---->  Diferente

console.log("----> Comparação de Valor\n");

const c = 10;
const d = 10;

console.log(c == d); 
console.log(c === d);

console.log("----> Comparação de Valor e Letra\n");

const e = 10;
const f = "10";

console.log(e == f); 
console.log(e === f);
// #endregion

// #region Exercício 1 - Operadores
console.log("--------------Atividade 3--------------");

const idade1 = 20;
const idade2 = 25;

console.log(idade1 > idade2);
console.log(idade1 < idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade1);
console.log(idade1 == idade2); 
console.log(idade1 === idade2);
console.log(idade1 !== idade2); 

// #endregion

// #region Operadores Lógicos
console.log("--------------Atividade 4--------------");

const idade3 = 20;
const idade4 = 16;

console.log("\n----> Operador Lógico AND");
console.log(idade3 > 18 && idade4 > 18) // Todas precisam ser verdade

console.log("\n----> Operador Lógico OR");
console.log(idade3 > 18 || idade4 > 18) // Apenas uma seja verdade

console.log("\n----> Operador Lógico NOT");
console.log(!(idade3 > 18)) // Inverte
// #endregion

// #region Combinação de Operadores
console.log("--------------Atividade 5--------------");

const idade5 = 25;
const matriculaAtiva = true;

const podeComprar = idade5 >= 18 && matriculaAtiva; 

console.log(podeComprar);
// #endregion

// #region Operadores de Incremento e Descremento
console.log("--------------Atividade 6--------------");
let numero = 10;

console.log(numero++); 
console.log(numero); 
console.log(++numero); 

console.log(numero--); 
console.log(numero); 
console.log(--numero); 
// #endregion

// #region Exercício 2 - Comparação
console.log("--------------Atividade 7-------------");

const x = 5;
const y = 10;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y); 
console.log(x === y);
console.log(x !== y); 

// #endregion

// #region Exercício 3 - == vs ===
console.log("--------------Atividade 8-------------");

console.log(10 == "10");
console.log(10 === "10");

console.log(true == 1);
console.log(true === 1);

console.log(null == undefined);
console.log(null === undefined);
// #endregion

// #region Exercício 4 - Sistema de Acesso - Desafio
console.log("--------------Atividade 9-------------");

const dataNascimento = new Date ("2000-10-21");
const ativo = true;

const dezoitoAnosEmMilessegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

const podeAcessar = (new Date() - dataNascimento) >= dezoitoAnosEmMilessegundos && ativo;

console.log(podeAcessar);
// #endregion