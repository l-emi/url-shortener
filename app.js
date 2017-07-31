var express = require('express');
var router = express.Router();
var path = require('path');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res) {
    res.render('index');
});