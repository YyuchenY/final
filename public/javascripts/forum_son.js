function CollapseExpand(obj,docs,reply) {
	var divID = obj;
	var divObject = document.getElementById(divID);
	if(divObject.className == "hidden"){
		divObject.className = "forum_frame";
			$('.content_frame').click(function (evt) {
    evt.stopPropagation();

    // Your code here
	});
	}
	else if(divObject.className == "forum_frame"){
		divObject.className = "hidden";
		//alert(url);
		window.location.reload();
	}
	console.log(docs);
	var content,content_time,content_author,content_content,content_title
	if(docs){
		var temp=docs;
		temp=temp.trim();
		var res = temp.split(",");
		console.log(res.length);
		
		

		var title=document.getElementById("title");
		var time=document.getElementById("time");
		var author=document.getElementById("author");
		var content=document.getElementById("content");
		var Reply_TopicID=document.getElementById("Reply_TopicID");
		content.innerHTML=res[0];//文章內容
		title.innerHTML=res[1];//文章標題
		author.innerHTML="作者："+res[2];//文章作者
		time.innerHTML="發文時間："+res[3];//發文時間

		Reply_TopicID.setAttribute('value',res[4]);
		//Reply_TopicID=res[4];
		//alert(Reply_TopicID);
		res.length=0;

		if(reply!=''){
			var temp2=reply;
			temp2=temp2.trim();
			var res2 = temp2.split(",");
			console.log(res2);
			console.log(res2.length);
			var reply_author=new Array();
			var reply_time=new Array();
			var reply_content=new Array();

			for(var i=1;i<res2.length;i++){
				if(i%3==0)
					reply_time.push(res2[i]);
				else if(i%3==1)
					reply_content.push(res2[i]);
				else if(i%3==2)
					reply_author.push(res2[i]);
			}

			for(var i=0;i<reply_time.length;i++){
				console.log(reply_time.length);
				var reply=document.getElementById('reply')
				var replyframe=document.createElement("div");
				var replytitle=document.createElement("div");
				var replyauthor=document.createElement("div");
				var replytime=document.createElement("div");
				var clear=document.createElement("div");
				var replycontent=document.createElement("div");
				
				replyframe.setAttribute('class','reply_frame');
				replytitle.setAttribute('class','reply_title');
				replyauthor.setAttribute('class','reply_author');
				replytime.setAttribute('class','reply_time');
				clear.setAttribute('class','clear');
				replycontent.setAttribute('class','reply_content');
				
				
				replyauthor.innerHTML="作者："+reply_author[i];//回應作者
				replytime.innerHTML="回應時間："+reply_time[i];//回應時間
				replycontent.innerHTML=reply_content[i];//回應內容
				
				replytitle.appendChild(replyauthor);
				replytitle.appendChild(replytime);
				replytitle.appendChild(clear);
				replyframe.appendChild(replytitle);
				replyframe.appendChild(replycontent);
				reply.appendChild(replyframe);
				
				res2.length=0;
			}
		}
		

	}
	
	
	

}

function startReply(obj){
	var divID = obj;
	var divObject = document.getElementById(divID);
	if(divObject.className == "hidden"){
		divObject.className = "reply_box";
	}
	else if(divObject.className == "reply_box"){
		divObject.className = "hidden";
	}
}

function startTopic(obj){
	var divID = obj;
	var divObject = document.getElementById(divID);
	if(divObject.className == "hidden"){
		divObject.className = "topic_box";
	}
	else if(divObject.className == "topic_box"){
		divObject.className = "hidden";
	}
}


$(function(){
    $("#backtothetop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
});





$(function(){ 
	var i;
	for(i=1;i<=$('.respond_frame').length;i++){
		if(i%2==1){
			$('.respond_frame')[i].style.backgroundColor = '#d0d0d1';
		}
	}

		//console.log($('.respond_frame')[1].style.backgroundcolor)
});



