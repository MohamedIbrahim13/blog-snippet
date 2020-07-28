const express = require('express');
const router = express.Router();
const blogRouter = require('../controllers/blogControllers');

router.get('/blogs/create',blogRouter.blog_create_view );

router.get('/blogs',blogRouter.blog_all_view);

router.post('/blogs',blogRouter.blog_post_view);

router.get('/blogs/:id',blogRouter.blog_details_view );

router.delete('/blogs/:id', blogRouter.blog_delete_view);

module.exports = router;