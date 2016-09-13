$(function(){
  $.getJSON("test.json",function(data)
  {
  	$("#1st_rank").append("<div>" + {"1":data.name} + {"1":data.score} + "</div>");
  });

});