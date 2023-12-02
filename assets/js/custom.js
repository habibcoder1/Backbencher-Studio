(function($){
    'use strict';
    jQuery(document).ready(function($){

        /* ======================
            menu hide show
        ====================== */
        let hambergerIcon = document.querySelector('.hambergur-icon i');
        let menuCloseIcon = document.querySelector('.logo-close_icon .close-icon i');
        let mainMenu      = document.querySelector('.manu-address_area');

        jQuery(hambergerIcon).click(function(){
            jQuery(mainMenu).slideDown(300); //300 slidedown
        });

        jQuery(menuCloseIcon).click(function(){
            jQuery(mainMenu).slideUp(300); //300 slideup
        });
        
        
        /* ===============
            Blog Slider
        =============== */
        const progressCircle  = document.querySelector(".autoplay-progress svg");
        var swiper = new Swiper(".blog-slider_details", {
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            slidesPerView: 1,
            speed: 800,
            autoplay:{
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                }
            }
        });

        /* ========================
            About Service Slider
        ======================== */
        jQuery('.aboutservice-slider ul').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 800,
            centerPadding: '10px',
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            vertical: true, 
            verticalSwiping: true,
        });
        
        /* ========================
            Testimonial Slider
        ======================== */
        jQuery('.testimonial-details').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            pauseOnHover: false,
        });

        
       /* ==================
            Blog Mixitup (only load which page will set mixitup)
        ================== */
        var mixer = mixitup('.allblog-items');
        /* var mixer = mixitup(containerEl);
        var mixer = mixitup(containerEl, {
            selectors: {
                target: '.blog-item',
            },
            animation: {
                duration: 5000,
            },
        }); */

        
        
       
        

    });
})(jQuery);