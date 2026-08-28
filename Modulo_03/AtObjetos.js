console.log("\n----> Atividade 01"); //--------------------------------------------------------------------------------------------

const filme = {
    titulo: "Pânico 1",
    ano: 1996,
    genero: "Terror",

    apresentar: function() { // -------> Uma função dentro de um objeto
        console.log(`O melhor filme: ${filme.titulo}`);
        console.log(`O melhor filme: ${this.titulo}`); // -----> This: Esse/Este (referenciando o objeto)
    }
};

console.log(filme.titulo);
filme.ano = 1990;
filme.diretor = "Wes Craven";
delete filme.genero;
console.log(filme);
filme.apresentar();

console.log("\n----> Atividade 02"); //-------------------------------------------------------------------------------------------------

const dadosPessoais = {
    nome: "Guilherme",
    matricula: "20260828",
    curso: "Análise de Desenvolvimento de Sistemas"
};

const dadosContato = {
    email: "guilherme@gmail.com",
    telefone: "(11) 99999-9999"
};

// Mesclando objetos em perfil completo
const perfilCompleto = {
    ...dadosPessoais,
    ...dadosContato
};
console.log(perfilCompleto);

// Atualizando propriedades
const perfilAtualizado = {
    ...dadosPessoais,
    status: "Matriculado"
};
perfilAtualizado.curso = "Engenharia de Software";
console.log(perfilAtualizado);