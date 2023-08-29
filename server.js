//Load express
const express = require('express');
const path = require('path'); 

//require to get database
const artistDb = require('./data/artists-db');
const artistsDb = require('./data/artists-db');

//Create our express app
const app = express();

app.use('/css', express.static('css'));
//Configure the app
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

//Mount routes
app.get('/', function(req, res) {
  res.redirect('/artists')
});

app.get('/home', function(req, res) {
  res.render('home')
});

app.get('/artists', function(req, res) {
  const artists = artistsDb.getAll();
  res.render('artists/index', { artists });
});

//Tell the app to listen on port 3000 
app.listen(3000, function() {
});