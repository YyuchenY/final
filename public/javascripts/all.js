function checkLength( o, min, max ) {
	if ( o.length > max || o.length < min ) {
		return false;
	} else {
		return true;
	}
}
//檢查正規化		
function checkRegexp( o, regexp ) {
	if ( !( regexp.test( o) ) ) {
		return false;
	} else {
		return true;
	}
}

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

