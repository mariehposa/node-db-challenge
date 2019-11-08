exports.seed = function(knex) {
  return knex('task').insert([
    {project_id: 2, description: '', notes: 'gguidhsnlkiorsfkz', completed: 1},
    {project_id: 2, description: ' go to encyclopedia.com', notes: '', completed: 1},
    {project_id: 1, description: 'go to google.com', notes: '', completed: 1}
  ]);
};
