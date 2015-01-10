function user_register(){
	var nickname=$("#nickname").val() ;
	var account=$("#account").val();
	var password=$("#password").val() ;
	//var password2=$("#password2").val() ;
	var email=$("#email").val();
	var url = $('#register-form').attr("action");
	var data=$('#register-form').serialize();
	
	if(nickname==''){
		alert("請輸入暱稱");
		
		$("#nickname").focus();
		return false;
	}else if(!(checkLength( nickname, 1, 20 ))){
		alert('暱稱應少於20字');
		$("#nickname").focus();
		return false;
	}

	if(account==''){
		alert("請輸入帳號");
		$("#account").focus();
		return false;
	}else if(!(checkLength( account, 1, 20 ))){
		alert('帳號應少於20字');
		$("#account").focus();
		return false;
	}else if(!(checkRegexp(account, /^([a-zA-Z]+\d+|\d+[a-zA-Z]+)[a-zA-Z0-9]*$/))){
		alert('帳號要有英文跟數字組合');
		$("#account").focus();
		return false;
	}

	if(password==''){
		alert("請輸入密碼");
		$("#password").focus();
		return false;
	}else if(!(checkLength( password, 6, 20 ))){
		alert('密碼應多於6字元少於20字元');
		$("#password").focus();
		return false;
	}else if(!(checkRegexp(password, /^([a-zA-Z]+\d+|\d+[a-zA-Z]+)[a-zA-Z0-9]*$/))){
		alert('密碼要有英文跟數字組合');
		$("#password").focus();
		return false;
	}
	//else if(password!=password2){
	//	alert("兩次密碼不相符");
	//}

	if(email=''){
		alert('請輸入E-mail');
		$("#email").focus();
	}else if(!(checkLength( password, 6, 50 ))){
		alert('E-mail過長請重新輸入');
		$("#email").focus();
	}
	$.ajax({
		url:url,
		data:data,
		type : 'post',
		dataType:'text',
		success:function(msg){
			//alert(msg);
			//alert(msg.trim());
			msg=msg.trim() ;
			if(msg =="success"){
				
				alert("註冊成功");
				window.location = '/login';
			}else
			{	
				alert("此帳號有人使用囉!!");
				window.location = '/register';
			
			}
		},
		error:function(xhr, ajaxOptions, thrownError){ 
			alert(xhr.status); 
			alert(thrownError); 
        }
		
	});	
}

