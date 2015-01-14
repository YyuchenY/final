function widthchange(){
	var box = $('.center'),
			li = box.find('li'),
			width = li.width(),
			animateSpeed = 500;
	var count = 0;
	box.width(li.length * 100+'%');
	li.width( 100 / li.length +'%');
	$( "button" ).click(function() {
		console.log(count);
		if(this.id == "rightbutton"){
			if(count<li.length-2){
				count++;
			}
		}
		else{
			if(count>0){
				count--;
			}
		}
		var total = count * -100+'%';
		$('.center').animate({
			left:total
		}, animateSpeed);
		console.log(total);
	});

	$( "#more_info" ).click(function() {
		if(count<li.length-2){
				count++;
			}
		var total = count * -100+'%';
		$('.center').animate({
			left:total
		}, animateSpeed);
	});
};

var a;
function login(obj) {
	var divID = obj;
	var divObject = document.getElementById(divID);
	console.log(a);

	if(divObject.className == "hidden"){
		divObject.className = "register_box";
	}
	
	else if(divObject.className == "register_box"){
		divObject.className = "hidden";
	}
	if(a){
		if(a !=obj){
			document.getElementById(a).className = "hidden";
			console.log(a);
		}
	}

	a = obj;
}


