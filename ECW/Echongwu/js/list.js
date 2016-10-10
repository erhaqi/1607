$(function(){
	//加载头部
	$(".list-top").load("../html/top.html");
	//加载底部
	$(".list-foot").load("../html/footer.html");
	//加载图片列表
	var i=0;
	$.ajaxSetup({ 
//		type:"get",
		url:"/data/list.json",
//		async:true,
		success:function(res){
			i++;
			$.each(res, function(idx,pic){
				$(".lazy").append($("<img/>").attr("src",pic.imgurl))
			});
		} 
	});
	$.ajax(); 
	//滑动加载 
	$(window).on('scroll',function(){
				// 获取滚动条滚动过的距离
				var scrollTop = $(window).scrollTop();
                 
				// 当差不多滚动到底部是加载更多内容
				if(scrollTop >= $(document).height() - $(window).height() - 500 && i<5){
					
					$.ajax();
				}
				console.log(i);
				
			})

		
	
	
	
	
})
