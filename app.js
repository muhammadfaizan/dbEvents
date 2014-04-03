var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var mysql = require('./routes/mysql');
var http = require('http');
var path = require('path');
//Custom module for mysql
var db = require('./node_modules/db');
// Custom module for checkAuth
var checkAuth = require('./node_modules/checkAuth');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Login Page handler
app.get('/', routes.index);

// Main app page handler
app.get('/home', checkAuth,routes.app);

// Login data handler
app.post('/login',routes.login);

// signup data handler
app.post('/signup',routes.signup);

//logout button handler
app.get('/logout',routes.logout);





// db query module example
//db.querydb("SELECT userId FROM users WHERE userName='amin'")
//    .then( function(res)   { console.log(res); },
//    function(error) { console.log(error)});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
