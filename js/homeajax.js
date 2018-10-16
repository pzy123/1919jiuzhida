//白酒专区点击请求ajax
$(".jiangxiang").click( function(){
    $.ajax({
        type:"get",
        async:true,
        url:"./homepage.json?id="+new Date().getTime(),
        success : function(res){
            // console.log(res);
            
           for( var i = 0 ; i < res.length ; i++ ){
                var pro = res[i];
            //    console.log(pro);
                var pro1 = pro.classify;
                // var pro2 = pro1[list1];
                var pro2=pro.list1;
                if( pro1 == "jiangxiang" ){
                    // console.log(pro2);
                    var cons = ""
                    for( var j = 0 ; j < pro2.length ; j++  ){
                        var pro3 = pro2[j]
                        // console.log(pro3) 
                        cons += `
                         <li>
                             <div class="whitecenter3-imgdiv">
                                 <a href="###">
                                     <img src="${pro3.src1}" alt="">
                                 </a>
                             </div>
                             <div class="whitecenter3-spandiv">
                                 <p><a href="###"><span>${pro3.span1}</span></a></p>
                                 <p><span>${pro3.money1}</span></p>
                                 <p><span>${pro3.money2}</span></p>
                             </div>
                         </li>
                        `;    
                }
                    $(".whitecenter3box ul").html( cons );
            } 
            }   
        }
    })
} )

$(".nongxiang").click( function(){
    $.ajax({
        type:"get",
        async:true,
        url:"./homepage.json?id="+new Date().getTime(),
        success : function(res){
            // console.log(res);
            
           for( var i = 0 ; i < res.length ; i++ ){
                var pro = res[i];
            //    console.log(pro);
                var pro1 = pro.classify;
                // var pro2 = pro1[list1];
                var pro2=pro.list1;
                if( pro1 == "nongxiang" ){
                    // console.log(pro2);
                    var cons = ""
                    for( var j = 0 ; j < pro2.length ; j++  ){
                        var pro3 = pro2[j]
                        // console.log(pro3) 
                        cons += `
                         <li>
                             <div class="whitecenter3-imgdiv">
                                 <a href="###">
                                     <img src="${pro3.src1}" alt="">
                                 </a>
                             </div>
                             <div class="whitecenter3-spandiv">
                                 <p><a href="###"><span>${pro3.span1}</span></a></p>
                                 <p><span>${pro3.money1}</span></p>
                                 <p><span>${pro3.money2}</span></p>
                             </div>
                         </li>
                        `;    
                }
                    $(".whitecenter3box ul").html( cons );
            } 
            }   
        }
    })
} )

$(".qingxiang").click( function(){
    $.ajax({
        type:"get",
        async:true,
        url:"./homepage.json?id="+new Date().getTime(),
        success : function(res){
            // console.log(res);
            
           for( var i = 0 ; i < res.length ; i++ ){
                var pro = res[i];
            //    console.log(pro);
                var pro1 = pro.classify;
                // var pro2 = pro1[list1];
                var pro2=pro.list1;
                if( pro1 == "qingxiang" ){
                    // console.log(pro2);
                    var cons = ""
                    for( var j = 0 ; j < pro2.length ; j++  ){
                        var pro3 = pro2[j]
                        // console.log(pro3) 
                        cons += `
                         <li>
                             <div class="whitecenter3-imgdiv">
                                 <a href="###">
                                     <img src="${pro3.src1}" alt="">
                                 </a>
                             </div>
                             <div class="whitecenter3-spandiv">
                                 <p><a href="###"><span>${pro3.span1}</span></a></p>
                                 <p><span>${pro3.money1}</span></p>
                                 <p><span>${pro3.money2}</span></p>
                             </div>
                         </li>
                        `;    
                }
                    $(".whitecenter3box ul").html( cons );
            } 
            }   
        }
    })
} )
//葡萄酒请求ajax
$(".faguo").click( function(){
    $.ajax({
        type:"get",
        async:true,
        url:"./homepage.json?id="+new Date().getTime(),
        success : function(res){
            // console.log(res);
            
           for( var i = 0 ; i < res.length ; i++ ){
                var pro = res[i];
            //    console.log(pro);
                var pro1 = pro.classify;
                // var pro2 = pro1[list1];
                var pro2=pro.list1;
                if( pro1 == "faguo" ){
                    // console.log(pro2);
                    var cons = ""
                    for( var j = 0 ; j < pro2.length ; j++  ){
                        var pro3 = pro2[j]
                        // console.log(pro3) 
                        cons += `
                         <li>
                             <div class="whitecenter3-imgdiv">
                                 <a href="###">
                                     <img src="${pro3.src1}" alt="">
                                 </a>
                             </div>
                             <div class="whitecenter3-spandiv">
                                 <p><a href="###"><span>${pro3.span1}</span></a></p>
                                 <p><span>${pro3.money1}</span></p>
                                 <p><span>${pro3.money2}</span></p>
                             </div>
                         </li>
                        `;    
                }
                    $(".putaojiu3box ul").html( cons );
            } 
            }   
        }
    })
} )

$(".aodaliya").click( function(){
    $.ajax({
        type:"get",
        async:true,
        url:"./homepage.json?id="+new Date().getTime(),
        success : function(res){
            // console.log(res);
            
           for( var i = 0 ; i < res.length ; i++ ){
                var pro = res[i];
            //    console.log(pro);
                var pro1 = pro.classify;
                // var pro2 = pro1[list1];
                var pro2=pro.list1;
                if( pro1 == "aodaliya" ){
                    // console.log(pro2);
                    var cons = ""
                    for( var j = 0 ; j < pro2.length ; j++  ){
                        var pro3 = pro2[j]
                        // console.log(pro3) 
                        cons += `
                         <li>
                             <div class="whitecenter3-imgdiv">
                                 <a href="###">
                                     <img src="${pro3.src1}" alt="">
                                 </a>
                             </div>
                             <div class="whitecenter3-spandiv">
                                 <p><a href="###"><span>${pro3.span1}</span></a></p>
                                 <p><span>${pro3.money1}</span></p>
                                 <p><span>${pro3.money2}</span></p>
                             </div>
                         </li>
                        `;    
                }
                    $(".putaojiu3box ul").html( cons );
            } 
            }   
        }
    })
} )

$(".zhili").click( function(){
    $.ajax({
        type:"get",
        async:true,
        url:"./homepage.json?id="+new Date().getTime(),
        success : function(res){
            // console.log(res);
            
           for( var i = 0 ; i < res.length ; i++ ){
                var pro = res[i];
            //    console.log(pro);
                var pro1 = pro.classify;
                // var pro2 = pro1[list1];
                var pro2=pro.list1;
                if( pro1 == "zhili" ){
                    // console.log(pro2);
                    var cons = ""
                    for( var j = 0 ; j < pro2.length ; j++  ){
                        var pro3 = pro2[j]
                        // console.log(pro3) 
                        cons += `
                         <li>
                             <div class="whitecenter3-imgdiv">
                                 <a href="###">
                                     <img src="${pro3.src1}" alt="">
                                 </a>
                             </div>
                             <div class="whitecenter3-spandiv">
                                 <p><a href="###"><span>${pro3.span1}</span></a></p>
                                 <p><span>${pro3.money1}</span></p>
                                 <p><span>${pro3.money2}</span></p>
                             </div>
                         </li>
                        `;    
                }
                    $(".putaojiu3box ul").html( cons );
            } 
            }   
        }
    })
} )
