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