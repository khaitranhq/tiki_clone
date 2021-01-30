exports.up = function (knex) {
  return knex.schema.alterTable('Categories', (table) => {
    table.string('categoryName').nullable().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('Categories', (table) => {
    table.string('categoryName').notNullable().alter();
  });
};
