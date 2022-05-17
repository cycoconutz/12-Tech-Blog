const { Post } = require('../models');

const postData = [
  {
    title: 'test1',
    body: 'I really love Quacker!',
    user_id: 1,
  },
  {
    title: 'test2',

    body: 'Quacker is really cool!',
    user_id: 2,
  },
  {
    title: 'test3',

    body:
      "Did you know ackwards is an old English dialect word that describes a creature lying on its back that can't get up.",
    user_id: 2,
  },
  {
    title: 'test4',

    body:
      'I just learned that modern brunch was first proposed in 1895 as a post-hangover meal.',
    user_id: 3,
  },
  {
    title: 'test6',

    body: "Did you know Barbie's full name is Barbara Millicent Roberts?",
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
