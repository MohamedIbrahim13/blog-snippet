const Blog = require('../models/blog');


const blog_all_view = (req,res)=>{
  Blog.find().sort({createdAt: -1}).then(result=>res.render('index',{title: 'All Posts',blogs:result})).catch(err=>console.log(err));
}


const blog_details_view =(req, res) => {
    const id = req.params.id;
    Blog.findById(id).then(result => res.render('details', { blog: result, title: 'Blog Details' })).catch(err =>console.log(err));
}


const blog_create_view =(req, res) => {
  res.render('create', { title: 'Create a new blog' });
}


const blog_post_view =(req,res)=>{
  const blog = new Blog(req.body);
  blog.save().then(result=>res.redirect('/blogs')).catch(err=>console.log(err));
}



const blog_delete_view = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id).then(result=>res.json({ redirect: '/blogs' })).catch(err =>console.log(err));
}

module.exports = {
    blog_all_view,
    blog_details_view,
    blog_create_view,
    blog_post_view,
    blog_delete_view
}