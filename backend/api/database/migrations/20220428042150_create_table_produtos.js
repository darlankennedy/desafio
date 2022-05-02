/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable('produtos', table => {
  table.bigIncrements('id').primary();

      table.string('nome',120)
      table.text('descricao')
      table.double('preco')


      table.timestamp('data_criacao').defaultTo(knex.fn.now())
      table.timestamp('data_atualizacao').defaultTo(knex.fn.now())

  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable('produtos')
