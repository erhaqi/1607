$(function(){
	//加载头部
	$(".accounts-top").load("top.html",function(){
		$(".daohang").remove();
		$(".accounts-top .search span").eq(3).find("b").text(getCookie("num"));
		 if(getCookie("username")){ 
	        $(" .deng").text("欢迎您"); 
		    $(" .zhu").text(getCookie("username"));
		 }
		if(getCookie("name")){
			//隐藏空商品的框架
			$(".kong").hide();
			//加入有商品的框架
			var $sp=$("<span class='count'></span>");
		    $(".accounts").append($sp);
		    //加入复选框
		    $("<input/>").attr("type","checkbox").appendTo($sp);
		    //加入选中的图片
		    $("<img />").attr("src",getCookie("prc")).appendTo($sp);
		    //加入商品名字
		    $("<dl/>").text(getCookie("name")).appendTo($sp);
		    //加入商品价格
		    $("<dt/>").text(getCookie("cost")).appendTo($sp);
		    //加入加加剪剪
		    var $jia_jian=$("<dd/>");
		    $("<span/>").text("-").appendTo($jia_jian);
		    $("<span/>").text(getCookie("num")).appendTo($jia_jian);
		    $("<span/>").text("+").appendTo($jia_jian);
		    $sp.append($jia_jian);
		    //加入删除按钮
		    $("<button class='clear'/>").text("删除").appendTo($sp);
		    //加入结算区域
		     var $div=$("<div class='jie'/>").appendTo($(".accounts"));
		     //加入全选按钮
		     $("<input />").attr("type","checkbox").appendTo($div);
		     $("<dl/>").text("全选").appendTo($div);
		     //加入选中商品
		      $("<dt/>").text("[删除选中商品]").appendTo($div);
		      //加入总价文字
		        $("<dd/>").text("总价").appendTo($div);
		      //加入总价
		        $("<span>").text(getCookie("cost")).appendTo($div);
		      //加入结算按钮
		      $("<button></button>").text("去结算").appendTo($div);
		    //删除事件
		    $(".clear").on("click",function(){
		    	$sp.remove();
		    	$div.remove();
		    	$(".kong").show(); 
		    })
		}
	});
	
	
	
	
	 
})
