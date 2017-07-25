// setTimeout(function(){
// document.getElementById('delay-appearing').style.visibility = "visible";
// },1000);

// $(function() {
//     $('#delay-appearing').fadeTo(200, 1);
<<<<<<< HEAD
// });

// $(window).scroll(function() {
//    var hT = $('#delay-appearing').offset().top,
//        hH = $('#delay-appearing').outerHeight(),
//        wH = $(window).height(),
//        wS = $(this).scrollTop();
//   if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
//        $(function() {
//            $('#delay-appearing').fadeTo(200, 1);
//        });

//    }
// });

$(function() {
    $('#delay-appearing').fadeTo(200, 1);
});
=======
// });

$(window).scroll(function() {
   var hT = $('#delay-appearing').offset().top,
       hH = $('#delay-appearing').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
  if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
       $(function() {
           $('#delay-appearing').fadeTo(200, 1);
       });

   }
});
>>>>>>> 39d80120ec4e7768cdf73d4338f89488636661aa
