var http_request=false;

function GetTopicOid(variable)
{
	 http_request=false;
	 if(window.XMLHttpRequest)
	 {
	  http_request=new XMLHttpRequest();
	  //setTimeout("test_ajax('')", 2000)
	  if(http_request.overrideMimeType)
	  {
			http_request.overrideMimeType('text/xml');
	  }
	 }
	 else if(window.ActiveXObject)
	 {
	  try
	  { //6.0+
			http_request=new ActiveXObject("Msxml2.XMLHTTP");
	  }
	  catch(e)
	  {
		   try
		   { //5.5+
				http_request=new ActiveXObject("Microsoft.XMLHTTP");
		   }catch (e){}
	  }
 
 }
	 if(!http_request)
	 {
			alert('Giving up :( Cannot create a XMLHTTP instance');
			return false;
	 }
	 var dy="#number_"+variable;
	 var variable2=document.getElementById(dy);
	 console.log(dy);
	 console.log(variable2);
	 http_request.onreadystatechange=show_area;
	 http_request.open('GET','/getoid?oid='+variable,true);
	 http_request.send(null);
}

function show_area()
{
	 if(http_request.readyState==4)
	 {
		  if(http_request.status==200)
		  {
				//document.getElementById("show_area").innerHTML =http_request.responseText; 
			  // $('#show_area').html(http_request.responseText)  //將結果顯示出來
		  }
	 }
}