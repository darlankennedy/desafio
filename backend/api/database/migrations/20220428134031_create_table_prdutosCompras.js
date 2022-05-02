/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = knex => knex.schema.createTable('produto_compras', table => {
    table.bigIncrements('id').primary();

    table.bigInteger('comp_id').nullable().unsigned();
    table.bigInteger('prod_id').nullable().unsigned();

    table.foreign('comp_id').references('id').inTable('compras');
    table.foreign('prod_id').references('id').inTable('produtos');

    table.timestamp('data_criacao').defaultTo(knex.fn.now())
    table.timestamp('data_atualizacao').defaultTo(knex.fn.now())

})

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = knex => knex.schema.dropTable('produto_compras')
