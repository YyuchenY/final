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
		if(this.id == "leftbutton"){
			if(count<li.length-2){
				count++;
			}
		}
		else{
			if(count>0){
				count--;
			}
		}
		var total = count * -100.5+'%';
		$('.center').animate({
			left:total
		}, animateSpeed);
		console.log(total);
	});

};




