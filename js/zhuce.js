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