 $(window).scroll(function () {
     var scroll = $(window).scrollTop();

     if (scroll >= 200) {
         $(".form-sec, .applybtn").addClass("sticky");
     } else {

         $(".form-sec, .applybtn").removeClass("sticky");

     }

 });

 $('.course-name-heading .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
})
   
    
$('.board .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


 $(document).ready(function () {


     $(".applybtn").click(function () {


         $(".form-sec").toggleClass("slide");
     });

     $(".close").click(function () {
         $(".knowmore").fadeOut();
     })
     $(".points > div span").click(function () {
         $(this).prev(".knowmore").fadeIn();
     })


     $(".list_li ul > li:first-child").click(function () {

         $(".onebox").fadeIn();
     })
     $(".list_li ul > li:nth-child(2)").click(function () {

         $(".twobox").fadeIn();
     })
     $(".list_li ul > li:nth-child(3)").click(function () {

         $(".threebox").fadeIn();
     })
     $(".list_li ul > li:nth-child(4)").click(function () {

         $(".fourbox").fadeIn();
     })

     $(".close").click(function () {
         $(".content-box").fadeOut();
     })


$('.ranking .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: false,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        });
    
     

    
     $('.Life .owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
})
})
