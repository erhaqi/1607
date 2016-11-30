$(function(){
	//加载头部
	$(".list-top").load("../html/top.html",function(){
		//修改头部客户的信息
		 if(getCookie("username")){ 
	        $(" .deng").text("欢迎您"); 
		    $(" .zhu").text(getCookie("username"));
		 }
	});
	//加载底部
	$(".list-foot").load("../html/footer.html");
	//加载图片列表
	var i=0;
	var arr=["/data/list2.json","/data/list.json","/data/list3.json"];
	$.ajaxSetup({ 
//		type:"get",
		url:arr[0],
//		async:true,
		success:function(res){
			i++;
			$.each(res, function(idx,pic){
				$(".lazy").append($("<img/>").attr("src",pic.imgurl));
			});
		} 
	});
	$.ajax();
	
	//滑动加载 
	$(window).on('scroll',function(){
				// 获取滚动条滚动过的距离
				var scrollTop = $(window).scrollTop();
                 
				// 当差不多滚动到底部是加载更多内容
				if(scrollTop >= $(document).height() - $(window).height() - 900 && i<3){
		           
					$.ajax({
						url:arr[i]
					});
				}
				
				
			})

		
	
	
	
	
})
