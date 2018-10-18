 //登录跳转到首页
 $(".denglu").on("click",function(){
    var arr=getCookie("userInfo");
    /*console.log(arr)
     console.log(arr.phone,arr.pwd)
     console.log($("#J_loginUser").val())*/
     if(arr.phone==$(".iphone").val()&&arr.pwd==$(".password").val()){
         location.href="../jiuhomepage.html";
         }
 })