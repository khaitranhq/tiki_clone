
exports.up = function(knex) {
  return knex.schema.createTable('Categories', table => {
    table.increments('categoryID').primary();
  })
};

exports.down = function(knex) {
  
};
