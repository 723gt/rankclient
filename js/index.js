$(function(){
  $.getJSON("test.json",function(rank)
  {
  	$("#1st_rank").append("<div> 1位:" + " " + "Name:" + " " + rank[0].name + " " + "Score:" + " " + rank[0].score + "</div>");
  	$("#2nd_rank").append("<div> 2位:" + " " + "Name:" + " " + rank[1].name + " " + "Score:" + " " + rank[1].score + "</div>");
    $("#3rd_rank").append("<div> 3位:" + " " + "Name:" + " " + rank[2].name + " " + "Score:" + " " + rank[2].score + "</div>");
    for(var i = 3; i < 5; i++)
    {
    	$("#other_rank").append("<div>" + (i+1) + "位:" + " " + "Name:" + " " + rank[i].name + " " + "Score:" + " " + rank[i].score + "</div><br>");
    }
  });
  setTimeout("location.reload()",5000);
});