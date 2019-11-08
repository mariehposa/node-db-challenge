
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
    .createTable('resource', table => {
        table.increments('id')
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
        table.string('resource_name', 128)
            .unique()
        table.string('description')
    })
};

exports.down = function(knex) {
  
};
