// $(window).on('scroll', function() {
//     if($(this).scrollTop() > 0 ) {
//     $(".mainHead").addClass("fixed-top");
  
//     } else {
//     $(".mainHead").removeClass("fixed-top");
//     }
// });
// $(".navbar-toggler").on('click', function()  {
//     $(this).toggleClass("collapsed")
// })
// dropdown on hover
$(".dropdown").hover( function() {
    if ($(window).width() > 991) {
    $(this).find(".dropdown-menu").toggleClass("show")
    $(this).find(".nav-link").removeAttr("data-bs-toggle")
    }
})


var swiper = new Swiper(".banner_slider", {
  autoplay: {
		delay: 5000,
  	},
  	direction: 'horizontal',
	effect: 'fade',
	loop: true,
	speed: 1000,
      

  });


  var swiperThumbnails = new Swiper('.swiper-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    resistanceRatio: 0.6,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 0
      },
      375: {
        slidesPerView: 1
      },
   
      575: {
        slidesPerView: 2
      },
   
      767: {
        slidesPerView: 2
      },
   
      991: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      },
      1366: {
        slidesPerView: 3
      },
    }
  });
  
  var swiperTeam = new Swiper('.testi_slider', {
    spaceBetween: 10,
    simulateTouch: true,
    preloadImages: false,
    loop: true,
    lazy: true,
    autoplay: {
      delay: 4000,
    },
    lazy: {
        loadPrevNext: false,
        loadOnTransitionStart: true
    },
    speed: 300,
    thumbs: {
        swiper: swiperThumbnails
    },
    zoom: {
        maxRatio: 0
    }
  });
  