

$('#testimonial').owlCarousel({
    dotsEach: true,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1200:{
            items:3
        }
    }
});

$('#footer-carousel').owlCarousel({
    loop:true,
    margin:10,
    navigation:true,
    autoPlay: true,
    responsive:{
        0:{
            items:1
        }
    }
});