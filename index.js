$(document).ready(function(){
  $(".btn").click(function(){
    $(".edu").toggle();
  });
  $(".info").css("color", "black").slideUp(2000).slideDown(2000);
})
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "white");
  },
  
});