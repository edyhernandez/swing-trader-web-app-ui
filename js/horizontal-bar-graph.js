$(function () {
   // this controls the animation of the winner horizontal bar
   for (var i = 0; i < $(".horz-bars .data li").length; ++i) {
       $(".horz-bars .bar-winner:eq(" + i + ")").animate({
           width: $(".horz-bars .winner-value:eq(" + i + ")").html()
       }, 500);
     // console.log( $(".horz-bars .bar-winner").width());
   }
   // this controls the animation of the loser horizontal bar
   for (var i = 0; i < $(".horz-bars .data li").length; ++i) {
       $(".horz-bars .bar-loser:eq(" + i + ")").animate({
           width: $(".horz-bars .loser-value:eq(" + i + ")").html(),
       marginLeft: 0}, 500);
     // console.log( $(".horz-bars .bar-loser").width());  
   }
   setTimeout(explode, 600);
   function explode(){
       var max = 0;
       $(".horz-bars ul li .bar").each(function(){
       if($(this).width() >= max ){
           max  = $(this).width();
           console.log(max);
       }
   });

       $(".tradeText").css("margin-left", max);
   }
});