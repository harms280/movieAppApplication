var express = require('express'), app = express();

// var db = require('./models');
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.use('/css', express.static(path.join(__dirname, '../client/css')));
app.use('/js', express.static(path.join(__dirname, '../client/js')));
app.use('/templates', express.static(path.join(__dirname, '../client/js/templates')));

// app.get('/', function(req,res){
//   res.status(200).send('/client/index.html');
// });


app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.listen(3000,function(){
  console.log('Listening on port 3000');
});