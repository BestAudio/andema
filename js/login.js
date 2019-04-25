window.onload = function(){

	my$("#mailBox").onblur = function(){
        let mail =  /^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/;
		if(!mail.test(my$("#mailBox").value)){
			my$(".userspan")[0].innerHTML = "请输入有效的用户名或密码!";
			my$(".userspan")[0].style.display = "block";
		}else{
			my$(".userspan")[0].style.display = "none";
		}		
	}
	
	my$("#userPass").onblur = function(){
		let pass1 = /^[a-z0-9_-]{8,20}$/;
		if(!pass1.test(my$("#userPass").value)){
			my$(".userspan")[1].innerHTML = "请输入有效的用户名或密码!";
			my$(".userspan")[1].style.display = "block";
		}else {
			my$(".userspan")[1].style.display = "none";
		}
	}

	my$("#loginBtn").onclick = function(){
		if(my$("#mailBox").value == ""){
			my$(".userspan")[0].innerHTML = "请输入有效的用户名或密码!";
			my$(".userspan")[0].style.display = "block";
			// return;
		}else{
			my$(".userspan")[0].style.display = "none";
		}
		if(my$("#userPass").value == ""){
			my$(".userspan")[1].innerHTML = "请输入有效的用户名或密码!";
			my$(".userspan")[1].style.display = "block";
			return;
		}else{
			my$(".userspan")[1].style.display = "none";
		}
		ajax1811ByObjAndDefault(
			{
				"url":"php/loginCheck.php",
				"method":"post",
				"param":`userId=${my$("#mailBox").value}&userPass=${my$("#userPass").value}`,
				"func":function(num){
					if(num == "1"){
						alert("登录成功！");
						addCookie("userId",my$("#mailBox").value,7);
						location.href="index.html";
						console.log(userId);
					}else{
						alert("登录失败！");
					}	
				}
			}
		);		
	}
	getUsername();
}	
function getUsername(){
	//1、
	var str = document.cookie;//username=jzm; userpass=123

	//2、

	//1)、
	var arr = str.split("; ");//["username=jzm","userpass=123"]

	var userId=null;
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf("userId=")==0){
			userId =arr[i].substring("userId=".length);
			break;
		}
	}

	if(userId!=null){
		my$("#register").innerHTML = userId;
	}else{
}
//添加cookie
//参数：
//键：
//值
//保质期（单位：天）
//path
//domain

function addCookie(key,value,dayCount,path,domain) {
	var d = new Date();
	d.setDate(d.getDate()+dayCount);

	var str = key+"="+escape(value)+";expires="+d.toGMTString();	

	if(path!=undefined){
		str += "path="+path;
	}

	if(domain!=undefined){
		str += "domain="+domain;
	}

	document.cookie = str;
	
}
	

function my$(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
