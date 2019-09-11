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

const add = scheme => {
  return db('schemes')
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
};

const update = (changes, id) => {
  return db('schemes')
    .update(changes)
    .where({ id })
    .then(() => {
      return findById(id);
    });
};

const remove = id => {
  return findById(id)
    .then(res =>
      db('schemes')
        .where({ id })
        .del()
        .then(() => res)
    )
    .catch(() => null);
};

// eslint-disable-next-line camelcase
const addStep = (step, scheme_id) => {
  return db('steps')
    .insert({
      ...step,
      scheme_id,
    })
    .then(ids => {
      return db('steps')
        .where({ id: ids[0] })
        .first();
    });
};

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep,
};
