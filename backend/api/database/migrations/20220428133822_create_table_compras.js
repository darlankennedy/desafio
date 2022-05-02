/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = knex => knex.schema.createTable('compras', table => {
    table.bigIncrements('id').primary();


    table.double('total');
    table.text('tipo_pagamento');
    table.string('status');


    table.timestamp('data_criacao').defaultTo(knex.fn.now())
    table.timestamp('data_atualizacao').defaultTo(knex.fn.now())

})

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = knex => knex.schema.dropTable('compras')
