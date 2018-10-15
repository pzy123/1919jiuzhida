window.onload = function(){
    $.ajax({
        type:"get",
        url:"../homepage.json?id="+new Date().getTime(),
        async:true,
        success : function(json){
            var cons = "";
            // console.log(json);
                var pro = json[0];
                cons += `
                <li>
                    <div class="kill-down-li-div1">
                        <div class="kill-down-li-div3">
                            <a href="###">
                                <img src="images/xianshimiaosha (1).jpg" alt="">
                            </a>
                        </div>
                        <div class="kill-down-li-div4">
                            <span>53度1500ml天存壹号坛·红坛（献礼版）</span>
                        </div>
                    </div>
                    <div class="kill-down-li-div2">
                        <div class="kill-down-li-div5">
                            <div class="kill-down-li-div7">
                                <span>￥218.00</span>
                                <span>￥388.00</span>
                            </div>
                        </div>
                        <div class="kill-down-li-div6">
                            <a href="###">
                                <span>立即抢购</span>
                            </a>
                        </div>
                    </div>
                </li>
    `;
        
        $(".kill-down-leftall ul").html( cons );
        }
    })
}
