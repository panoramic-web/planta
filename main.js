var menu = document.querySelector('#menu'),
   menu_items = document.querySelectorAll('#menu .item'),
   nav_logo = document.querySelector('.logo'),
   menu_icon = document.querySelector('#menu-icon'),
   buttons = document.querySelector('#nav-content .buttons'),
   header = document.querySelector('#header-content'),
   nav = document.querySelector('#nav'),
   nav_content = document.querySelector('#nav-content'),
   search_box = document.querySelector('.search-box'),
   search_input = document.querySelector('#nav-content .buttons .search-box input')

// AOS.init();

//___Navbar show and hide

function menufunc() {
   menu.classList.toggle('active');
   setTimeout(() => {
      menu_icon.classList.toggle('fixed');
   }, 100);
};

menu_icon.onclick = () => {
   menufunc();
}

for (var i = 0; i < menu_items.length; i++) {
   menu_items[i].onclick = function() {
      menufunc();
   }
}


onscroll = () => {
   if (pageYOffset > 0) {
      nav.classList.add('fixed');
   }
   else if (pageYOffset === 0) {
      nav.classList.remove('fixed');
   }
};



search_input.addEventListener('mousedown', () => {
   search_box.classList.toggle('active');
   buttons.style = 'justify-content:space-between; flex:12;';
});
search_input.addEventListener('mouseup', () => {
   search_box.classList.toggle('active');
   buttons.style = 'justify-content:flex-end; flex:3;';
});



const carousel_1 = new Swiper('.hero-swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   autoplay: true,
   effect: 'fade',

   // If we need pagination
   // pagination: {
   //    el: '.swiper-pagination',
   // },

   // Navigation arrows
   navigation: {
      nextEl: '.hero-next',
      prevEl: '.hero-prev',
   },

   // And if we need scrollbar
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
});


const carousel_2 = new Swiper('.product-swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   autoplay: true,

   // If we need pagination
   // pagination: {
   //    el: '.swiper-pagination',
   // },

   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 100px
      100: {
         slidesPerView: 1,
         spaceBetween: 10
      },
      // when window width is >= 320px
      320: {
         slidesPerView: 2,
         spaceBetween: 10
      },
      // when window width is >= 480px
      580: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 4,
         spaceBetween: 30
      },
      // when window width is >= 880px
      880: {
         slidesPerView: 5,
         spaceBetween: 40
      },
      // when window width is >= 1000px
      1000: {
         slidesPerView: 6,
         spaceBetween: 50
      },
   },

   // Navigation arrows
   navigation: {
      nextEl: '.product-next',
      prevEl: '.product-prev',
   },

   // And if we need scrollbar
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
});



/*
const swiper = new Swiper('.swiper', {
   speed: 500,
   loop: true,
   autoplay: {
      delay: 2000,
   },

   effect: 'coverflow',
   coverflowEffect: {
      depth: 300,
      rotate: 10,
      modifier: 1,
      slideShadows: false,
      scale: 1,
   },

   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 3,
         spaceBetween: 40
      }
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
   },
});

*/




// const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
// swiper.slideNext();


/*
Coverflow Effect Parameters
depth
number
100
Depth offset in px (slides translate in Z axis)

modifier
number
1
Effect multiplier

rotate
number
50
Slide rotate in degrees

scale
number
1
Slide scale effect

slideShadows
boolean
true
Enables slides shadows

stretch
number
0
Stretch space between slides (in px)

*/