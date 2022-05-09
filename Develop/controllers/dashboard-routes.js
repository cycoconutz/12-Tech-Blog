const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ all: true, nested: true }],
      where: {
        userId: req.session.userId,
      },
    });
    if (postData) {
      const posts = postData.map((post) => post.get({ plain: true }));

      res.render('all-posts-admin', {
        layout: 'dashboard',
        posts,
      });
    }
  } catch (err) {
    res.redirect('login');
  }
});

//New Post
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

//Edit Post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
