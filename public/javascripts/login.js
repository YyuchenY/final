function user_login(){
	var account=$("#account").val();
	var password=$("#password").val() ;
	var url = $('#login-form').attr("action");
	var data=$('#login-form').serialize();
	
	if(account=="" && password==""){
		
		alert('請輸入帳號及密碼');
		return false;
	}
	if(account==""){
		
		alert('帳號尚未輸入');
		$('#account').focus();
		return false;
	}else if(password==""){
		
		alert('密碼尚未輸入');
		$('#password').focus();
		return false;
	};
	$.ajax({
		url:url,
		data:data,
		type : 'post',
		success:function(msg){
			//alert(msg);
			//alert(msg.trim());
			msg=msg.trim() ;
			if(msg=="success"){
				
				alert("登入成功");
				window.location = '/';

			}else{
				alert("沒有此用戶或密碼不正確");
				window.location = '/login';
			} 
		},
		error:function(xhr, ajaxOptions, thrownError){ 
			alert(xhr.status); 
			alert(thrownError); 
		},
	});
}