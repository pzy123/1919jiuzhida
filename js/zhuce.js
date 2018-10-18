//点击注册
$(".zhuce").on("click", function(){
    var json={
        phone:$(".iphone").val(),
        pwd:$(".password").val(),
        pwd2:$(".password2").val()
    }
   setCookie("userInfo",JSON.stringify(json));
   console.log(document.cookie);
   location.href="denglu.html";
})

//手机号验证
$(".iphone").blur( function(){
    var reg = /^\d{11}$/;
    var str = this.value;
    if( reg.test( str ) ){
        $(this).css( "border","2px solid yellowgreen" );
    }else{
        $(this).css( "border","2px solid red" );
        alert("请输入正确的电话号码")
    }
} )

//密码验证
$(".password").blur( function(){
    var reg = /^\w{6,}$/;
    var str = this.value;
    if( reg.test( str ) ){
        $(this).css( "border","2px solid yellowgreen" );
    }else{
        $(this).css( "border","2px solid red" );
        alert("请输入至少6位的密码")
    }
} )
//二次密码
$(".password2").blur( function(){
    var str2 = $(".password").val(); 
    var str = $(this).val();
    if( str==str2 ){
        $(this).css( "border","2px solid yellowgreen" );
    }else{
        $(this).css( "border","2px solid red" );
        alert("两次密码不一致")
    }
} )
//随机验证码
$(".span").click( function(){
		var str = "";
		for( var i = 0 ; i < 4 ; i++ ){
			var code = rand(0,9);
			str += code;
			console.log(str);
		}	
		$(this).html(str);
} )
//验证验证码
$(".yanzhengma").blur( function(){
    var str = $(this).val();
    var str2 = $(".span").html();
    if( str == str2 ){
        $(this).css( "border","2px solid yellowgreen" );
    }else{
        $(this).css( "border","2px solid red" );
        alert("请输入正确的验证码")
    }
} )