function beforeCall(form,options){
			if(window.console){
				console.log("Right before the AJAX form validation call");
			};
			return true;
		};
			
		// Called once the server replies to the ajax form validation request
		function ajaxValidationCallback(status,form,json,options){
			if(window.console){
				console.log(status);
			};
				
			if(status === true){
				alert("the form is valid!");
				// uncomment these lines to submit the form to form.action
				// form.validationEngine('detach');
				// form.submit();
				// or you may use AJAX again to submit the data
			}
		};
		$().ready(function(){
			// binds form submission and fields to the validation engine
			
			$("#registerform").validationEngine({
				promptPosition : "centerRight", 
				scroll: true,
				autoHidePrompt:true, //訊息隱藏 預設10秒後
				ajaxFormValidation: true,
				ajaxFormValidationMethod: 'post',
				onAjaxFormComplete: ajaxValidationCallback,
				onBeforeAjaxFormValidation: beforeCall
			
			});
			
		});