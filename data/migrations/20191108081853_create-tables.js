
exports.up = function(knex) {
    return knex.schema
    .createTable('project', table => {
        table.increments('id')
        table.string('project_name', 128)
        table.string('description')
        table.boolean('completed')
            .defaultTo(0)
            .notNullable()
    })
};

exports.down = function(knex) {
  
};
