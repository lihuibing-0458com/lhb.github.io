 /*Initialize Swiper */
 var swiper = new Swiper('.swiper-container', {
      on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    },
     navigation: {
      nextEl: '.swiper-button-next'
      /*prevEl: '.swiper-button-prev',*/
    },
      loop: true,
     direction: 'vertical'
     , pagination: {
         el: '.swiper-pagination'
         , clickable: true
     , }
 , });
/*音乐开始*/
var music = document.getElementById("music");
var tupian = document.querySelectorAll(".tupian")[0];
var beijing = document.querySelectorAll(".beijing")[0];
var audio = document.querySelector("audio");
var flag = 1;
music.onclick = function () {
        /*alert("asdf")*/
        if (flag == 1) {
            tupian.style.animation = "none";
            beijing.style.display = "none";
            audio.pause();
            flag = 0;
        }
        else {
            tupian.style.animation = "div1 0.5s 0.5s linear infinite";
            beijing.style.display = "block";
            audio.play();
            flag = 1;
        }
    }
    /*音乐结束*/