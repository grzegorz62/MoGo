// Слайдер

  // Главный

$(document).ready(function(){
	$('.welcome').slick({
		arrows: false,
		dots: true,
		autoplay: true,
    autoplaySpeed: 2000,
});

})

  // Дополнительные

$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
});

})

//  Плавные якорный ссылки

$(document).ready(function(){
   $("#menu").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 800);
   });
});


// Бургер

const burger = document.querySelector('.burger');
if(burger){
  const menu_body = document.querySelector('.menu');
  burger.addEventListener("click", function(e){
     document.body.classList.toggle('lock');
     burger.classList.toggle('active');
     menu_body.classList.toggle('active');

});
}

$('.menu').click(function(event) {
  $('.burger,.header__menu').removeClass('active');
  $('.menu').removeClass('active');
})

// Аккордеон

var acc = document.getElementsByClassName("accordion__button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// Шапка


var options = {
  offset: 900
}

var header = new Headhesive('.header', options);
