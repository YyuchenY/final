var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
//-----------------------------
var Member = new Schema({
    user_id    : String,
    account    : String,
    password   : String,
    nickname   : String,
    email      : String
});
Member.set('collection', 'members');//建立表
mongoose.model( 'Member', Member);
//-----------------------------  Member ↑

var Topic_Play = new Schema({
    TopicID:Number,
    TopicName:String,
	TopicAuthor:String,
    Content:String,
    TIME:Date,
	Click:String,
    LastReply:String
});


mongoose.model( 'Topic_Play', Topic_Play);

//------------------------------Topic_Plays ↑

var Topic_Problem = new Schema({
    TopicID:Number,
    TopicName:String,
	TopicAuthor:String,
    Content:String,
    TIME:Date,
	Click:String,
    LastReply:String
});



mongoose.model( 'Topic_Problem', Topic_Problem);

//------------------------------Topic_Problems ↑

var Topic_Skill = new Schema({
    TopicID:Number,
    TopicName:String,
	TopicAuthor:String,
    Content:String,
    TIME:Date,
	Click:String,
    LastReply:String
});



mongoose.model( 'Topic_Skill', Topic_Skill);

//------------------------------Topic_Skills ↑

var Reply_Play = new Schema({
    ReplyID:String,
    TopicID:String,
    Content:String,
    ReplyAuthor:String,
    Click:String,
	Time:Date,
});


mongoose.model( 'Reply_Play', Reply_Play);

//------------------------------Reply_Plays ↑

var Reply_Problem = new Schema({
	ReplyID:String,
    TopicID:String,
    Content:String,
    ID:String,
    Click:String,
	Time:Date,
});


mongoose.model( 'Reply_Problem', Reply_Problem);

mongoose.connect("mongodb://zhen:Dearzhen@ds047030.mongolab.com:47030/web", function(e) {
		if (e) console.log(e.message);
		console.log("connect yes!");
	});


