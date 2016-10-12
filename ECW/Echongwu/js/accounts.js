$(function(){
	//加载头部 
	$(".accounts-top").load("top.html",function(){
		$(".daohang").remove();
        $(".accounts-top .search span").eq(3).remove();
        $(".accounts-top .search span").eq(2).remove();
        
		 if(getCookie("username")){ 
	        $(" .deng").text("欢迎您"); 
		    $(" .zhu").text(getCookie("username"));
		 }
	//加载底部
	$(".accounts-foot").load("footer.html");
	//添加到购物车
	   if(getCookie("shuxing")){
		var arr=[];
		var shuxing=getCookie("shuxing");
		var goods= JSON.parse(getCookie("shuxing"));
		$.each(goods, function(idx,ele){
			arr.push(ele);
		});
		console.log(arr[0].id);
		if( arr[0].id=="1"){ 
			//隐藏空商品的框架
			$(".kong").hide();
			//加入有商品的框架
			var $sp=$("<span class='count'></span>");
		    $(".accounts").append($sp);
		    //加入复选框
		    $("<input/>").attr({"type":"checkbox","checked":true}).appendTo($sp);
		    //复选框单击事件 
		    $sp.find("input").on("click",function(){
		    	
		    	if($(this).prop("checked")==false){
		    	$div.find("span").hide();
	            $div.find("input").prop("checked",false);
	           }
	            else{
	            	$div.find("span").show();
	            }
		    })
		    //加入选中的图片
		    $("<img />").attr("src",arr[0].prc).appendTo($sp);
		    //加入商品名字
		    $("<dl/>").text(arr[0].name).appendTo($sp);
		    //加入商品价格
		    $("<dt/>").text(arr[0].cost).appendTo($sp);
		    //加入加加剪剪
		    var $jia_jian=$("<dd/>");
		    $("<span/>").text("-").appendTo($jia_jian);
		    $("<span/>").text(arr[0].num).appendTo($jia_jian);
		    $("<span/>").text("+").appendTo($jia_jian);
		    $sp.append($jia_jian);
		    //加加事件
		    $jia_jian.find("span").eq(2).on("click",function(){
		     $jia_jian.find("span").eq(1).text(parseInt($jia_jian.find("span").eq(1).text())+1);
		     if( parseInt($jia_jian.find("span").eq(1).text())>99){
		     	  $jia_jian.find("span").eq(1).text(99);
		     } 
		     $div.find("span").text("￥"+arr[0].cost*parseInt($("dd span").eq(1).text()));
		    });
		     //减减事件
		    $jia_jian.find("span").eq(0).on("click",function(){
		     $jia_jian.find("span").eq(1).text(parseInt($jia_jian.find("span").eq(1).text())-1);
		     if( parseInt($jia_jian.find("span").eq(1).text())<0){
		     	  $jia_jian.find("span").eq(1).text(0);
		     }
		      $div.find("span").text("￥"+arr[0].cost*parseInt($("dd span").eq(1).text()));
		    });
		    //加入删除按钮
		    $("<button class='clear'/>").text("删除").appendTo($sp);
		    //加入收藏按钮
		    $("<button class='collect-gather'/>").text("收集").appendTo($sp);
		    //加入结算区域
		     var $div=$("<div class='jie'/>").appendTo($(".accounts"));
		     //加入全选按钮
		     $("<input />").attr("type","checkbox").appendTo($div);
		     //全选按钮事件
		     $div.find("input").on("click",function(){
		     	$(".accounts").find("input").prop("checked",$(this).prop("checked"));
		     })
		     $("<dl/>").text("全选").appendTo($div);
		     //加入选中商品
		      $("<dt/>").text("[删除选中商品]").appendTo($div);
		      //加入收藏选中商品
		      $("<dt/>").text("[收藏选中商品]").appendTo($div);
		      //加入总价文字
		        $("<dd/>").text("总价(不含运费)").appendTo($div);
		      //加入总价
		        $("<span>").text("￥"+parseFloat(arr[0].cost)*parseInt($("dd span").eq(1).text())).appendTo($div);
		       
		      //加入结算按钮
		      $("<button></button>").text("去结算").appendTo($div);
		    //删除事件
		    $(".clear").on("click",function(){
		    	$sp.remove();
		    	$div.remove();
		    	$(".kong").show();
		    	removeCookie("shuxing");
		    
		    });
		}
	
	}
	
	});
	
	 
})
