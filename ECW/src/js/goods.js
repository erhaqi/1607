$(function(){ 
	var goods=getCookie('goods');
	goods=goods?JSON.parse(getCookie('goods')):[];
	var counts=getCookie('counts');
	counts=counts?JSON.parse(getCookie('counts')):[];
	//加载头部  
	$(".top-shop").load("../html/top.html",function(){
		$(".top-shop .search span").eq(3).find("b").text(counts[0]);
        if(getCookie("username")){ 
	        $(" .deng").text("欢迎您"); 
		    $(" .zhu").text(getCookie("username"));
		 }
	}); 
	//加载尾部  
	$(".foot-shop").load("../html/footer.html");
	//放大镜区域的图片
	$.ajax({
		type:"get",
		url:"/data/magnifyin_pictureg.json",
		async:true,
		success:function(res){ 
			
			$.each(res, function(idx,pic) {
				$(".xiao").eq(idx).append($("<img/>").attr("src",pic.xiao));
				$(".xiao").eq(idx).on("mouseenter",function(){
				   $(".zhong img").attr({"aa":pic.da,"src":pic.zhong}); 
			});
			});
		}
	});
	//商品详细介绍区域的图片
	 $.ajax({
	 	type:"get",
	 	url:"/data/goods.json",
	 	async:true,
	 	success:function(res){
	 		$.each(res, function(idx,pic){
	 			$(".rigght_").append($("<img />").attr("src",pic.imgurl))
	 		});
	 	}
	 });
	 //商品详细介绍区域左边
	 $.ajax({
	 	type:"get",
	 	url:"/data/left.json",
	 	async:true,
	 	success:function(res){
	 	
	 		$.each(res, function(idx,ele){
	 			
	 			$("<li></li>").append($("<img />").attr("src",ele.imgurl)).append(ele.name).appendTo($(".left_ ul"));
               
	 		});
	 	}
	 });
	 //购物数量加加减减 
	 var number=1; 
	 $(".datalist li").eq(8).find(".jia").on("click",function(){
	 	console.log("1"); 
	 	  number++;
	 	  if(number>99){
	 	  	number=99;
	 	  }
	 	  $(".datalist li").eq(8).find(".num").text(number); 
	 });
	  $(".datalist li").eq(8).find(".jian").on("click",function(){
	 	  number--;
	 	  if(number<1){
	 	  	number=1;
	 	  }
	 	    $(".datalist li").eq(8).find(".num").text(number);
	 });
	 //加入购物车
	//购物车里商品的数量 
	console.log(counts[0])
	
	
	 $(".datalist li").eq(10).on("click",function(){
	 	
	 	var $oDiv=$("<div class='copy'></div>"); 
	 	$oDiv.css({
	 		left:$(".zhong").offset().left,
	 		top:$(".zhong").offset().top
	 	})
	 	$oDiv.append($(".zhong img").clone()).appendTo($("body"));
	 	  $oDiv.animate({
	 		left:$(".top-shop .search span").eq(3).offset().left, 
	 		top:$(".top-shop .search span").eq(3).offset().top,
	 		width:0,
	 		height:0 
	 	},2000,function(){
	 	
	 	
	 	//cookice
        var d=new Date();
	 	d.setDate(d.getDate() +30);  
	 	var jso={
	 	    	"id":"1",//保存商品id
	 	    	"num":number,//保存商品数值  
	 	    	"name":$(".wenzi .datalist li").eq(0).text(),//保存商品名称
	 	    	"prc":$('.details div img').eq(1).attr("src"),//保存商品图片
	 	    	"cost":$(".wenzi .datalist li").eq(3).find("span").text()//保存商品价格  
	 	    };
	        counts[0]=0;
	       
	 	for(var i=0;i<=goods.length-1;i++){
	 		counts[0]+=goods[i].num;
	 		
	 		if(goods[i].name==jso.name){
	 			jso.num+=goods[i].num;
	 			goods.splice(i,1);
	 		}
	 	}
	 	console.log(counts[0]);
	 	$(".top-shop .search span").eq(3).find("b").text(counts[0]);
	 	goods.unshift(jso);
	 	
	    setCookie("goods",JSON.stringify(goods),d,"/src/html");
	    setCookie("counts",JSON.stringify(counts),d,"/src/html");
	 	$oDiv.remove();
	 	
 	 	});
	 }); 
	
	
	 	
	 

	 
	
})
