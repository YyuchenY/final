var express = require('express');
var router = express.Router();
var utils    = require( '../utils' );
var mongoose = require( 'mongoose' );
var ObjectID = require('mongodb').ObjectID;
var Member     = mongoose.model( 'Member' );
var Topic_Play = mongoose.model( 'Topic_Play' );
var Topic_Skill = mongoose.model( 'Topic_Skill' );
var Topic_Problem = mongoose.model( 'Topic_Problem' );
var Reply_Play = mongoose.model( 'Reply_Play' );
var Reply_Skill = mongoose.model( 'Reply_Skill' );
var Reply_Problem = mongoose.model( 'Reply_Problem' );
var app=express();
var dt= new Date();
var m= dt.getMonth()+1;
var y= dt.getFullYear();
var d= dt.getDate();
var h= dt.getHours();
var mi= dt.getMinutes();
var s= dt.getSeconds();
var ms = dt.getMilliseconds();

//var now_time = String(y)+"/"+String(m)+"/"+String(d)+"/ "+String(h)+":"+String(mi)+":"+String(s);
//var now_time=
var _id;
var _nic;
//首頁
exports.index = function ( req, res, next ){
	var gip = req.connection.remoteAddress;
  _id = req.cookies ?
    req.cookies._id : undefined;
    //console.log(user_id)
  if(_id==undefined){
    res.render( 'index', {
          title : 'AOFE 討論區',
          //css : 'link rel="stylesheet", href="/stylesheets/index.css"',
          js:'script src="/javascripts/index.js"',
          login :    '登入',
          register:  '註冊',
          con :   0,
		  okok:gip
          
      });

      console.log('undefined');
  }else{
    Member.
    find({ _id : _id }).
    exec( function ( err, member ){
      if( err ) return next( err );
      console.log(_id);
      res.render( 'index', {
          title : 'AOFE 討論區',
          //css : 'link rel="stylesheet", href="/stylesheets/index.css"',
          js:'script src="/javascripts/index.js"',
         // member:member[0],
          con : 1,
          nickname : member[0].nickname,
          //user_id: member[0].user_id
          okok:gip
		
          

      });
      console.log('nonono');

    });
    //console.log('dsadwqq');
  }
  
    
}

//註冊頁面
exports.register = function ( req, res, next ){
  res.render('register', { 
     title: '註冊',
     nickname:'暱稱：',
     account:'帳號：',
     password:'密碼：',
     password2:'再輸入一次密碼：',
     email:'信箱：',
  });
};

//新增會員資料
exports.create = function ( req, res, next ){
  
  Member.find({ account: req.body.account }, function (err, docs) {
      if( err ) return next( err );
      if(docs!=''){ //帳號重複
        res.send("fail");
      }else{
        var member=new Member({
          //user_id    : req.cookies.user_id,
          account    : req.body.account,
          password   : req.body.password,
          nickname   : req.body.nickname,
          email      : req.body.email
        });
        member.save( function ( err, product, count ){
          if( err ) return next( err );
          
          //res.redirect( '/' );
        });
        //res.cookie( '_id',_id);
        res.send("success");
     }
  });
  
  
};

//登入頁面
exports.login = function ( req, res, next ){
  res.render('login', { 
     title: '登入',
     css:'link rel="stylesheet", href="/stylesheets/login.css"',
     //js:'script src="/javascripts/login.js"',
     account:'帳號：',
     password:'密碼：',

  });
}

//登入驗證
exports.login_finish = function ( req, res, next ){
      Member.find({ account: req.body.account, password:req.body.password}, function (err, docs) {
      if( err ) return next( err );
      //console.log(docs);
      //console.log(req.body.password)

      if(docs!=''){
        res.cookie( '_id', docs[0]._id);
		res.cookie( '_nic', docs[0].nickname);
        console.log(docs[0]._id);
        res.send("success");
        //console.log("success");
        
      }else{
        res.send("fail");

      }
    });
}

//登出
exports.logout = function ( req, res, next ){
      res.clearCookie('_id');
      res.redirect('/');
      //req.session.destroy(function(e){ res.send('ok', 200); }); 
}

