var express = require('express');
var router = express.Router();

var utils    = require( '../utils' );
var mongoose = require( 'mongoose' );
var Member     = mongoose.model( 'Member' );
var app=express();

//首頁
exports.index = function ( req, res, next ){
  var _id = req.cookies ?
    req.cookies._id : undefined;
    //console.log(user_id)
  if(_id==undefined){
    res.render( 'index', {
          title : 'AOFE 討論區',
          //css : 'link rel="stylesheet", href="/stylesheets/index.css"',
          js:'script src="/javascripts/index.js"',
          login :    '登入',
          register:  '註冊',
          con :   0
        
          
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
  var _id;
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
  var _id = req.cookies ?
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
  var _id = req.cookies ?
    req.cookies._id : undefined;
  if(_id==undefined){
    res.render('skill',{
      title:'技術交流區',
      css:'link rel="stylesheet", href="/stylesheets/forum_son.css"',
      js:'script src="/javascripts/forum_son.js"',
      con:0
    });
  }else{
    Member.
    find({ _id : _id }).
    exec( function ( err, member ){
      if( err ) return next( err );
      res.render('skill',{
        title:'技術交流區',
        css:'link rel="stylesheet", href="/stylesheets/forum_son.css"',
        js:'script src="/javascripts/forum_son.js"',
        con:1,
        nickname : member[0].nickname,
      });
    });
  }
}

//討論區-遊戲揪團
exports.forum_play = function ( req, res, next ){
  var _id = req.cookies ?
    req.cookies._id : undefined;
  if(_id==undefined){
    res.render('forum_play',{
      title:'遊戲揪團區',
      css:'link rel="stylesheet", href="/stylesheets/forum_son.css"',
      js:'script src="/javascripts/forum_son.js"',
      con:0
    });
  }else{
    Member.
    find({ _id : _id }).
    exec( function ( err, member ){
      if( err ) return next( err );
      res.render('forum_play',{
        title:'遊戲揪團區',
        css:'link rel="stylesheet", href="/stylesheets/forum_son.css"',
        js:'script src="/javascripts/forum_son.js"',
        con:1,
        nickname : member[0].nickname,
      });
    });
  }
}