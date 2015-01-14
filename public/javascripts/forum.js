
var animateSpeed = 300;

$(document).ready(function($) {
  $('#buildingtop').click( function( event ) {
    setTimeout("location.href='/forum_skill'",800);
  });
  $('#buildingleft').click( function( event ) {
    setTimeout("location.href='/forum_play'",800);
  });
  $('#buildingright').click( function( event ) {
    setTimeout("location.href='/forum_problem'",800);
  });



  $( ".buildingframe" ).click( function( event ) {
    console.log( "pageX: " + event.pageX + ", pageY: " + event.pageY );
  var shiftXrevise = document.body.clientWidth*0.3/2;
  var shiftX= event.pageX-shiftXrevise+25;
  var shiftY= event.pageY-100;
  $('.people').animate({
      top: shiftY,
      left:shiftX
    }, animateSpeed);
  console.log($('.people').css('width'));
  
  });

});