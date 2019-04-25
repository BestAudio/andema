
$(function(){
	let Imgs;
	$("#rowsLeftLeftUl").on("mouseenter","li",function(){
		$(this).children().css({"border":"1px solid black"});
		$(this).siblings().children().css({"border":"1px solid #fff"});
		Imgs=$(this).children("img").attr("src");
		$("#showBox").children("img").attr({src:Imgs});
	});

	$(".rowsLeftRight").mousemove(function(e){
		//一、数据处理
		//1、改变数据（放大镜子的left和top）		
		let left1 =  e.pageX-$(this).offset().left-$(".mirrorBox").width()/2;
		let top1 =  e.pageY-$(this).offset().top-$(".mirrorBox").height()/2;
		
		//2.边界处理
		if(left1<0){
			left1=0;
		}else if(left1>$(this).width()-$(".mirrorBox").width()){
			left1=$(this).width()-$(".mirrorBox").width();
		}

		if(top1<0){
			top1=0;
		}else if(top1>$(this).height()-$(".mirrorBox").height()){
			top1=$(this).height()-$(".mirrorBox").height();
		}

		//二外观呈现
		$(".mirrorBox").css({"left":left1,"top":top1});
		$(".box3").css({"background-position":`${-1*2*left1}px ${-1*2*top1}px`})
	
	})

	$(".rowsLeftRight").mouseenter(function(){
		$(".mirrorBox").css("display","block");
		$(".box3").css("display","block");
		if(Imgs==undefined){
			Imgs="img/v1.jpg"
		}
		$(".box3").css({"background-image":`url(${Imgs})`,zIndex:2});

	})
	$(".rowsLeftRight").mouseleave(function(){
		$(".mirrorBox").css("display","none");
		$(".box3").css("display","none");
	})
	let url = location.href;
    let num = parseInt(url.indexOf("="))+1
    let goodsid = url.substring(num)
    $.get("php/getGoodsInfo.php",{"goodsId":goodsid},(data)=>{
		
		let lis = $(".rowsLefeLeftLi").children();
		for(let i=0;i<lis.length;i++){
			$(".rowsLefeLeftLi").children()[i].src=data.goodsImg
		}
		$(".rowsRightH1").children().html(data.goodsName)
		$(".rowsRightSpan").children().html("￥"+data.goodsPrice+".00")
	},"json")

	let vipName = getCookie("userId");
	console.log(vipName)
	let goodsCount = $(".calculateNumIpt").val()
	console.log(goodsCount)
	$("#btnReg").on("click",function(){
		$.get("php/addShoppingCart.php",{"vipName":vipName,"goodsId":goodsid,"goodsCount":goodsCount},(data)=>{
			if(data == 1){
			
			}else{
			
			}
		});
	})
})

