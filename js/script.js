$(document).ready(function(){
    
 // owl carousel >> Team Section
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                item:1
            },
            600:{
                item:4
            },
            1000:{
                item:4
            }
        }
    });
  
});