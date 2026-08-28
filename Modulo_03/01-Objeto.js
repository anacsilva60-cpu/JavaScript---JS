/* ----> Um obejto representa uma "coisa" do mundo real através de propriedades e comportamentos. 

const nome = [] --> Array 

const nome = {} --> Objeto

const nome = [ {}, {}, {} ] --> Array de Objetos  (Mais comun)

const nome = { {}, {}, {} } --> Obejto de Objeto */

console.log("\n---> Construindo um Objeto") //---------------------------------------------------------------------------------

const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino Médio Integrado",
    rm: 4356,
    cadastro_ativo: true,
    email: null,
    hobbie: ["Ler", "Bola", "Xadrez"],
    endereco: {
        rua: "Rua 35 - 450",
        bairro: "Jardim Itália",
        cidade: "Santa Rita do Passa Quatro",
        estado: "São Paulo",
        pais: "Brasil",
        cep: "13670-000"
    }
};
console.log(aluno);


// #region Acessando propriedades do Objeto
console.log("\n---> Acessando Propriedades do Objeto"); //---------------------------------------------------------------------

console.log(aluno.nome);
console.log(aluno.endereco.rua);

if (aluno.cadastro_ativo === true) {
    console.log(aluno.nome + ", seja bem-vindo ao nosso sistema!");
    // console.log(`${aluno.nome}, seja bem-vindo ao nosso sistem!`);
}
else {
    console.log("O seu cadastro não esta ativo, procure o RH");
}
// #endregion

// #region Alterar Propriedades do Obejto
console.log("\n---> Alterar Propriedades do Objeto"); //-----------------------------------------------------------------------

aluno.idade = 18;
console.log(`Idade alterada para: ${aluno.idade}`);

aluno.cadastro_ativo = false;
console.log(`Cadastro ativo alterado para: ${aluno.cadastro_ativo}`);

aluno.endereco.bairro = "Jardim Nova Santa Rita";
console.log(`Bairro alterado para: ${aluno.endereco.bairro}`);

// #endregion

// #region Adicionar Propriedades no Objeto
console.log("\n---> Adicionar Propriedades no Objeto"); //-----------------------------------------------------------------------

aluno.cpf = "123.456.789.01"
aluno.telefone = "(19) 12345-6789"

console.log(aluno);
// #endregion

// #region Deletar Propriedades no Objeto
console.log("\n---> Deletar Propriedades no Objeto"); //-----------------------------------------------------------------------

delete aluno.curso;
console.log(aluno);
// #endregion
