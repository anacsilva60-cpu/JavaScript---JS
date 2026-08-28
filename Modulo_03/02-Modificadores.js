const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino Médio Integrado",
    rm: 4356,
    cadastro_ativo: true,
    email: null,
    hobbie: ["Ler", "Bola", "Xadrez"],
    enderco: {
        rua: "Rua 35 - 450",
        bairro: "Jardim Itália",
        cidade: "Santa Rita do Passa Quatro",
        estado: "São Paulo",
        pais: "Brasil",
        cep: "13670-000"
    }
};

// #region Destructuring
console.log("\n---> Destructuring"); //-----------------------------------------------------------------------

const { nome, idade, rm } = aluno;
console.log(nome);

console.log("\n---> Renomeando a Propriedade com Destructuring"); //-----------------------------------------------------------------------

const {nome: nomeCompleto} = aluno;
console.log(nomeCompleto);
// #endregion

// #region Spread Operador ... algo como esperar
console.log("\n---> Spread Operador"); //-----------------------------------------------------------------------

const dadosFamilia = {
    nomeMae: "Simone",
    nomePai: "Danilo"
};

const usuarios = { //-------------> mesclando objetos
    ...aluno,
    ...dadosFamilia,
    dataCadastro: "28/08/26" // -----> Adicionar propriedade
};

console.log(usuarios);
// #endregion

// #region Object.keys - Object.values - Object.entries

console.log("\n---> Chave do Objeto"); 
console.log(Object.keys(aluno)); // ----> colunas do objeto (nome, idade, ...)

//-----------------------------------------------------------------------

console.log("\n---> Valores do Objeto"); 
console.log(Object.values(aluno)); // ----> valores do objeto ("Davi", 15, ...)

//-----------------------------------------------------------------------

console.log("\n---> Relação do Objeto"); 
console.log(Object.entries(aluno)); // ----> relação entre Chave <--> Valor (nome: "Davi", idade: 15, ...)

// #endregion