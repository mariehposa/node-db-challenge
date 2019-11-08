exports.seed = function(knex) {
  return knex('project').insert([
    {project_name: 'biology', description: 'read it with diagram', completed: 1},
    {project_name: 'physics', description: '', completed: 0},
    {project_name: 'maths', description: 'its more of calculations', completed: 1}
  ]);
};
