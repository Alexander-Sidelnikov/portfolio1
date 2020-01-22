$(document).ready(function(){

    var navigation = $('#navigation'),
        H = $('#navigation').innerHeight(),
        scrollLength = $(window).scrollTop();

    // NAVIGATION FIXED
    checkScroll(scrollLength);

    $(window).on('scroll resize', function() {
        
        scrollLength = $(this).scrollTop();
        checkScroll(scrollLength);

        });

    function checkScroll(scrollLength) {            

        if (scrollLength >= H) {
             navigation.addClass('fixed');
         } else {
            navigation.removeClass('fixed');
        }
            
    }    

   
    // SMOOTH SCROLL
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        var $this =$(this),
            sectionId = $this.data('scroll'),
            sectionPosition = $(sectionId).offset().top;

        $('#nav a').removeClass('active');
        $this.addClass('active');

        // Закрытие меню по клику
        $('#nav').removeClass('active');

        $('html, body').animate({
            scrollTop: sectionPosition - 70
        }, 500);
    });


    // NAV-TOGGLE
    $('#nav-toggle').on('click', function(event){
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
    });



    // COLLAPSE
    $('[data-collapse]').on('click', function(event){
        event.preventDefault();

        var $this =$(this),
            sectionId = $this.data('collapse');

        $(this).toggleClass('active');        
    });


    //CAROUSEL-OFFERS    
    $('#carousel-offers').owlCarousel({
        loop:true,
        autoWidth:true,
        autoplay:true,
        autoplayTimeout:1700,
        autoplayHoverPause:true,
        center:true,
        responsiveClass:true,
        responsive:{
            1203:{
                dots:false
            }
        }
    });


    //CAROUSEL-REVIEWS
    $('#carousel-reviews').owlCarousel({
        margin:10,        
        loop:true,         
        center:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                autoWidth:false,
            },
            520:{
                autoWidth:true,               
            },
            1203:{
                autoWidth:true,                                                       
                dots:false
            }
        }
    });


  });