$(document).ready(function () {
    $("#Pod").addClass("shifted");
});

$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 80
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
 });

$(document).ready(function(){
    $("#PodSteam")

});

//var thing = document.getElementById("PodSteam");
//thing.style.left = scrollPos;

//window.onscroll = {}

//var a = element.scrollTop;
