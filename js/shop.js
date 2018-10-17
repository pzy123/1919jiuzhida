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
//放大镜开始
//鼠标移入到底部小图时，显示对应的中图和大图
$(".money-left-warp").on( "mouseenter","li",function(){
        // var index = $(this).index();
        // $(".smallimg img").eq(index).show().siblings("img").hide();
        $(this).addClass("active").siblings().removeClass("active");
        // $(".bigimg img").show().siblings().hide();
} )
//鼠标移入到底部小图时，显示对应的中图和大图
$("#bottom li").mouseover(function(){
    var index = $(this).index();
    $("#small img").eq(index).show().siblings("img").hide();
    $("#big img").eq(index).show().siblings().hide();
})
//鼠标移入移出small盒子  显示或隐藏大图显示区big  和 mask
$(".smallimg").on({
    "mouseover":function(){
        $(".bigimg").show();
        $(".mark").show();
    },
    "mouseout":function(){
        $(".mark").hide();
        $(".bigimg").hide();
    },
    "mousemove":function(evt){
        var e = evt || event;
        var x = e.pageX - $(".smallimg").offset().left - $(".mark").width()/2;
        var y = e.pageY - $(".smallimg").offset().top - $(".mark").height()/2;
        // console.log(x);
        // console.log(y);
        var mx = $(".smallimg").width()  - $(".mark").width();
        var my = $(".smallimg").height()  - $(".mark").height();
        
        //边界处理
        x = x<=0 ? 0 : x>=mx ? mx : x;
        y = y<=0 ? 0 : y>=my ? my : y;
        
        //大图宽度/小图宽度 = 大图偏移 / mask的偏移
        var bigImageX = -x * $(".bigimg img").width() / $(".smallimg").width();
        var bigImageY = -y * $(".bigimg img").height() / $(".smallimg").height();
        $(".mark").css({
            "left":x + "px",
            "top":y+"px"
        })
        
        $(".bigimg img").css({
            "left" : bigImageX+"px",
            "top" : bigImageY+"px"
        })
    }
})
//放大镜结束
window.onload = function(){
    var str = location.href;
    // console.log(str);
    // http://127.0.0.1/1919jiuzhida/html/shop.html?pid=002
    // 拆分字符串 获取pid值
    var arr = str.split("?");
    var pid =  arr[1].split("=")[1];;
    // console.log(pid);
    $.ajax({
        type:"get",
        url:"../html/shoplist.json?id="+new Date().getTime(),
        async:true,
        success : function(res){
            for( var i = 0 ; i < res.length ; i++ ){
                 var pro = res[i];
                 var pro1 = pro.classify;
                 var pro2=pro.list;
                 // console.log(pro2);
                 if( pro1 == "shangpinliebiao" ){
                     var cons1 = "";
                     var cons2 = "";
                     var cons3 = "";
                     var cons4 = "";
                     var cons5 = "";
                     var con6 = "";
                     for( var j = 0 ; j < pro2.length ; j++  ){
                         var pro3 = pro2[j]
                        //  console.log(pro3.id);
                         if( pro3.id == pid ){
                             cons1 += `
                                    <h1>${pro3.shop1}</h1>
                             `; 
                             cons2 += `
                                    <div class="money01">
                                        <span>市场价</span>
                                        <span>${pro3.money}</span>
                                    </div>
                                    <div class="money02">
                                        <span>1919售价</span>
                                        <span>${pro3.money1}</span>
                                        <b>超值优惠</b>
                                    </div>
                             `;
                             cons3 += `
                                        <img src="${pro3.src1}" alt="">
                                        <div class="mark"></div> 
                             `;
                             cons4 += `
                                            <li class="active">
                                                <img src="${pro3.src1}" alt="">
                                            </li>
                                            <li>
                                                <img src="${pro3.src1}" alt="">
                                            </li> 
                             `;   
                             cons5 += `
                                        <img src="${pro3.src1}" alt=""> 
                             `;   
                             con6 += `
                                        <div class="shop-div-size">
                                            <div class="shop-div-size1"><span>编码： 1000086</span></div>
                                            <div class="shop-div-size1"><span>名称： 53度茅台十五年陈500ml</span></div>
                                            <div class="shop-div-size1"><span>分类： 白酒</span></div>
                                            <div class="shop-div-size1"><span>品牌： 茅台</span></div>
                                            <div class="shop-div-size1"><span>香型： 酱香型</span></div>
                                            <div class="shop-div-size1"><span>酒精度： 50-59度</span></div>
                                            <div class="shop-div-size1"><span>产地： 贵州</span></div>
                                            <div class="shop-div-size1"><span>净含量： 376-500ml</span></div>
                                            <div class="shop-div-size1"><span>适用场景： 商务宴请</span></div>
                                        </div>
                                        <div class="shop-div-img"><img src="${pro3.src1}" alt=""></div>
                                        <div class="shop-div-img"><img src="../shopimages/shop (9).png" alt=""></div>
                                        <div class="shop-div-img"><img src="../shopimages/shop (2).png" alt=""></div>
                                        <div class="shop-div-img"><img src="../shopimages/shop (10).png" alt=""></div>
                                        <div class="shop-div-img"><img src="../shopimages/shop (11).png" alt=""></div>
                                        <div class="shop-div-img"><img src="../shopimages/shop (12).png" alt=""></div>
                             `   
                         } 
                 }
                     $(".money-right01").html( cons1 );
                     $(".money-right02").html(cons2);
                     $(".smallimg").html(cons3);  
                     $(".smallul2 ul").html(cons4); 
                     $(".bigimg").html(cons5); 
                     $(".shop-right-top2").html(con6);
             } 
             }   
          }
    })
}