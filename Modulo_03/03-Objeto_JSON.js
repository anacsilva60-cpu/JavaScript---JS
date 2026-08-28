// -----------------> Objeto X JSON

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

console.log("\n---> Obejto passando para JSON"); 

const json = JSON.stringify(aluno); // ---> Pegar o objeto JS Transformando em JSON
console.log(json);


console.log("\n---> JSON passando para Objeto"); 

const objeto = JSON.parse(json); // ----> Coverte o JSON para Objeto
console.log(objeto);