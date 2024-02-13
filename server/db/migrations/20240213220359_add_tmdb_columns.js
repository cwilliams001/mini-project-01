/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table('movies', function(table) {
    table.text('overview');
    table.string('poster_path');
    table.integer('tmdb_id');
    table.date('release_date');
  });
};/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table('movies', function(table) {
    table.dropColumns('overview', 'poster_path', 'tmdb_id', 'release_date');
  });
};
