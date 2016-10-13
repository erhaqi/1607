$(function(){
	//加载底部
	$(".foot").load("logon_login_foot.html");
		
	var _tel_=false; //手机
	var y_code=false;//验证码
	var noye_=false;//短信
	var username_=false;//用户名
	var _psd_=false;//密码
	var q_psd_=false;//确认密码
	var checkbox_=false;//同意
	//手机号
	$("input").eq(0).on("blur",function(){
		console.log("1");
		$("form ul li").eq(0).show();
		if(/^[1-3]\d{10}$/.test($(this).val())){
			_tel_=true;
			$("form ul li").eq(0).text("大侠，恭喜你填对了");
			$(this).removeClass("error");
		}else{
			$("form ul li").eq(0).text("大嘛，你的手机号码不对");
				$(this).addClass("error");
		}
		
	});
	//获取验证码
	verification_code($(".yzm"))
	$(".yzm").on("click",function(){ 
		$(this).text("");
		verification_code($(this))
	})
	//验证码
	$("input").eq(1).on("blur",function(){
		$("form ul li").eq(1).show();
		if($(this).val()==$(".yzm").text()){
			y_code=true;
			$("form ul li").eq(1).text("大侠，继续下关");
			$(this).removeClass("error");
		}else{
			$("form ul li").eq(1).text("大嘛，你又错了");
			$(this).addClass("error");
		}
	});
	//短信验证码
		$("input").eq(2).on("blur",function(){
		$("form ul li").eq(2).show();
		if($(this).val()==$(".dx").text()){
			noye_=true;
			$("form ul li").eq(2).text("大侠，一小步，成功一大把");
			$(this).removeClass("error");
		}else{
				$("form ul li").eq(2).text("大嘛，再接再厉");
					$(this).addClass("error");
		}
	});
	//用户名
	$("input").eq(3).on("blur",function(){
		$("form ul li").eq(3).show();
		if(/^[a-zA-Z_][a-zA-Z0-9_]{4,20}/.test($(this).val())){
			username_=true;
		   $("form ul li").eq(3).text("大侠,胜利在望");
			$(this).removeClass("error");
		}else{
			$("form ul li").eq(3).text("大嘛，爱拼才会赢");
			$(this).addClass("error");
		}
	});
	//密码 
	$("input").eq(4).on("blur",function(){
		$("form ul li").eq(4).show(); 
		if(/([a-zA-Z0]|\d){8,20}/.test($(this).val())){
			_psd_=true;
		   $("form ul li").eq(4).text("大侠,还差最后一小步了");
			$(this).removeClass("error");
		}else{
			$("form ul li").eq(4).text("大嘛，在这一下去要gg");
			$(this).addClass("error"); 
		}
	});
	//确认密码
	$("input").eq(5).on("blur",function(){
		$("form ul li").eq(5).show(); 
		if($(this).val()==$("input").eq(5).val() && $(this).val()!=""){
			q_psd_=true;
		   $("form ul li").eq(5).text("大侠,恭喜通关");
			$(this).removeClass("error");
		}else{
			$("form ul li").eq(5).text("大嘛，从头再来");
			$(this).addClass("error"); 
		}
	});
	//同意
	if($("input").eq(6).attr("checked")=="checked"){
		checkbox_=true;
		

	}
		
	//提交
     $(".btn").on("click",function(){
     	var username = $("input").eq(3).val() //账号
 		var pwd =$("input").eq(4).val()      //密码
     	if(_tel_==true && y_code==true  && noye_==true && username_==true  &&_psd_==true  && q_psd_==true  && checkbox_==true ){
     		alert("提交成功");
     		var d = new Date;
 			d.setDate(d.getDate() + 10);
     		var username = setCookie("username",username,d,"/Echongwu");
 			var psd = setCookie("psd",pwd,d);
 			open("http://localhost:3000/Echongwu/html/logon.html");
     	}else{
     		alert("请核查");
     	}
     })
})
