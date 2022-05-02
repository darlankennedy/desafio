/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    {
      nome:'tv plasma',
      descricao:'tv muito grande e bonita',
      preco:10.2
    },
    {
      nome:'tv plasma2',
      descricao:'tv muito grande e bonita',
      preco:10.2
    },
    {
      nome:'tv plasma3',
      descricao:'tv muito grande e bonita',
      preco:10.2
    },
    {
      nome:'tv plasma4',
      descricao:'tv muito grande e bonita',
      preco:10.2
    }
  ]);
};
