const { User } = require('../models');

const userData = [
  {
    username: 'JSmith',
    password: 'password123',
  },
  {
    username: 'Wyattford',
    password: 'password123',
  },
  {
    username: 'MJarvis',
    password: 'password123',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
