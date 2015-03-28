//Adds functionality to the dynamic background changes in the services section.

jQuery('.class1').hover(function(){
  jQuery('.switch').removeClass('active2');
  jQuery('.switch').removeClass('active3');
  jQuery('.switch').addClass('active');
});

jQuery('.class2').hover(function(){
  jQuery('.switch').removeClass('active');
  jQuery('.switch').removeClass('active3');
  jQuery('.switch').addClass('active2');
});

jQuery('.class3').hover(function(){
  jQuery('.switch').removeClass('active');
  jQuery('.switch').removeClass('active2');
  jQuery('.switch').addClass('active3');
});
