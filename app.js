/*
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
*/
require( './db' );
var express = require('express');
var http    = require( 'http' );
var path           = require( 'path' );
var cookieParser   = require( 'cookie-parser' );
var bodyParser     = require( 'body-parser' );
var logger         = require( 'morgan' );
var favicon        = require( 'serve-favicon' );//設定LOGO
//var static         = require( 'serve-static' );

var app = express()
var routes = require('./routes/index');



app.set( 'port', process.env.PORT || 3001 );
app.set( 'views', path.join( __dirname, 'views' ));
app.use(express.static(path.join(__dirname, 'public')));
app.set( 'view engine', 'jade' );
app.use( logger( 'dev' ));
app.use( cookieParser());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended : true }));
app.use( favicon( __dirname + '/public/logo.ico' ));//設定LOGO

//app.use( routes.current_user );
app.get('/',  routes.index);//首頁
app.get('/register',  routes.register );//註冊
app.post( '/register_finish', routes.create );
app.get('/login', routes.login);//登入
app.post('/login_finish', routes.login_finish);//登入
app.get( '/logout', routes.logout );
app.get( '/forum', routes.forum );
app.get( '/forum_play', routes.forum_play );
//app.get( '/forum_problem', routes.forum_problem );
app.get( '/skill',routes.forum_skill)
//app.post( '/:id', routes.create );
//app.get('/login',  routes.login );/登入


//routes(app);

http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});
