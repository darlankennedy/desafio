require("dotenv").config();
module.exports = {
    development:{
      client: 'mysql',
      connection: {
        database: process.env.DATABASE,
        user:     process.env.USER,
        port:     process.env.PORTA,
        password: process.env.PASSWORD
      },
      useNullAsDefault:true,
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: "./database/migrations"
      },
      seeds: {
        directory: "./database/seeds"
      }
    }
};
