$(document).ready(function(){       
   var scroll_start = 0;
   var leftPic = $('.leftPic');
   var offset = leftPic.offset();
    if (leftPic.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', 'rgba(255,255,255,.8)');
          $(".navbar").addClass('scrolled');
          
       } else {
          $('.navbar').css('background-color', 'transparent');
          $(".navbar").removeClass('scrolled');
       }
   });
    }
});