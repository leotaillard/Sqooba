$(document).foundation()


$(document).ready(function(){


$('.main-nav-button').click(function(){
	if ($(this).hasClass('active')) {
		$('#main-menu li').not(this).each(function(){
			$(this).removeClass('open').addClass('close');
		});
		$(this).removeClass('active');
	}
	else {
		$('#main-menu li').not(this).each(function(){
			$(this).removeClass('close').addClass('open');
		});
		$(this).addClass('active');
	};
});
if ($('#back-to-top').length) {
    var scrollTrigger = 1000, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


});


particlesJS.load('particles-js', 'js/particles.json', function() {
	console.log('callback - particles.js config loaded');
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
