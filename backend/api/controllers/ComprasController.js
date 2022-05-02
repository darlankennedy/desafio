module.exports = app => {
  
     const compra = app.models.Compra
     const item   = app.models.ProdutosCompra
  

    const {iqualOrError,existeOrError,notExisteOrError}  = app.validations.validations;
    /// index retorna todos os produtos
    const index = async (req,res)=>{
       const result = await compra.query().withGraphFetched('vendas');
        
        return res.send({
            "status":200,
            "compras":result
        });
    }

    ///cria um novo comrpa 
    const create = async (req,res)=>{
        const compraBody  = {...req.body}
    
        try {

            existeOrError(compraBody.tipoPagamento,"Tipo de Pagamento Vazio!")

            const compraForm = await compra.query().insert({
                total: compraBody.total,
                tipo_pagamento: compraBody.tipoPagamento,
                status: compraBody.status
              });
              
             return res.send({
                 "status":200,
                 "msg":"Cadastrada Com Sucesso!",
                 "compra":compraForm
             }) 

        } catch (msg) {
           
            return res.status(400).json({
                "status":400,
                "msg":msg
            })
        }
        
    }
    

    ///pesquisa por id 
    const getById = async (req,res)=>{

        const compra_id  = req.params.id

        try{
            const result = await compra.query().findById(compra_id);

            existeOrError(result,"Compra não existe!")
            

            return res.send({
                "status":200,
                "Compra":result
            });

        } catch (msg){
            
            return res.status(400).json({
                "status":400,
                "msg":msg
            })
        }
    }


    const edit = async (req,res) =>{

        const compra_id  = req.params.id
        const compraBody = {...req.body}
       

        try {
            const resultConsulta = await compra.query()
            .findById(compra_id);

            existeOrError(resultConsulta,"Compra não existe!")

            existeOrError(compraBody.tipoPagamento,"Tipo de Pagamento Vazio!")


            const result = await compra.query()
            .patchAndFetchById(compra_id,{
                total: compraBody.total,
                tipo_pagamento: compraBody.tipoPagamento,
                status: compraBody.status
            });

            return res.send({
                "status":200,
                "msg":"Alterado Com Sucesso!",
                "compra":result
            });


        } catch (msg) {

            return res.status(400).json({
                "status":400,
                "msg":msg
            })

        }

    }

    //delete
    const delet = async (req,res) =>{
        const compra_id  = req.params.id

        try {

            const result = await compra.query().deleteById(compra_id).withGraphFetched('vendas');

            existeOrError(!result.comprasRealizadas,"Compra não pode ser deletado!")

            await compra.query().deleteById(result.id)
            existeOrError(result,"Erro ao Deletar!")

             return res.send({
                "status":200,
                "msg":"Deletado Com Sucesso!",
                "Compras":result
            });

        } catch (msg) {

              return res.status(400).json({
                "status":400,
                "msg":msg
            });

        }

    }


     ///cria um novo comrpa 
     const fecharCompra = async (req,res)=>{
        const compraBody  = {...req.body}
    
        try {

            console.log(compraBody)

            const objtoCompra = {
                total:compraBody.total,
                tipo_pagamento:compraBody.tipo_pagemnto,
                status:'pago'
            }

            existeOrError(compraBody.tipo_pagemnto,"Tipo de Pagamento Vazio!")

             const compraForm = await compra.query().insert({
                total: compraBody.total,
                tipo_pagamento: compraBody.tipo_pagemnto,
                status: 'pago'
              });
              compraBody.produtos.forEach(element => {
                app.db('produto_compras').insert({
                    comp_id: compraForm.id,
                    prod_id:element.id
                    })
                    .then( function (result) {
                       console.log({ success: true, message: 'ok' });     // respond back to request
                    })
              });
              
             return res.send({
                 "status":200,
                 "msg":"Cadastrada Com Sucesso!",
                 "compra":compraBody
             }) 

        } catch (msg) {
           
            return res.status(400).json({
                "status":400,
                "msg":msg
            })
        }
        
    }

    const getAllCompraProdutos = async (req,res) => {
        
        
        const result = await compra.query().withGraphFetched('pivotProdutosCompras');
        
        return res.send({
            "status":200,
            "compras":result
        });


    }

    return {index,create,getById,edit,delet,getAllCompraProdutos,fecharCompra}
}