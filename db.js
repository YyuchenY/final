var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Member = new Schema({
    user_id    : String,
    account    : String,
    password   : String,
    nickname   : String,
    email      : String

});

Member.set('collection', 'members');//建立表

mongoose.model( 'Member', Member);
mongoose.connect("mongodb://zhen:Dearzhen@ds047030.mongolab.com:47030/web", function(e) {
		if (e) console.log(e.message);
		console.log("connect yes!");
	});


