const { Comment } = require('../models');

const commentData = [
  {
    body: 'I really like Quacker too!',
    post_id: 1,
  },
  {
    body: 'I did not know that!',
    post_id: 3,
    user_id: 1,
  },
  {
    body: "That's neat!",
    post_id: 4,
  },
  {
    body: 'Barbie has a full name?!',
    post_id: 5,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
