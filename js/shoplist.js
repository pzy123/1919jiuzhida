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

window.onload = function(){
    $.ajax({
        type:"get",
        async:true,
        url:"../html/shoplist.json?id="+new Date().getTime(),
        success : function(res){
            // console.log(res);  
           for( var i = 0 ; i < res.length ; i++ ){
                var pro = res[i];
            //    console.log(pro);
                var pro1 = pro.classify;
                // var pro2 = pro1[list1];
                var pro2=pro.list;
                // console.log(pro2);
                if( pro1 == "cainixihuan" ){
                    // console.log(pro2);
                    var cons = ""
                    for( var j = 0 ; j < pro2.length ; j++  ){
                        var pro3 = pro2[j]
                        // console.log(pro3) 
                        cons += `
                                <li>
                                    <div class="list-left-li-div1">
                                        <a href="###">
                                            <img src="${pro3.src1}" alt="">
                                        </a>
                                    </div>
                                    <div class="list-left-li-div2">
                                        <p class="left-p1">
                                            <a href="###">${pro3.shop1}</a>
                                        </p>
                                        <p class="left-p2">
                                            <a href="###">
                                                <span>${pro3.shop2}</span>
                                            </a>
                                        </p>
                                        <p class="left-p3">
                                            <span class="left-span1">${pro3.money1}</span>
                                            <span class="left-span2">${pro3.money}</span>
                                        </p>
                                    </div>
                                </li>
                        `;    
                }
                    $(".shop-left-box ul").html( cons );
            } 
            }   
         }
    })
    //分页
    var index = 1;//设置默认的页数
    var pagenum = 12;//每页的数据量
    function showdate(){
    $.ajax({
        type:"get",
        async:true,
        url:"../html/shoplist.json?id="+new Date().getTime(),
        success : function(res){
           for( var i = 0 ; i < res.length ; i++ ){
                var pro = res[i];
                var pro1 = pro.classify;
                var pro2=pro.list;
                console.log(pro2);
                if( pro1 == "shangpinliebiao" ){
                    var cons = ""
                    for( var j = (index-1)*pagenum ; j < index*pagenum ; j++  ){
                        var pro3 = pro2[j]
                        if( j < pro2.length ){
                            cons += `
                                    <li>
                                        <div class="shop-list-div1">
                                            <a href="###">
                                                <img src="${pro3.src1}" alt="">
                                            </a>
                                        </div>
                                        <div class="shop-list-div2">
                                            <p class="shop-list-p1">
                                                <span class="list-span1">${pro3.money1}</span>
                                                <span class="list-span2">${pro3.money}</span>
                                            </p>
                                            <p class="shop-list-p2">
                                                <a href="###">${pro3.shop1}</a>
                                            </p>
                                            <p class="shop-list-p3">
                                                <span class="list-span3">自营</span>
                                                <span class="list-span4">快喝</span>
                                            </p>
                                        </div>
                                    </li>
                            `;    
                        } 
                }
                    $(".shop-list-ul").html( cons );
            } 

            //获取总页数
			var total = Math.ceil(pro2.length/pagenum);
			var page = "";
			//设置页数
			for( var z = 1 ; z <= total ; z++ ){
				page += `<li class="right-down-ul2">
                            <a href="###">${z}</a>
                        </li>`;
			}
			$(".right-down-ul").html( page );
            }   
         }
    })
    }
    showdate();

    $(".right-down-ul").on( "click","LI",function(e){
    var e =  e||event;
    var target = e.target || e.srcElement;
        index = target.innerHTML;
        showdate();
}) 
} 