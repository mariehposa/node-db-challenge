exports.seed = function(knex) {
  return knex('resource').insert([
    {project_id: 1, resource_name: 'wiki', description: ''},
    {project_id: 2, resource_name: 'encyclopedia', description: 'visit encyclopedia.com'},
    {project_id: 1, resource_name: 'google', description: 'visit google.com'}
  ]);
};

