$(document).ready(function(){

$('[data-scroll]').on('click', function(event){
    
    event.preventDefault();

    let sectionId = $(this).data('scroll');
    let sectionPosition = $(sectionId).offset().top;        
       
    $('html, body').animate({
        scrollTop: sectionPosition
    }, 700);

});


});