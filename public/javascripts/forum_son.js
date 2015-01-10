/*
$(function(){ 
        
        $('body').click(function(evt) {
        	var divObject = document.getElementById('forum_content');
        	//console.log($(evt.target).parents("#forum_content"));
            if($(evt.target).parents("#forum_content").length==0 &&
                divObject.className == "forum_content") {
               divObject.className = "content_hidden";
            }
        });
    });*/

function CollapseExpand(obj) {
	var divID = obj;
	var divObject = document.getElementById(divID);
	if(divObject.className == "content_hidden"){
		divObject.className = "forum_content";
	}
	else if(divObject.className == "forum_content"){
		divObject.className = "content_hidden";
	}
	    $('body').click(function(evt) {
		var divObject = document.getElementById('forum_content');
		//console.log($(evt.target).parents("#forum_content"));
	    if($(evt.target).parents("#forum_content").length==0 &&
	        divObject.className == "forum_content") {
	       divObject.className = "content_hidden";
	    }
	});
}
/*
$(function(){
	var divObject = document.getElementById('forum_content');
	$('body').click(function(evt) {
	    //console.log(evt.target);
		if(evt.target.className == "content_hidden"){
			divObject.style.WebkitAnimationName = 'fadout';
			divObject.className = "forum_content";
		}
		else if(evt.target.className == "forum_content"){
			divObject.style.WebkitAnimationName = 'fadin';
			setTimeout(function () {  
				divObject.className = "content_hidden";
			}, 300);  
		}

		else {
	        divObject.style.WebkitAnimationName = 'fadin';
			setTimeout(function () {  
				divObject.className = "content_hidden";
			}, 300);
			
		}
		console.log(evt.target.id);
	});


});*/


