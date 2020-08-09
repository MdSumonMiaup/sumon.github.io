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

$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.owl-two').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            900:{
                items:4
            }
        }
    });


});