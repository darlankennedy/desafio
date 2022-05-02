const { Model } = require('objection');

module.exports = app =>{

    Model.knex(app.db)
    const compras = app.models.Compra

    class Produto extends Model {
        static get tableName() {
          return 'produtos';
        }
        static get relationMappings() {
            const ProdutosCompra   = app.models.ProdutosCompra
            
            return {
            //   compras: {
            //     modelClass: ProdutosCompra,
            //     relation: Model.ManyToManyRelation,
            //     join: {
            //       from: 'produtos.id',
            //       through:{
            //         from:'produto_compras.comp_id',
            //         to:'produto_compras.prod_id'
            //       },
            //       to: 'compras.id',
            //     },
            //   },
              comprasRealizadas: {
                relation: Model.BelongsToOneRelation,
                modelClass: ProdutosCompra,
                join: {
                  from: 'produtos.id',
                  to: 'produto_compras.prod_id'
                }
              }
            }
          }

    }


    return Produto
}
