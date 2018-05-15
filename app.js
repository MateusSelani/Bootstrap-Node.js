const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('site/index');
});

app.get('/empresa', function(req, res){
    res.render('site/empresa');
});

app.get('/contato', function(req, res){
    res.render('site/contato');
});

app.listen(8000, function(){
    console.log("localhost: 8000");
});