exports.up = function (knex) {
  return knex.schema
    .createTable('Roles', (table) => {
      table.increments('roleID').primary();
      table.string('roleName').notNullable();
    })
    .createTable('UserAccounts', (table) => {
      table.increments('userID').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.integer('roleID').unsigned().references('Roles.roleID');
    })
    .createTable('Categories', (table) => {
      table.increments('categoryID').primary();
      table.string('categoryName').notNullable();
      table.integer('parentID').references('Categories.categoryID');
      table.string('icon');
    })
    .createTable('Products', (table) => {
      table.increments('productID').primary();
      table.string('productName').notNullable();
      table.integer('cost').notNullable();
      table.integer('discount').notNullable();
      table
        .integer('categoryID')
        .unsigned()
        .references('Categories.categoryID');
      table.integer('creatorID').unsigned().references('UserAccounts.userID');
      table.integer('quatity').notNullable();
      table.text('describe');
    })
    .createTable('AdditionalProductInfomations', (table) => {
      table.increments('productInfoID').primary();
      table.integer('productID').unsigned().references('Products.productID');
      table.string('title').notNullable();
      table.string('content').notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('Roles')
    .dropTable('UserAccounts')
    .dropTable('Categories')
    .dropTable('Products')
    .dropTable('AdditionalProductInfomations');
};
