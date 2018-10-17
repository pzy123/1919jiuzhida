//顶部开始
$(".header1-center span").hover( function(){
    $(this).find("a").css( "color","#e50012" );
},function(){
    $(this).find("a").css( "color","#666666" )
} )

$(".header1-right li").hover( function(){
    $(this).css( "background","#FFFFFF" );
    $(this).find("ul").css( "display","block" );
    $(this).find("div").css( "display","block" );
},function(){
    $(this).find("ul").css( "display","none" );
    $(this).find("div").css( "display","none" );
    $(this).css( "background","" );
} )

$(".header1-right ul").find("li").hover( function(){
    $(this).find("a").css( "color","#e50012");
},function(){
    $(this).find("a").css( "color","#666666" );
} )
//顶部结束
//搜索部分开始
$(".header2-car").hover( function(){
    $(".header2-car-down").show();
},function(){
    $(".header2-car-down").hide();
} )

$(".tex1").hover( function(){
    $(".tex1 dl").find("dd").show();
},function(){
    $(".tex1 dl").find("dd").hide();
} )

$(".tex1 dl dd").find("a").click(function(){
    // console.log( $(this).html() );
    $(".tex1 dl dt span").html( $(this).html() )
})
//搜索部分结束
//导航效果开始
$(".long-nav1-ul .long-nav1-li").hover( function(){
    // var index = $(this).index();
    $(this).find(".long-nav1-li03").show().find(".long-nav1-li03").siblings().hide();
    $(this).css( "background","#ffffff" );
},function(){
    $(".long-nav1-li03").hide();
    $(this).css( "background","" );
} )

$(".long-li03-div2 span").hover( function(){
    $(this).css( "color","#cc0000" );
},function(){
    $(this).css( "color","#666666" );
} )

$(".header3-navli").not(".long-nav").hover( function(){
    $(this).find("a").css( "color","#cc0000" );
},function(){
    $(this).find("a").css( "color","" );
} )

$(".long-nav").hover( function(){
    $(".long-nav1").stop().show(300);
},function(){
    $(".long-nav1").stop().hide(300);
} )
//导航效果结束