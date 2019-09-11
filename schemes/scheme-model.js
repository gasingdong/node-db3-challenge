const db = require('../data/db-config');

const find = () => {
  return db('schemes');
};

const findById = id => {
  return db('schemes')
    .where({ id })
    .first();
};

const findSteps = id => {
  return db('steps as s')
    .join('schemes as sc', 's.scheme_id', '=', 'sc.id')
    .where({ scheme_id: id })
    .select('s.id', 'sc.scheme_name', 's.step_number', 's.instructions')
    .orderBy('step_number');
};

module.exports = {
  find,
  findById,
  findSteps,
};
