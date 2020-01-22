$(document).ready(function(){


    //========= Fixed HEADER =========
    let header = $('#header'); //В переменной header хранится селектор header
    let intro = $('#intro');
    let introHeight = intro.innerHeight();  //Высота блока INTRO с учетом паддингов
    let scrollPosition = $(window).scrollTop(); //Позиция скрола на странице от верха
    let nav = $('#nav');

    checkScroll(scrollPosition, introHeight);

    $(window).on('scroll resize', function() {     //В окне при скролле мы хотим выполнять следующее

        introHeight = intro.innerHeight(); //Перезыписываем значение переменной при resize
        scrollPosition = $(this).scrollTop(); //this это $(window), т.к. в нем происходят все действия

        checkScroll(scrollPosition, introHeight);  //вызываем функцию и отправляем два параметра в функцию       

    }); 

    function checkScroll(scrollPosition, introHeight) { //принимаем два параметра здесь
        if (scrollPosition > introHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }   
    }

    
    //========= Smooth scroll ========= - плавный скролл по клику на элемент меню навигации
    $('[data-scroll]').on('click', function(event){ //Выборка элементов с атрибутом [data-scroll]
        
        event.preventDefault(); //Отменяем стандартное поведение ссылок

        let sectionId = $(this).data('scroll');
        let sectionPosition = $(sectionId).offset().top; //Получаем отступ данного элемента(sectionId) от верха и записываем в переменную

        nav.removeClass('show');

        //Анимируем скролл от верха и будем скролить на значение(sectionPosition)
        $('html, body').animate({
            scrollTop: sectionPosition - 70
        }, 700); //скорость прокрутки в мсек
    });


    //========= Nav-toggle =========   
    $('#nav-toggle').on('click', function(event){

        event.preventDefault();

        nav.toggleClass('show'); //выдать либо убрать класс по клику, за это отвечает toggleClass

    });
    
    
    //========= CAROUSEL-REVIEWS =========
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 1,        
        dots:true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true        
    });

});
    