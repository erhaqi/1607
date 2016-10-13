$(function(){ 
	//加载头部 
	$(".shouye-top").load("html/top.html",function(){
		//修改头部客户的信息
		 if(getCookie("username")){ 
	        $(".shouye-top .deng").text("欢迎您"); 
		    $(".shouye-top .zhu").text(getCookie("username"));
		 }
		//修改头部的图片的默认路径
		
		$(".shouye-top .top-next-img img").attr("src","img/top/df7d7f9a4d2af1d833c304b92ab49069.jpg");
		$(".shouye-top .search img").attr('src','img/gif/epet-logo.png');
		$(".shouye-top .daohang img ").attr("src","img/gif/phoneApp.gif");
	   
		//加载头部的js
        Toggle($(".shouye-top  .top ul li:nth-child("+4+")"),$(".shouye-top  .drop-down"));
	    Toggle($(".shouye-top  .top ul li:nth-child("+5+")"),$(".shouye-top .drop-down-div"));
	    $(".shouye-top .daohang-drop-down").show(); 
   	    $(".shouye-top .daohang ul li").eq(0).on("mouseenter",function(){
		 $(".shouye-top .daohang-drop-down").hide();
		 $(".shouye-top .daohang-drop-down2").show();  
	})
	$(".shouye-top .daohang ul li").eq(1).on("mouseenter",function(){
		  $(".shouye-top .daohang-drop-down2").hide(); 
		  $(".shouye-top .daohang-drop-down").show(); 
	});
	//三级菜单事件
	$(".daohang-drop-down li").on("mouseenter",function(){
		$(".daohang li").eq(1).css("background","green");
		$(".dao").show();
	}).on("mouseleave",function(){
		$(" .dao").hide();
		$(".daohang li").eq(1).css("background","white");
	});
	//回到顶部事件
	    $(".bar span").eq(9).hide();
        $(window).on("scroll",function(){
        	var scroll=$(document).scrollTop();
           if(scroll>500){
        	$(".bar span").eq(9).show();
          }else{
          	$(".bar span").eq(9).hide();
          }
     });
     $(".bar span").eq(9).on("click",function(){
     	 $('body').animate({"scrollTop":0}); 
     })
});
	
	
	//加载底部
	$(".shouye-foot").load("html/footer.html",function(){
		$(".shouye-foot .tab img").attr("src","img/footer/cat_phone.png");
		$(".shouye-foot .safe img").eq(0).attr("src","img/footer/safe360.png");
		$(".shouye-foot .safe img").eq(1).attr("src","img/footer/bottom_small_img.png" );
		$(".shouye-foot .safe img").eq(2).attr("src", "img/footer/safesite.png");
		$(".shouye-foot .safe img").eq(3).attr("src","img/footer/safeqq.png" );
		$(".shouye-foot .safe img").eq(4).attr("src","img/footer/safetrace.png" );
		$(".shouye-foot .safe img").eq(5).attr("src","img/footer/safegs.png"); 
		$(".shouye-foot .two_dimensional_code img").eq(0).attr("src","img/footer/dw2.png" );
		$(".shouye-foot .two_dimensional_code img").eq(1).attr("src","img/footer/dw2.png" );
		$(".shouye-foot .honor img").eq(0).attr("src","img/footer/ebrun.png");
		$(".shouye-foot .honor img").eq(1).attr("src","img/footer/wsxh.png");
		$(".shouye-foot .honor img").eq(2).attr("src","img/footer/cqsywyh.png");
		$(".shouye-foot .honor img").eq(3).attr("src","img/footer/goodNet.png");
		$(".shouye-foot .honor img").eq(4).attr("src","img/footer/cqsapa.png");
		$(".shouye-foot .honor img").eq(5).attr("src","img/footer/sjws.png");
		
	});
		

	
	//精品购物区域
	$.ajax({
		type:"get", 
		url:"/data/jingpin.json",
		success:function(res){  
			
			$(".start-jingpin div").append($("<span class='jingpin-picture'></span>"))
			$.each(res, function(idx,jingpin) {
				$(".start-jingpin").append($("<div></div>"));
				$(".start-jingpin div").eq(idx).append($("<span class='jingpin-picture'></span>"));
				$(".start-jingpin div").eq(idx).append($("<dl/>"));
				$(".start-jingpin div").eq(idx).append($("<dt/>"));
				$(".start-jingpin div").eq(idx).append($("<dd/>"));
				$(".start-jingpin div .jingpin-picture").eq(idx).append($("<img />").attr("src",jingpin.imgurl));
				$(".start-jingpin div dl").eq(idx).text(jingpin.title);
				$(".start-jingpin div dt").eq(idx).text(jingpin.reason); 
				$(".start-jingpin div dd").eq(idx).text(jingpin.price); 
				$(".start-jingpin div").eq(0).on("click",function(){ 
		open("http://localhost:3000/Echongwu/html/goods.html");
	})
			});
		} 
	});
	
	//狗狗主粮
	
	$.ajax({
		type:"get",
		url:"/data/dog_food.json",
		async:true,
		success:function(res){
			
			$.each(res, function(idx,food) { 
				$(".dog-food div").append($("<span/>"));
				$(".dog-food div span").eq(idx).append($("<dl/>"));
				$(".dog-food div span").eq(idx).append($("<dt/>")); 
				$(".dog-food div span").eq(idx).append($("<dd/>")); 
				$(".dog-food div span dl").eq(idx).append($("<img/>").attr("src",food.imgurl));
				$(".dog-food div span dt").eq(idx).text(food.name);
				$(".dog-food div span dd").eq(idx).text(food.price);
			});
		} 
	});
	//狗狗零食
	$.ajax({
		type:"get",
		url:"/data/dog_lingshi.json",
		async:true,
		success:function(res){
			
			$.each(res, function(idx,food) { 
				$(".dog-lingshi div").append($("<span/>"));
				$(".dog-lingshi div span").eq(idx).append($("<dl/>"));
				$(".dog-lingshi div span").eq(idx).append($("<dt/>")); 
				$(".dog-lingshi div span").eq(idx).append($("<dd/>")); 
				$(".dog-lingshi div span dl").eq(idx).append($("<img/>").attr("src",food.imgurl));
				$(".dog-lingshi div span dt").eq(idx).text(food.name);
				$(".dog-lingshi div span dd").eq(idx).text(food.price);
			});
		} 
	});
         
         //狗狗保健
	$.ajax({
		type:"get",
		url:"/data/dog_baojian.json",
		async:true,
		success:function(res){
			
			$.each(res, function(idx,food) { 
				$(".dog-baojian div").append($("<span/>"));
				$(".dog-baojian div span").eq(idx).append($("<dl/>"));
				$(".dog-baojian div span").eq(idx).append($("<dt/>")); 
				$(".dog-baojian div span").eq(idx).append($("<dd/>")); 
				$(".dog-baojian div span dl").eq(idx).append($("<img/>").attr("src",food.imgurl));
				$(".dog-baojian div span dt").eq(idx).text(food.name);
				$(".dog-baojian div span dd").eq(idx).text(food.price);
			});
		} 
	});
	      //狗狗日常用品
	$.ajax({
		type:"get",
		url:"/data/dog_baojian.json",
		async:true,
		success:function(res){
			
			$.each(res, function(idx,food) { 
				$(".dog-richang div").append($("<span/>"));
				$(".dog-richang div span").eq(idx).append($("<dl/>"));
				$(".dog-richang div span").eq(idx).append($("<dt/>")); 
				$(".dog-richang div span").eq(idx).append($("<dd/>")); 
				$(".dog-richang div span dl").eq(idx).append($("<img/>").attr("src",food.imgurl));
				$(".dog-richang div span dt").eq(idx).text(food.name);
				$(".dog-richang div span dd").eq(idx).text(food.price);
			});
		} 
	});

}) 
