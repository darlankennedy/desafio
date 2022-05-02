/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('compras').del()
  await knex('compras').insert([
    
    {total: 30.6,tipo_pagamento:'pix',status:'pago'},
    {total: 40.8,tipo_pagamento:'cartão',status:'pago'},

  ]);
};
