// #region Intodução (CallBack)
 
/** 
 * Se você pedir uma operação que demora muito, o node não precisa esperar parado
 * 
 */

// Sincrono 
console.log("1"); 
console.log("2");
console.log("3");

//====> INTRODUÇÃO
console.log("Início");  // Início de algo

setTimeout(() => {
    console.log("Processamento terminou");    // Processsando outra coisa que provavelmente virá depois do fim 
}, 2000);

console.log("Fim")  // Fim de algo

// #endregion

// #region Treinando CallBack - 01
/**
 * CallBack é uma função passada para outra função para ser executada posteriormente 
 *     ├── (n) => {
              console.log(n);
 */

numeros = [1, 2, 3, 4, 6, 7, 90];

numeros.forEach((n) => {
    console.log(n);
});

// #endregion

// #region Treinando CallBack - 02

function processarUsuario(nome, callBack) {
    console.log("Processando " + nome);
    callBack();
}

processarUsuario("Ana", () => {  // O código começa onde a função é chamada
    console.log("Usuário Processado");
});

// #endregion

// #region Treinando CallBack - 03

function buscarUsusario(callBack) { // 3

    //Simulação de tempo
    setTimeout(() => {

        // Construindo um obejto
        const usuario = {
            id: 1,
            nome: "Rhianna"
        };
        callBack(usuario);

    }, 2000);

}

console.log("Início da Chamada"); // 1

buscarUsusario ((usuario) => { // 2
    console.log(usuario);
});

console.log("Fim da Chamada"); // 4

// #endregion