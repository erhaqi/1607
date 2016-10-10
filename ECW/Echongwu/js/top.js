$(function(){
	Toggle($(".top ul li:nth-child("+4+")"),$(".drop-down"));
	Toggle($(".top ul li:nth-child("+5+")"),$(".drop-down-div"));
	$(".daohang ul li").eq(0).on("mouseenter",function(){
		 $(".daohang-drop-down").hide();
		 $(".daohang-drop-down2").show(); 
	})
	$(".daohang ul li").eq(1).on("mouseenter",function(){
		 $(".daohang-drop-down2").hide(); 
		  $(".daohang-drop-down").show();
	})
})
