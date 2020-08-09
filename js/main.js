$(document).ready(function () {


});

jQuery(document).ready(function(){
	
	"use strict"
	
	$('.home').ripples({
		imageUrl: null,
		resolution: 512,
		dropRadious: 10,
		perturbance: 0.02,
		interactive: true,
		crossOrigin: ''
	});
});

$(document).ready(function() {

	"use strict";

	$('.tilt').tilt({
        maxTilt: 3,
        glare: false,
        maxGlare: 0,
        reverse: false,
        scale: 1
    });

});




var containerEl = document.querySelector('.mix-filter');

var mixer = mixitup(containerEl);


$(document).ready(function() {
	  $('.popup').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});

});

//** scroll background color start **//
$(window).on("scroll", function() {
	if ($(window).scrollTop()) {
		$('.fixed-nav').addClass('black');
	}
	
	else {
		$('.fixed-nav').removeClass('black');
	}
})
//** scroll background color end **//


$('#nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});



var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
	autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:2
        }
    }
})



$('.progress-bar').waypoint(function() {
$('.progress-bar').css({
animation: "animate-positive 2s",
opacity: "1"
});
}, { offset: '75%' });



$(document).ready(function ($) {
    function animateElements() {
      $('.progressbar').each(function () {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find('.circle').attr('data-percent');
        var percentage = parseInt(percent, 10) / parseInt(100, 10);
        var animate = $(this).data('animate');
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data('animate', true);
          $(this).find('.circle').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            size: 160,
            thickness: 8,
            emptyFill: "rgba(255, 255, 255, 1)",
            fill: {
              gradient: ['rgb(7, 164, 54)', '#0084ff', '#fff']
            }
          }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('div').text((stepValue*100).toFixed(0) + "%");
          }).stop();
        }
      });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
    
    
    

  }); //end document ready function

// Scroll to top //

var btn = $('.scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});




(function ($) {
  'use strict';

  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data;

  // Success function
  function done_func(response) {
      message.fadeIn().removeClass('alert-danger').addClass('alert-success');
      message.text(response);
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
      form.find('input:not([type="submit"]), textarea').val('');
  }

  // fail function
  function fail_func(data) {
      message.fadeIn().removeClass('alert-success').addClass('alert-success');
      message.text(data.responseText);
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
  }
  
  form.submit(function (e) {
      e.preventDefault();
      form_data = $(this).serialize();
      $.ajax({
          type: 'POST',
          url: form.attr('action'),
          data: form_data
      })
      .done(done_func)
      .fail(fail_func);
  });
  
})(jQuery);