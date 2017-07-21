// setTimeout(function(){
// document.getElementById('delay-appearing').style.visibility = "visible";
// },1000);

$(function() {
    $('#delay-appearing').fadeTo(200, 1);
});


// $('body').animate({
//     scrollTop: 10000
//     }, 0,

//     (function() {
//     $('#delay-appearing').fadeTo(200, 1);
//   });
// );

// $(function() {
//     var oTop = $('#delay-appearing').offset().top - window.innerHeight;
//     $(window).scroll(function(){

//         var pTop = $('body').scrollTop();
//         console.log( pTop + ' - ' + oTop );   //just for your debugging
//         if( pTop > oTop ){
//             start_count();
//         }
//     });
// });

// function start_count(){
//     // alert('start_count');
//     //Add your code here
//     $(function() {
//     $('#delay-appearing').fadeTo(200, 1);
//     });
// }