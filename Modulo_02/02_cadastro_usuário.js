// #region Cadastro de Usuário
console.log("\n----> Cadastro de Usuário");

function cadastro_usuario(id, nome, senha, cpf, email) {
    return {
        id,
        nome,
        senha,
        cpf,
        email
    };
}

const usuario = cadastro_usuario(1, "Ana", "AC21", 12345678912, "Ana@gmail.com");

console.log(`Oi ${usuario.nome}, seu cadstro foi realizado com sucesso!`); // ou ----> "oi" + usuario.nome + "seu cadastro..." 

// #endregion

// #region Arrow function

console.log("\n----> Função Tradicional X Função Arrow function");

function somar_tard (numero1, numero2) {
    return numero1 + numero2;
}

const somar = (numero1, numero2) => {
 return numero1 + numero2
}

console.log("Forma Tradicional: ", somar_tard(8, 3));
console.log("Arrow function: ", somar(8, 3));

// #endregion