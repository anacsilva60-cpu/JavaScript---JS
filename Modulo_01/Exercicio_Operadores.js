console.log("--------------Atividade 1--------------");

const idade1 = 20;
const idade2 = 25;

console.log(idade1 > idade2);
console.log(idade1 < idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade1);
console.log(idade1 == idade2); 
console.log(idade1 === idade2);
console.log(idade1 !== idade2); 

console.log("--------------Atividade 2-------------");

const x = 5;
const y = 10;

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y); 
console.log(x === y);
console.log(x !== y); 

console.log("--------------Atividade 3-------------");

console.log(10 == "10");
console.log(10 === "10");

console.log(true == 1);
console.log(true === 1);

console.log(null == undefined);
console.log(null === undefined);

console.log("--------------Atividade 4-------------");

const dataNascimento = new Date ("2000-10-21");
const ativo = true;

const dezoitoAnosEmMilessegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

const podeAcessar = (new Date() - dataNascimento) >= dezoitoAnosEmMilessegundos && ativo;

console.log(podeAcessar);