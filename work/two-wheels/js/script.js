$(document).ready(function(){

  // Адаптивная кнопка меню
  const menuIcon = $('.menu-icon')

  // Список меню сайта
  const navbarNav = $('.navbar__nav')

  // Кнопка SHOPPING NOW
  const navbarBtn = $('.navbar__btn')
  
  const navbarNavLink = $('.navbar__nav-link')
  

  // Работа адаптивной кнопки меню
  $('.menu-icon-wrapper').on('click', function(event){
    event.preventDefault()

    menuIcon.toggleClass('menu-icon-active')
    navbarNav.toggleClass('show')
    navbarBtn.toggleClass('show')
  })

  // Шапка сайта
  const header = $('.header')

  // Высота шапки с учетом паддингов
  let headerHeight = header.innerHeight()

  //Позиция скрола на странице от верха
  let scrollPosition = $(window).scrollTop()

  // Кнопка скролла наверх    
  const scrollBtn =  $('.scroll-to-top-btn')

  // По скроллу - скрываем или показываем кнопку и делаем фиксированным панель navbar
  $(window).on('scroll resize load', function(){

    //Перезыписываем значение переменной при resize
    headerHeight = header.innerHeight()

    //this это $(window), т.к. в нем происходят все действия
    scrollPosition = $(this).scrollTop() 

    if (scrollPosition > headerHeight) {
      scrollBtn.fadeIn()        
      $('.navbar').addClass('fixed')
    } else {
      scrollBtn.fadeOut()      
      $('.navbar').removeClass('fixed')
    }
    

  })

  // Клик по кнопке скрола наверх
  scrollBtn.click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 360)       
    return false
  })   
    

  // OWl CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1
  })

  

  //Плавный скролл по клику на элемент меню навигации   
  $('[data-scroll]').on('click', function(event){
    event.preventDefault()

    const sectionId = $(this).data('scroll')
    const sectionPosition = $(sectionId).offset().top    

    navbarNav.removeClass('show')
    navbarBtn.removeClass('show')
    menuIcon.toggleClass('menu-icon-active')

    
    const target = event.target
    Array.from(navbarNavLink).forEach(item => {
      item.classList.remove('navbar__nav-link--active')
    })
    target.classList.add('navbar__nav-link--active')  

    

    $('html, body').animate({
      scrollTop: sectionPosition - 70      
    }, 700);

  })    

})


// Табы продуктов
const tabs = document.querySelectorAll('[data-tab]')

tabs.forEach(tabsHandler)

function tabsHandler(item){
  item.addEventListener('click', tabsClick)
}

function tabsClick(){
  event.preventDefault()
  const tabId = this.dataset.tab
  document.querySelectorAll('[data-tab-content]').forEach(function(item){
    item.classList.remove('show')
  })
  document.getElementById(tabId).classList.toggle('show')


}
