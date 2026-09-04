/*
    estoque = [
        [1,"Volante",10,"Prateleira 01"],
        [2,"Pedal",5,"Prateleira 02"],
        [3,"Câmbio",50,"Prateleira 03"],
        [4,"Calota",100,"Prateleira 02"],
        [id, nome , qtd, localizacao],
]

*/
// ==========================================
// TRANSFORMANDO EM ARRAY DE OBJETO
// ==========================================
const estoque = [
    {
        id: 1,
        nome: "Volante",
        qtd: 10,
        localizacao: "Prateleira - 01"
    },
    {
        id: 2,
        nome: "Pedal",
        qtd: 5,
        localizacao: "Prateleira - 02"
    },
    {
        id: 3,
        nome: "Câmbio",
        qtd: 50,
        localizacao: "Prateleira - 03"
    },
    {
        id: 4,
        nome: "Calota",
        qtd: 100,
        localizacao: "Prateleira - 02"
    }
];

// ==========================================
// CADASTRAR PRODUTO
// ==========================================
function cadastrarProduto(nome, qtd, localizacao) {

    const novoProduto = {
        id: estoque.length + 1, // ---> Lê o estoque e soma mais um
        nome: nome,
        qtd: qtd,
        localizacao: localizacao
    };

    estoque.push(novoProduto);
    console.log("Cadastro do novo produto realizado com Sucesso!")
}

// ==========================================
// LISTAR ESTOQUE
// ==========================================
function listarEstoque() {    
    for(const produto of estoque) {

        console.log(
            `ID: ${produto.id} | ` +
            `Nome: ${produto.nome} | ` +
            `Quantidade: ${produto.qtd} | ` + 
            `Localização: ${produto.localizacao}`
        );
    }
}

// ==========================================
// BUSCAR PRODUTO
// ==========================================
function buscarProduto(idBuscando) { 
    for(const produto of estoque) {
        if(produto.id === idBuscando) {
            console.log("Produto Encontrado!");

            console.log(
            `ID: ${produto.id} | ` +
            `Nome: ${produto.nome} | ` +
            `Quantidade: ${produto.qtd} | ` + 
            `Localização: ${produto.localizacao}`
            );

            return produto;
        }
    }
    console.log("Não encontramos o Produto!");
}

// ==========================================
// ATUALIZAR QUANTIDADE
// ==========================================
function atualizarQuantidade(idBuscando, novaQtd) {
    for(produto of estoque) {
        if(produto.id === idBuscando) {
            produto.qtd = novaQtd;
            console.log("Quantidade Atualizada!");
            return
        }
    }
    console.log("Não encontramos o Produto!");
}

// ==========================================
// DELETAR PRODUTO
// ==========================================
function deletarProduto(idBuscando, produtoDeletado){
    for(produto of estoque) {
        if(produto.id === idBuscando) {
            produto = produtoDeletado;
            console.log("Produto Deletado!");
            return
        }
    }
    console.log("Não encontramos o Produto!");
}

// ==========================================
// TESTANDO O SISTEMA
// ==========================================

console.log("\n => Cadastrando um Produto ----------------------------------------------------");
cadastrarProduto("Motor", 13, "Prateleira - 02");

console.log("\n => Listando Produtos ---------------------------------------------------------");
listarEstoque();

console.log("\n => Buscando Produtos ----------------------------------------------------------");
buscarProduto(3);

console.log("\n => Atualizando Quantidade do Produtos --------------------------------------------");
atualizarQuantidade(3, 30);
listarEstoque();

console.log("\n => Deletando Produtos --------------------------------------------");
deletarProduto(3);
listarEstoque();