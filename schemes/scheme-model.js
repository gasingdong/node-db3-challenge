const db = require('../data/db-config');

const find = () => {
  return db('schemes');
};

module.exports = {
  find,
};
