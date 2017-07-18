// setTimeout(function(){
// document.getElementById('delay-appearing').style.visibility = "visible";
// },1000);

$(function() {
    $('#delay-appearing').fadeTo(200, 1);
    $('#fadeIn').click(function(){
         $('#delay-appearing').fadeIn('slow', function(){alert('Отображено');});
    });
});