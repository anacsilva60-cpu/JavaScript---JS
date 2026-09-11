// Simulação
const esperar = (ms) => new Promise(
    resolve => setTimeout(
        resolve, ms
    ));


// Função Buscar usuário 
async function buscarUsusario(Id) {

    await esperar(2000);

    return {
        id: Id, // O Id que a gente manda na exeussão
        nome: "Ana",
        cpf: "123.456.789.01"
    }
}


// Função Buscar Pedidos
async function buscarPedido(usuarioId) {

    await esperar(3000);

    const todosPedidos = [
        {id: 1, produto: "X-Burger"},
        {id: 2, produto: "Coca-Cola"},
        {id: 3, produto: "Batata Frita"}
    ];

    return todosPedidos.filter(pedido => pedido.id === usuarioId);
}


// Função Executar
async function executar() {
    
    try {
        console.log("Iniciando Simulação");
        console.log("Buscando Usuário...");
        const usuario = await buscarUsusario(1);
        console.log("Usuário Encontrado: ", usuario); 

        console.log("\nIniciando Busca do Pedido pelo Id: ", usuario.id)
        console.log("Buscando Pedido pelo Id...")
        const pedidos = await buscarPedido(usuario.id);
        console.log("Os pedidos encontrados são: ", pedidos);
    }
    catch(erro) {
        console.log("Deu erro!");
    }
}

executar();