window.onload = function(){
   
  
    my$("#mailBox").onblur = function(){
      let mail =  /^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/;
      if(!mail.test(my$("#mailBox").value)){
        my$(".userspan")[0].innerHTML = "邮箱格式不正确,请重新输入!";
        my$(".userspan")[0].style.display = "block";
      }else{
        my$(".userspan")[0].style.display = "none";
      }
      ajax1811ByObjAndDefault(
          {
            "url":"php/checkUserId.php",
            "param":"mailBox="+this.value,
            "func":showData
          }
        );    
      }


    function showData(num){
        if(num=="1"){
          my$("#userspan1").innerHTML = "用户已经被注册!";
          my$("#userspan1").style.display = "block";
        }else{
          my$("#userspan1").style.display = "none";
        }
      }
  
    my$("#userPass").onblur = function(){
      let pass1 = /^[a-z0-9_-]{8,20}$/;
      if(!pass1.test(my$("#userPass").value)){
        my$(".userspan")[1].innerHTML = "8-16个字符，必须包含英文.数字.字符中的两种!";
        my$(".userspan")[1].style.display = "block";
      }else {
        my$(".userspan")[1].style.display = "none";
      }
    }
  
    my$("#pass").onblur =function(){
      if(my$("#userPass").value != my$("#pass").value){
        my$(".userspan")[2].innerHTML = "两次密码不一致!";
        my$(".userspan")[2].style.display = "block";
      }else{
        my$(".userspan")[2].style.display = "none";
      }
    }

    my$("#userPhone").onblur = function(){
      let phone =  /^1[1-9]\d{9}$/;
      if(!phone.test(my$("#userPhone").value)){
        my$(".userspan")[3].innerHTML = "手机号码格式不正确,请重新输入!";
        my$(".userspan")[3].style.display = "block";
      }else {
        my$(".userspan")[3].style.display = "none";
      }
    }
  
  
    my$("#btnReg").onclick = function(){
      if(my$("#mailBox").value == ""){
        my$(".userspan")[0].innerHTML = "用户不能为空!";
        my$(".userspan")[0].style.display = "block";
        // return;
      }else{
        my$(".userspan")[0].style.display = "none";
      }
      if(my$("#userPass").value == ""){
        my$(".userspan")[1].innerHTML = "密码不能为空!";
        my$(".userspan")[1].style.display = "block";
        return;
      }else{
        my$(".userspan")[1].style.display = "none";
      }
      ajax1811ByObjAndDefault(
        {
          "url":"php/regSave02.php",
          "method":"post",
          "param":`mailBox=${my$("#mailBox").value}&userPass=${my$("#userPass").value}&userPhone=${my$("#userPhone").value}`,
          "func":function(num){
            if(num == "1"){
              alert("注册成功！");
              location.href = "login.html";
            }else{
              alert("注册失败！");
            }   
          }
        }
      );    
    }
  } 

  my$("#shangGou").onclick = function(){
    my$(".leftBottomShangGou").style.display="block";
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
  