//討論區首頁
exports.forum = function ( req, res, next ){
  _id = req.cookies ?
    req.cookies._id : undefined;
  if(_id==undefined){
    res.render('forum',{
      title:'討論區',
      css:'link rel="stylesheet", href="/stylesheets/forum.css"',
      js:'script src="/javascripts/forum.js"',
      con:0
    });
  }else{
    Member.
    find({ _id : _id }).
    exec( function ( err, member ){
      if( err ) return next( err );
      res.render('forum',{
        title:'討論區',
        css:'link rel="stylesheet", href="/stylesheets/forum.css"',
        js:'script src="/javascripts/forum.js"',
        con:1,
        nickname : member[0].nickname,
      });
    });
  }
}

//討論區-技術交流
exports.forum_skill = function ( req, res, next ){
  _id = req.cookies ?
    req.cookies._id : undefined;
	  if(_id==undefined){
      Topic_Skill.find({}).sort('-TIME').
      exec( function ( err, docs ){
        //var topic=docs;
        console.log(docs);
        Reply_Play.find({}).
        sort('-Time').
        exec( function ( err, reply ){
        console.log(docs);
        res.render('forum_skill',{
          title:'技術交流區',
          css:'link rel="stylesheet", href="/stylesheets/forum_son.css"',
          js:'script src="/javascripts/forum_son.js"',
          con:0,
          docs:docs,
          reply:reply,
        });
        console.dir(docs);
      });
	//console.dir(docs);
    });
  }else{
    Member.
    find({ _id : _id }).
    exec( function ( err, member ){
		  if( err ) return next( err );
  		Topic_Skill.find({}).sort('-TIME').
  		exec( function ( err, docs ){
        //var topic=docs;
        console.log(docs);
        Reply_Play.find({}).
        sort('-Time').
        exec( function ( err, reply ){
          //console.dir(docs);
          //console.dir(docs[0].TIME);
          res.render('forum_skill',{
            title:'技術交流區',
            css:'link rel="stylesheet", href="/stylesheets/forum_son.css"',
            js:'script src="/javascripts/forum_son.js"',
            con:1,
            docs:docs,
            nickname : member[0].nickname,
            reply:reply,
          });
          console.dir(reply);
        });	
		  });
    });
  }
}

//討論區-遊戲揪團
exports.forum_play = function ( req, res, next ){
  _id = req.cookies ?
    req.cookies._id : undefined;
  if(_id==undefined){
    Topic_Play.find({}).sort('-TIME').
      exec( function ( err, docs ){
        //var topic=docs;
        console.log(docs);
        Reply_Play.find({}).
        sort('-Time').
        exec( function ( err, reply ){
	//console.dir(docs);
      res.render('forum_play',{
        title:'遊戲揪團區',
        css:'link rel="stylesheet", href="/stylesheets/forum_son.css"',
        js:'script src="/javascripts/forum_son.js"',
        con:0,
        docs:docs,
        reply:reply,
      });
    });
   });     
  }else{
    Member.
    find({ _id : _id }).
    exec( function ( err, member ){
		if( err ) return next( err );
		  Topic_Play.find({}).sort('-TIME').
      exec( function ( err, docs ){
        //var topic=docs;
        //console.log(docs);
        Reply_Play.find({}).
        sort('-Time').
        exec( function ( err, reply ){
			//console.dir(docs);
  			  res.render('forum_play',{
    				title:'遊戲揪團區',
    				css:'link rel="stylesheet", href="/stylesheets/forum_son.css"',
    				js:'script src="/javascripts/forum_son.js"',
    				con:1,
    				docs:docs,
    				nickname : member[0].nickname,
            reply:reply,
  			 });
		    });
      });
    });
  } 
}

