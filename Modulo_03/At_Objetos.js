//Atividade 1 - Sistema de aluno
console.log("\n ----> Atividade 01");

const aluno = {
    nome: "Carlos",
    idade: 22,
    curso: "Análise e Desenvolvimento de Sistemas",

    endereco: {
        cidade: "São José dos Campos",
        estado: "SP"
    },

    ativo: true,

    apresentar() {
        console.log(`Aluno: ${this.nome}`);
    }
};

//1 - Mostrar: Nome, Idade, Curso, Cidade, Estado
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);
console.log(aluno.endereco.cidade);
console.log(aluno.endereco.estado);

//2 - Alterar a cidade
aluno.endereco.cidade = "Ribeirão Preto";

//3 - Adicionar email 
aluno.email = "Carlos@gmail.com";

//4 - Use o destructuring de alguma forma
const { nome, idade, curso } = aluno;
console.log(curso);
console.log(nome);
console.log(idade);

//5 - Criar uma cópia utilizando spread para alunoAtualizado
const alunoAtualizado = {
    ...aluno
};
console.log(alunoAtualizado);

//6 - Transformar o objeto em JSON
const json_aluno = JSON.stringify(aluno);
console.log(json_aluno);

//7 - Voltar de JSON para objeto
const objeto_aluno = JSON.parse(json_aluno); 
console.log(objeto_aluno)

//Atividade 2 -----------------------------------
console.log("\n ----> Atividade 02");

const usuario = {
    id: 1,
    nome: "Claudia Raia",
    email: "claudia@email.com",
    idade: 25,
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        numero: 145
    }
};



   // 1 - Como acessar o nome?
    console.log(usuario.nome);

    // 2 - Como acessar a cidade?
    console.log(usuario.endereco.cidade);

    // 3 - Como alterar a idade?
    usuario.idade = 15;

    // 4 - Como adicionar telefone?
    usuario.telefone = "(19) 12345-6789";

    // 5 - Como remover o email?
    delete usuario.email;

    // 6 - Como criar uma cópia do usuário?
    const copiaUsuario = {
        ...usuario
    };
    console.log(copiaUsuario);

    // 7 - Como extrair somente nome e cidade?
    console.log(usuario.nome);
    console.log(usuario.endereco.cidade);

    // 8 - Como transformar o objeto em JSON?
    const json = JSON.stringify(usuario);
    console.log(json);

    // 9 - Como transformar o JSON novamente em objeto
    const objeto = JSON.parse(json); 
    console.log(objeto)
