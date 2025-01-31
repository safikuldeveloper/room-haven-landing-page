/**
* Template Name: ClientPeak: Free Bootstrap 5 Business Landing Template
* Template URL: https://www.templaterise.com/template/clientpeak-free-bootstrap-5-business-landing-template
* Updated: January 31 2025 with Bootstrap v5.3.3
* Author: templaterise.com
*/

$(document).ready(function(){

  $(".hero-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      animateOut: 'fadeOut',
      dots: false
  });

  var owl = $('.testimonial-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  responsive:{
      0:{
          items: 1
      },
      768:{
          items: 2
      },
      1200:{
          items: 3
      }
  }
});

// Custom Navigation
$('.custom-next').click(function() {
  owl.trigger('next.owl.carousel');
});
$('.custom-prev').click(function() {
  owl.trigger('prev.owl.carousel');
});


$('#datepicker').datepicker();

});