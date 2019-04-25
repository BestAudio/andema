$(function(){
    //用get获取数据
  
    $.get("php/getGoodsList.php",showDate,"json")

    //回调函数
    function showDate(obj){
		let htmlStr = "";
		for(let i=0;i<obj.length;i++){
			data = obj[i];
			// console.log(data);
            htmlStr +=`
            <div class="articleTwoPhoto">
            <div class="imgBox">
                <a href="luope.html?goodsId=${data.goodsId}">
                    <img class="img1" src="${data.goodsImg}" />
                    <img class="img2"  src="${data.beiyong1}"/>
                </a>
                <p class="imgBox1P">快速预览</p>
            </div>
            <div class="charBox">
                <a href="#">${data.goodsName}</a>
                <p>￥  ${data.goodsPrice}</p>
            </div>
        </div>
            `
        }
		$(".articleTwo").html(htmlStr);
	}
})






// $(function(){
// 	function getUrlParam(name) {
// 		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
// 		var r = window.location.search.substr(1).match(reg); //匹配目标参数
	 
// 		if (r != null) return unescape(r[2]);
// 		return null; //返回参数值
// }
// 	let goodsid = getUrlParam("goodsId");
// 	let datas = null;
// 	$.ajax({
// 		type:"GET",
// 		url:"php/getGoodsInfo.php",
// 		dataType:"JSON",
// 			data:{"goodsId":goodsid},
// 			success:function(data){
// 				datas = data;
// 				showgoodsDetail(data);
// 				fdj();
// 			}
// 		});

// 		function showgoodsDetail(str){
// 			let htmlStr = "";
// 			htmlStr +=`
// 			<div class="articleTwoPhoto">
//             <div class="imgBox">
//                 <a href="luope.html?goodsId=${data.goodsId}">
//                     <img class="img1" src="${data.goodsImg}" />
//                     <img class="img2"  src="${data.beiyong1}"/>
//                 </a>
//                 <p class="imgBox1P">快速预览</p>
//             </div>
//             <div class="charBox">
//                 <a href="#">${data.goodsName}</a>
//                 <p>￥  ${data.goodsPrice}</p>
//             </div>
//         </div>
// 			`
// 			$(".articleTwo").html(htmlStr);
// 		}	
//     })

// 	function fdj(){
// 			let Imgs;
// 			$("#rowsLeftLeftUl").on("mouseenter","li",function(){
// 				$(this).children().css({"border":"1px solid black"});
// 				$(this).siblings().children().css({"border":"1px solid #fff"});
// 				Imgs=$(this).children("img").attr("src");
// 				$("#showBox").children("img").attr({src:Imgs});
// 			});
		
// 			$(".rowsLeftRight").mousemove(function(e){
// 				//一、数据处理
// 				//1、改变数据（放大镜子的left和top）		
// 				let left1 =  e.pageX-$(this).offset().left-$(".mirrorBox").width()/2;
// 				let top1 =  e.pageY-$(this).offset().top-$(".mirrorBox").height()/2;
				
// 				//2.边界处理
// 				if(left1<0){
// 					left1=0;
// 				}else if(left1>$(this).width()-$(".mirrorBox").width()){
// 					left1=$(this).width()-$(".mirrorBox").width();
// 				}
		
// 				if(top1<0){
// 					top1=0;
// 				}else if(top1>$(this).height()-$(".mirrorBox").height()){
// 					top1=$(this).height()-$(".mirrorBox").height();
// 				}
		
// 				//二外观呈现
// 				$(".mirrorBox").css({"left":left1,"top":top1});
// 				$(".box3").css({"background-position":`${-1*2*left1}px ${-1*2*top1}px`})
			
// 			})
		
// 			$(".rowsLeftRight").mouseenter(function(){
// 				$(".mirrorBox").css("display","block");
// 				$(".box3").css("display","block");
// 				if(Imgs==undefined){
// 					Imgs="img/v1.jpg"
// 				}
// 				$(".box3").css({"background-image":`url(${Imgs})`,zIndex:2});
		
// 			})
// 			$(".rowsLeftRight").mouseleave(function(){
// 				$(".mirrorBox").css("display","none");
// 				$(".box3").css("display","none");
// 			})
// 		}
