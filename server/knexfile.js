// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
   client: 'pg',
   connection: {
     host: 'db',
     database: 'movie_db',
     user:     'user',
     password: 'password'
   },
   
   migrations: {
     directory: __dirname + '/db/migrations'
 },
 seeds: {
     directory: __dirname + '/db/seeds'
 }
 },

};
