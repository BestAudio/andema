$(function(){
	marquee();
})


function marquee(){
    var scrollWidth = $('.topNavLeft').width();
    var textWidth = $('.topNavLeftSpan').width();
    var i = $('.topNavLeftSpan').offset().left;

    var mytimer = setInterval(function(){
        i--
        if(i <-150 ){
         	 i=900;
        }
        $('.topNavLeftSpan').css({"left":i});
    },20);

		$('.topNavLeftSpan').mouseover(function(){
		 clearInterval(mytimer); });
		$('.topNavLeftSpan').mouseout(function() {marquee(mytimer); });     
}


$(window).scroll(function(){
    var scroll=document.body.scrollTop || document.documentElement.scrollTop;
    if(scroll>=34){
        $(".headers").css("margin","0 auto");
      $(".header").css({"width":"1520px","top":"0","position":"fixed","z-index":"10","background":"#fff","height":"60px"});   
      $(".headerRight").css("margin-left","98px");
      $(".headerLeftMenu01").css("top","61px");
      $(".headerLeftMenu02").css("top","61px");
      $(".headerLeftMenu03").css("top","61px");
      $(".headerLeftMenu04").css("top","61px");
      $(".headerLeftMenu05").css("top","61px");
      $(".headerLeftMenu06").css("top","61px");
    }else{
      $(".header").css({"top":"34px","z-index":"10","margin":"0 auto"});
      $(".headerLeftMenu01").css("top","95px");  
      $(".headerLeftMenu02").css("top","95px");
      $(".headerLeftMenu03").css("top","95px");  
      $(".headerLeftMenu04").css("top","95px");
      $(".headerLeftMenu05").css("top","95px");
      $(".headerLeftMenu06").css("top","95px");
      $(".login").css("margin-top","80px");
      $(".container").css("margin-top","120px");
      $(".artice").css("margin-top","150px");
      $(".shoppingCar").css("margin-top","50px");
      $(".brand").css("margin-top","60px");
    }
  });
  
  $(".text").mouseover(function(){
      $(".text").css({"width":"140px","height":"34px"})
  });
  $(".text").mouseout(function(){
    $(".text").css({"width":"81px","height":"34px"})
  });
  $(".hover1").mouseover(function(){
      $(".headerLeftMenu01").show();
  });
  $(".headerLeftMenu01").mouseover(function(){
      $(".headerLeftMenu01").show();
  });
  
  $(".hover1").mouseout(function(){
      $(".headerLeftMenu01").hide();
   });
  $(".headerLeftMenu01").mouseout(function(){
      $(".headerLeftMenu01").hide();
   });
  
  $(".hover2").mouseover(function(){
      $(".headerLeftMenu02").show();
  });
  $(".headerLeftMenu02").mouseover(function(){
      $(".headerLeftMenu02").show();
  });
  $(".hover2").mouseout(function(){
      $(".headerLeftMenu02").hide();
   });
  $(".headerLeftMenu02").mouseout(function(){
      $(".headerLeftMenu02").hide();
   });
  
  $(".hover3").mouseover(function(){
      $(".headerLeftMenu03").show();
  });
  $(".headerLeftMenu03").mouseover(function(){
      $(".headerLeftMenu03").show();
  });
  
  $(".hover3").mouseout(function(){
      $(".headerLeftMenu03").hide();
   });
  $(".headerLeftMenu03").mouseout(function(){
      $(".headerLeftMenu03").hide();
   });
  
  $(".hover4").mouseover(function(){
      $(".headerLeftMenu04").show();
  });
  $(".headerLeftMenu04").mouseover(function(){
      $(".headerLeftMenu04").show();
  });
  $(".hover4").mouseout(function(){
      $(".headerLeftMenu04").hide();
   });
  $(".headerLeftMenu04").mouseout(function(){
      $(".headerLeftMenu04").hide();
   });
  $(".hover5").mouseover(function(){
      $(".headerLeftMenu05").show();
  });
  $(".headerLeftMenu05").mouseover(function(){
      $(".headerLeftMenu05").show();
  });
  $(".hover5").mouseout(function(){
      $(".headerLeftMenu05").hide();
   });
  $(".headerLeftMenu05").mouseout(function(){
      $(".headerLeftMenu05").hide();
   });
  $(".hover6").mouseover(function(){
      $(".headerLeftMenu06").show();
  });
  $(".headerLeftMenu06").mouseover(function(){
      $(".headerLeftMenu06").show();
  });
  $(".hover6").mouseout(function(){
      $(".headerLeftMenu06").hide();
   });
  $(".headerLeftMenu06").mouseout(function(){
      $(".headerLeftMenu06").hide();
   });