// #region Promises - É uma promessa de que teremos um resultado no futuro

// --> Criando uma Promessa

const promessa = new Promise((resolve, reject) => {
    const sucesso = false;

    if (sucesso === true) {
        resolve ("Tudo Certo!!");
    }
    else {
        reject ("Deu Errado");
    }

});

// --> Consumir a promises

promessa
    .then((resultado) => {
        console.log(resultado)
    })
    .catch ((erro) => {
        console.log(erro)
    })