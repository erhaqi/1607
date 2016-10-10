//验证码
function verification_code(obj){
	var str="1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	var ob="";
	for(var i=0;i<4;i++){
	 ob+=str[parseInt(Math.random()*62)];  
	}
	obj.text(ob);
}
//下拉表移入移出显示隐藏
function Toggle(obj1,obj2){
	$(obj1).on("mouseover",function(){
		$(obj2).show(); 
	}).on("mouseout",function(){
		$(obj2).hide(); 
	})
	$(obj2).on("mousemove",function(){
		$(this).show(); 
	}).on("mouseout",function(){
		$(this).hide(); 
	})
	
	}