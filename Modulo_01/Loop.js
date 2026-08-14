//while

let contador = 1;

while(contador <= 6){
    console.log(contador);

    contador++;
}

console.log("------------------------------------");

//for
// ----> for(iniciação; condição; incremento);

for (let i = 1; i <= 5; i++){
    console.log(i);
}

console.log("------------------------------------");

// ----> for... of
const frutas = ["Morango", "Banana", "Maça", "Ameixa", "Uva"];

console.log("--> Otimizado para Arry"); // --> Otimizado para Array
for (const fruta of frutas){
    console.log(fruta);
}

console.log("--> Tradicional"); // --> Tradicional
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}