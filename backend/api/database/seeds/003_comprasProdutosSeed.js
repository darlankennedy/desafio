/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produto_compras').del()
  await knex('produto_compras').insert([
    {comp_id: 1,prod_id:1},
    {comp_id: 1,prod_id:2},
    {comp_id: 1,prod_id:3},
  ]);
};
