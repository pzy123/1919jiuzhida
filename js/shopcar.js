    window.onload = function(){
        //取出cookie数据
        var arr = getCookie("money05");
        var str = "";
		// console.log( arr );
		
		for( var i = 0 ; i < arr.length ; i++ ){
            var shopinfo = arr[i];
            var res = shopinfo.price;
            var num = res.replace(/[^0-9.]/ig,"");
			str += '<div class="shop-item clearfix">'+
					'<p class="fl"><input type="checkbox" class="ck"/></p>'+
					'<img class="fl" src="'+ shopinfo.src +'" alt="" />'+
					'<p class="fl">'+ shopinfo.name +'</p>'+
					'<span class="fl">'+ shopinfo.price +'元</span>'+
					'<p class="fl count" '+
						'data-id="'+ shopinfo.id +'" '+
						'data-price="'+ shopinfo.price +'" data-count="'+ shopinfo.count +'"'+
						'data-name="'+ shopinfo.name +'" data-src="'+ shopinfo.src +'"'+
						'>'+
						'<span class="updateCount" data-number="1">+</span>'+
						'<span class="shop-count">'+ shopinfo.count +'</span>'+
						'<span class="updateCount" data-number="-1">-</span>'+
					'</p>'+
					'<em class="fl sumPrice">'+ (shopinfo.count * num) +'元</em>'+
					'<i class="fl delBtn">删除</i>'+
				'</div>'
				console.log(num);
		}
        $(".shoplist").html( str );
 

        //结算
		function jiesuan(){
			var count = 0;
			var money = 0;
			$(".ck:checked").each( function(){
				count += parseInt( $(this).parent().parent().find(".shop-count").html() );
				money += parseInt( $(this).parent().parent().find(".sumPrice").html() );
			} )
			$(".count2").html(count);
			$(".money2").html(money);
		}
		//复选框单击事件  
		$(".ck").click(function(){
			jiesuan();
        })
        
        //加减操作
		$(".updateCount").click(function(){
			//确定要修改的商品编号
			//在arr中查找确定要修改的商品
            var  pid = $(this).parent().data("id");
            var sign = parseInt( $(this).data("number") )  ;//获取操作符号 +  -
            // alert(sign);
			var count = $(this).parent().find(".shop-count").html();
			if( sign == -1 && count == 1){
				return ;
			}
			for( var i = 0 ; i <arr.length ; i++ ){
				if( pid == arr[i].id ){
					arr[i].count += sign;
					setCookie( "money05",JSON.stringify( arr ) );
					$(this).parent().find(".shop-count").html( arr[i].count );
					//改变商品价格
					var num2 = arr[i].count*num;
					num2 = num2.toFixed(2);
					// console.log (num2);
					$(this).parent().next().html( num2 + "元" );
					jiesuan();
					break;
				}
			}
        })
        
        $(".delBtn").click(function(){
			// 获取当前要删除的商品编号
			//根据这个编号去arr中查找要删除的商品
			//找到后先将arr中的这个商品删掉
			//最后在将arr重新存入到cookie中
			var  pid = $(this).parent().find(".count").data("id");
			for(var i = 0 ; i < arr.length ; i++){
				if( pid == arr[i].id ){
					arr.splice(i,1);
					setCookie("money05",JSON.stringify(arr));
					$(this).parent().remove();
					break;
				}
			}
			
		})
    }

    
    