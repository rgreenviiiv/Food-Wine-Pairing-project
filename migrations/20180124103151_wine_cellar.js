exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email', 255).unique().notNull();
    table.json('favorites').notNull().defaultTo("[]");
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

//1st
