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
app.get( '/forum_problem', routes.forum_problem );
app.get( '/forum_skill',routes.forum_skill);


app.post('/forum_play', routes.forum_play_createTopic);//Play發表新主題
app.post('/forum_play_reply',routes.play_reply_save);//Play發表新回復
app.post('/forum_problem', routes.forum_problem_createTopic);//Problem發表新主題
app.post('/forum_problem_reply', routes.problem_reply_save);//Problem發表新回復
app.post('/forum_skill', routes.forum_skill_createTopic);//Skill發表新主題
app.post('/forum_skill_reply', routes.skill_reply_save);//Skill發表新回復




http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});
