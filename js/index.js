$(function(){
  $.getJSON("test.json",function(rank)
  {
    for(var i = 0; i < 5; i++)
    {
    	$("#other_rank").append("<div>" + (i+1) + "位:" + " " + "Name:" + " " + rank[i].name + " " + "Score:" + " " + rank[i].score + "</div><br>");
    }
  });

});
