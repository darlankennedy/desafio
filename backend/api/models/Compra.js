const { Model } = require('objection');

module.exports = app =>{
    class Compra extends Model {
        static get tableName() {
          return 'compras';
        }
        static get jsonSchema() {
            return {
                type: 'object',
                properties:{
                    total: { type: 'number'},
                    tipo_pagamento: { type: 'string', minLength: 1, maxLength: 60 },
                    status: { type: 'string' },
                }
            }
        }
        static get relationMappings() {
            var ProdutosCompra   = app.models.ProdutosCompra
            var Produdto         = app.models.Produto
           
            return {
            vendas: {
                relation: Model.BelongsToOneRelation,
                modelClass: ProdutosCompra,
                join: {
                  from: 'compras.id',
                  to: 'produto_compras.comp_id'
                }
              },
              pivotProdutosCompras: {
                relation: Model.ManyToManyRelation,
                modelClass: Produdto,
                join: {
                  from: 'compras.id',
                  through:{
                    from:'produto_compras.comp_id',
                    to:'produto_compras.prod_id' 
                  },
                  to: 'produtos.id'
                }
              },

            }
          }

    }

    return Compra 
}
