$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width >= 250 && width <= 400){
       $('.containment').addClass('mobilePadding');
       $('#hex-responsive3').addClass('hex-gap');
       $('#hex-responsive6').addClass('hex-gap');
       $('#hex-responsive9').addClass('hex-gap');
       $('#hex-responsive12').addClass('hex-gap');
       $('#hex-responsive7').removeClass('hex-gap');
       $('#hex-responsive11').removeClass('hex-gap');
   } else if(width >= 401 && width <= 479){
       $('#hex-responsive7').addClass('hex-gap');
       $('#hex-responsive11').addClass('hex-gap');
       $('#hex-responsive3').addClass('hex-gap');
       $('.containment').removeClass('mobilePadding');
       $('#hex-responsive6').removeClass('hex-gap');
       $('#hex-responsive9').removeClass('hex-gap');
       $('#hex-responsive12').removeClass('hex-gap');
       $('#hex-responsive4').removeClass('hex-gap');
       $('#hex-responsive14').removeClass('hex-gap');
   } else if(width >= 480 && width <= 560){
       $('#hex-responsive4').addClass('hex-gap');
       $('#hex-responsive9').addClass('hex-gap');
       $('#hex-responsive14').addClass('hex-gap');
       $('#hex-responsive3').removeClass('hex-gap');
       $('#hex-responsive7').removeClass('hex-gap');
       $('#hex-responsive11').removeClass('hex-gap');
       $('#hex-responsive10').removeClass('hex-gap');
   } else if(width >= 561 && width <= 639){
       $('#hex-responsive10').addClass('hex-gap');
       $('#hex-responsive4').addClass('hex-gap');
       $('#hex-responsive9').removeClass('hex-gap');
       $('#hex-responsive14').removeClass('hex-gap');
       $('#hex-responsive5').removeClass('hex-gap');
       $('#hex-responsive11').removeClass('hex-gap');
       $('#hex-responsive12').removeClass('hex-gap');
   } else if(width >= 640 && width <= 720){
       $('#hex-responsive5').addClass('hex-gap');
       $('#hex-responsive12').addClass('hex-gap');
       $('#hex-responsive4').removeClass('hex-gap');
       $('#hex-responsive10').removeClass('hex-gap');
       $('#hex-responsive13').removeClass('hex-gap');
   } else if(width >= 721 && width <= 991){
       $('#hex-responsive13').addClass('hex-gap');
       $('#hex-responsive5').addClass('hex-gap');
       $('#hex-responsive12').removeClass('hex-gap');
       $('#hex-responsive7').removeClass('hex-gap');
   } else if(width >= 992 && width <= 1199){
       $('#hex-responsive7').addClass('hex-gap');
       $('#hex-responsive13').removeClass('hex-gap');
       $('#hex-responsive5').removeClass('hex-gap');
       $('#hex-responsive8').removeClass('hex-gap');
   } else if(width >= 1199){
       $('#hex-responsive8').addClass('hex-gap');
       $('#hex-responsive7').removeClass('hex-gap');
  }
})
.resize();
