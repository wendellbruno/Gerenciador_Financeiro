
exports.up = (knex) => {
  return knex.schema.createTable('users', (t) => {
      t.increments('id').primary();
      t.string('name').notNullable();
      t.string('email').notNullable().unique();
      t.string('password').notNullable();
  });
};


exports.down = (knex)  =>{
  return knex.schema.dropTable('users')
};
