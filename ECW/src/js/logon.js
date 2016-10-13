$(function(){
	
	$(".foot").load("logon_login_foot.html");
	
	//普通登录单击事件
	$(".logon-general").addClass("active");
	$(".logon-general").on("click",function(){
		$(this).addClass("active").next().removeClass("active");
		$(".general-menu").show();
		$(".phone-menu").hide();
		$(".logon-menu").css("height","420px");
	});
	
    //手机登录单击事件
	$(".logon-phone").on("click",function(){
		$(this).addClass("active").prev().removeClass("active");
		$(".general-menu").hide();
		$(".phone-menu").show();
		$(".logon-menu").css("height","450px");
	});
	//获取验证码
	verification_code($(".y-psw-content"))
	$(".y-psw-content").on("click",function(){
		$(this).text("");
		verification_code($(this))
	});
	//提交
	
	$(".logon-btn").on("click",function(){ 
		if($(".username").val()==getCookie("username") && $(".psw").val()==getCookie("psd")&&$(".psw").val()!=""&&$(".username").val()!=""){
			alert("...正在登录");
			open("http://localhost:3000/src/shou-ye.html");
		}else{   
			alert("登录失败，请重试");   
				
		}
	});
})
