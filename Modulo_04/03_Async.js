// Async 

// No Promise temos: 
buscarUsusario().then (usuario => {
    console.log(usuario);
})

/** 
 * Asycn / Await - Essa função vai funcionar de forma ASSINCRONA, e vai ter um pedaço que vamos precisar esperar 
 * 
 */

// No Async / Await temos:
async function buscarUsusarioAsync() {

    try { // o que eu quero que aconteça
        const usuario = await buscarUsusario(); 
        console.log(usuario);
    }
    catch(erro) { // erro que rolou
        console.log(erro);
    }

}