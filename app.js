/* 
Le app.js reste le plus simple possible.
On initialise ici la connection MongoDB.
On  utilise le package CORS installé précédemment en acceptant toutes les origines et en exposant le header "Autorization"
(pour récupérer le token d'authentification côté client)
On déclare notre route de principale  avec pour url de base "/"
On ajoute un retour en cas de requête sur une route inexistante (404).
 */

var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
const mongodb = require('./db/mongo.js'); 

mongodb.initClientDbConnection();

var app = express();

app.use(cors({
    exposedHeaders:['Authorization'],
    origin: '*'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

app.use(function(req, res, next) {
    res.status(404).json({name:'API', version:"1.0", status: 404, message: 'not_found'})
});

module.exports = app;
