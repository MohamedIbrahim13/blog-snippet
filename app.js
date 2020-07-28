const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://tester:testtest@cluster0.r9me7.mongodb.net/blog-uk?retryWrites=true&w=majority',{useUnifiedTopology:true,useNewUrlParser:true}).then((result)=>{
  app.listen(PORT,()=>{
    console.log('Connection has been made to the port & the database');
  })
}).catch(err=>console.log(err));


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.redirect('/blogs');
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use(blogRoutes);
// app.use('/blogs',blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
