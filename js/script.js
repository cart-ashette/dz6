var isVisible = false;
var fly = false;
$(function() {

   $("#main-tags").addClass("scale-in");  

   $("i.fas.fa-bars").click(function(){

        if(isVisible == false){
            $(".main-menu").addClass("menu-short").fadeIn(300);
            $("i.fas.fa-bars").removeClass("fa-bars").addClass("fa-times");
            $('body').css({'position':'fixed', 'width':'100%'});
            $("#fade").fadeIn(300);
            isVisible = true;
        }else {

            $(".main-menu").removeClass("menu-short").fadeOut(300);
            $("i.fas.fa-times").removeClass("fa-times").addClass("fa-bars");
            $('body').css({'position':'static'});
            $("#fade").fadeOut(300);
            isVisible = false;
        }

   });



});