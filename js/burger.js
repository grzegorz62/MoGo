	// первая версия
$('.burger').click(function(event) {
        $('.burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
})

$('.menu__link').click(function(event) {
	$('.burger,.header__menu').removeClass('active');
	$('.header__menu').removeClass('active');
	})

// вторая версия

// menu

const burger = document.querySelector('.burger');
if(burger){
  const menu_body = document.querySelector('.menu');
  burger.addEventListener("click", function(e){
     document.body.classList.toggle('lock');
     burger.classList.toggle('active');
     menu_body.classList.toggle('active');

});
}

//  burger's animation

