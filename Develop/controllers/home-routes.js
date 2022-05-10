const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ all: true, nested: true }]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('all-posts', {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

// get single post
router.get('/post/:id', async (req, res) => {
  if (req.params.id) {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ all: true, nested: true }],
      });
      if (postData) {
        const post = postData.get({ plain: true });
        res.render('single-post', {
          ...post,
        })
      } else {
        res.status(404).end();
      }

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;