//討論區-疑難雜症區
exports.forum_problem = function ( req, res, next ){
  _id = req.cookies ?
    req.cookies._id : undefined;
  if(_id==undefined){
    Topic_Problem.find({}).sort({TopicID:-1}).
    exec( function ( err, docs ){
      Reply_Play.find({}).
      sort('-Time').
      exec( function ( err, reply ){
         res.render('forum_problem',{
            title:'疑難雜症區',
            css:'link rel="stylesheet", href="/stylesheets/forum_son.css"',
            js:'script src="/javascripts/forum_son.js"',
            con:0,
            docs:docs,
            reply:reply,
        });
      });
    });
  }else{
    Member.
    find({ _id : _id }).
    exec( function ( err, member ){
		if( err ) return next( err );
		Topic_Problem.find({}).sort({TopicID:-1}).
		exec( function ( err, docs ){
        Reply_Play.find({}).
        sort('-Time').
        exec( function ( err, reply ){
          res.render('forum_problem',{
            title:'疑難雜症區',
            css:'link rel="stylesheet", href="/stylesheets/forum_son.css"',
            js:'script src="/javascripts/forum_son.js"',
            con:1,
            docs:docs,
            nickname : member[0].nickname,
            reply:reply
          });  
        });
		  });
    });
  }
}
//Skill 發表新主題
exports.forum_skill_createTopic = function ( req, res, next )
{
	_nic = req.cookies ?
    req.cookies._nic : undefined;
	console.log(req.body.Skill_Title);
	console.log(req.body.Skill_Topic_Content);
	var topic_skill = new Topic_Skill
	({
		"TopicID":nu,
		"TopicName":req.body.Skill_Title,
		"TopicAuthor":_nic,
		"Content":req.body.Skill_Topic_Content,
		"TIME":Date.now(),
		"Click":"1",
		"LastReply":"HIHI"
		
	});
	topic_skill.save(function ( err, product, count ){if( err ) return next( err );});
	res.redirect( '/forum_skill' );
};
var nu=0;
//Play 發表新主題
var layout_id="a1";
exports.forum_play_createTopic = function ( req, res, next )
{
	_nic = req.cookies ?
    req.cookies._nic : undefined;
	var topic_play = new Topic_Play
	({
		"TopicID":nu,
		"TopicName":req.body.Play_Title,
		"TopicAuthor":_nic,
		"Content":req.body.Play_Topic_Content,
		"TIME":Date.now(),
		"Click":"1",
		"LastReply":"HIHI"
		
	});
	topic_play.save(function ( err, product, count ){if( err ) return next( err );});
	res.redirect( '/forum_play' );
 }
 //problem 建立主題
 exports.forum_problem_createTopic = function ( req, res, next )
{
	_nic = req.cookies ?
    req.cookies._nic : undefined;
	var Topic_problem = new Topic_Problem
	({
		"TopicID":nu,
		"TopicName":req.body.Problem_Title,
		"TopicAuthor":_nic,
		"Content":req.body.Problem_Topic_Content,
		"TIME":Date.now(),
		"Click":"1",
		"LastReply":"HIHI"
		
	});
	Topic_problem.save(function ( err, product, count ){if( err ) return next( err );});
	res.redirect( '/forum_problem' );
 }
//play 發表新回復
exports.play_reply_save = function ( req, res, next )
{
	_nic = req.cookies ?
    req.cookies._nic : undefined;
	var reply_play = new Reply_Play
	({
		TopicID:req.body.TopicID,
    Content:req.body.Play_Reply_Content,
    ReplyAuthor:_nic,
    Click:"2",
    Time:Date.now(),
		
	});
	reply_play.save(function ( err, product, count ){if( err ) return next( err );});
	res.redirect( '/forum_play' );
}
//技術討論區發表新回復
exports.skill_reply_save = function ( req, res, next ){
  _nic = req.cookies ?
    req.cookies._nic : undefined;
  var reply_skill = new Reply_Play
  ({
    TopicID:req.body.TopicID,
    Content:req.body.Play_Reply_Content,
    ReplyAuthor:_nic,
    Click:"2",
    Time:Date.now(),
    
  });
  reply_skill.save(function ( err, product, count ){if( err ) return next( err );});
  res.redirect( '/forum_skill' );
}

//problem發表新回復
exports.problem_reply_save = function ( req, res, next ){
  _nic = req.cookies ?
    req.cookies._nic : undefined;
  var reply_problem = new Reply_Play
  ({
    TopicID:req.body.TopicID,
    Content:req.body.Problem_Reply_Content,
    ReplyAuthor:_nic,
    Click:"2",
    Time:Date.now(),
    
  });
  reply_problem.save(function ( err, product, count ){if( err ) return next( err );});
  res.redirect( '/forum_problem' );
}
