$(function(){
    let vipName = getCookie("userId");
    $.get("php/getShoppingCart.php",{"vipName":vipName},(data)=>{
        console.log(data)
        let htmlStr = `
        <div class="arctie2Shang02">
        <input class="arctie2ShangInp1" type="checkbox">
    </div>
    <div class="arctie2Xia01Img">
            <a href="#">
                <img src="${data[0].goodsImg}">
            </a>
    </div>
    <div class="arctie2Xia01">
         <div class="arctie2Xia01S">
            <a href="#">${data.goodsName}</a>
         </div>
         <div class="arctie2Xia01X">
            <p>颜色：</p>
            <span>学院蓝(400)</span>
            <span>42.5</span>
         </div>
    </div>
    <div class="unit01">
        <p>￥${data[0].goodsPrice}.00</p>
    </div>
    <div class="unit02">
        <span>${data[0].goodsCount}</span>
    </div>
    <div class="unit03">
        <p>￥${data[0].goodsPrice}.00</p>
    </div>
    <div class="unit04">
        <a class="unit0401" href="#">删除</a>
        <a class="unit0402" href="#">编辑</a>
    </div>

        `
        $("#boxDiv").append(htmlStr)
    },"json")

my$("#delete").onclick=function(){
    my$("#count").style.display='none';
    my$("#money").innerHTML=0.00;
    // my$("#count").style.height=50+"px";
}
})
function my$(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
