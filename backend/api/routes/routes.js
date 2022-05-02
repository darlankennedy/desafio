
    
module.exports = app => {

    const produtos = app.controllers.ProdutoController
    const compras  = app.controllers.ComprasController

    app.route('/')
    .get((req,res)=>{
        res.end("Your IP Addresss is: " + req.socket.remoteAddress);
    })


    app.route('/produtos')
        .get(produtos.index)
        .post(produtos.create);


    app.route('/produtos/:id')
        .get(produtos.getById)
        .put(produtos.edit)
        .delete(produtos.delet)


    app.route('/compras')
        .get(compras.index)
        .post(compras.create)


    app.route('/compras/:id')
        .get(compras.getById)
        .put(compras.edit)
        .delete(compras.delet)

    app.route('/comprasItems')
       .get(compras.getAllCompraProdutos)    

    app.route('/fecharCompra')
        .post(compras.fecharCompra)  
    

}

