const { Model } = require('objection');
module.exports = app =>{
    Model.knex(app.db)
    
    class ProdutosCompra extends Model {
        static get tableName() {
          return 'produto_compras';
        }
        

        static get jsonSchema() {
            return {
                type: 'object',

            }
        }

        static get relationMappings() {
            return {
            }
        }
    }
    return ProdutosCompra 
}
