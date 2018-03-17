const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8000;
const request = require('request-promise');

function queryFood2Fork(item) {
  return request({
    uri: 'http://food2fork.com/api/search',
    qs: {
      key: '3916d15cff9c3897903bfe5852f1e415',
      q: item
    },
    json: true
  });
}


app.set('view engine', 'ejs');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.static('public'));

const knex = require('./db.js');
var tagline = "Im not sure what this is going to do";


app.get('/',(req, res) =>{
  res.render('index');
})
app.get('/favs', function(req,res) {
  knex('users')
  .select('email')
  .select('favorites')
  .then((result) => {
  res.render('favorites', {
    tagline:tagline,
    result:result
  })
  })
})

app.get('/404',(req,res) => {
  res.send('Hey No Wine Here');
})

/*
  * What is the route and the route param? How would you query for 'honey'
  $ http GET localhost:8000/food2fork/pork
  * How are we making a request for an item?
  we are making the request through query
  * Why do we say res.json?
  * What is the data in .then following the food2fork
*/
app.post('/users', (req,res) => {
  knex('users')
  .returning('*')
  .insert({
    email: req.body.email,
    favorites: req.body.favorites
  })
  .then((result) => {
    res.json(result[0])
  })
  .catch((err) =>{
    res.sendStatus(409)
  })
});
app.get('/users/:id',(req,res) =>{
  knex('users')
  .returning('*')
  .where({id: req.params.id})
  .update({favorites: JSON.stringify(req.body.favorites)})
  .then((result) => {
    res.json(result[0])
  })
})

app.patch('/users/:id',(req, res) => {
  knex('users')
  .returning('*')
  .where({id: req.params.id})
  .update({favorites: JSON.stringify(req.body.favorites)})
  .then((result) => {
    res.json(result[0])
  })
})

app.get('/users',(req,res) =>{
  knex('users')
  .where({email: req.query.email})
  .then((result) => {
    res.json(result)
  })
})
app.get('/food2fork/:item', (req, res) => {
  queryFood2Fork(req.params.item)
    .then((data) => res.json(data));
})

app.listen(PORT,()=>{
  console.log("congrats you have a server");
});
