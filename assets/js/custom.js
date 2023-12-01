(function($){
    'use strict';
    jQuery(document).ready(function($){

        /* ======================
            menu hide show
        ====================== */
        let hambergerIcon = document.querySelector('.hambergur-icon i');
        let menuCloseIcon = document.querySelector('.close-icon i');
        let mainMenu      = document.querySelector('.main-menu');

        hambergerIcon.addEventListener('click', function(){
            mainMenu.classList.add('bbsmenu-show');
        });
        
        menuCloseIcon.addEventListener('click', function(){
            mainMenu.classList.remove('bbsmenu-show');
        });


        /* ===============
            Blog Slider
        =============== */
        const blogSlider = jQuery('.blog-slider');
        jQuery(blogSlider).slick({
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            pauseOnHover: false,
        });
        // Update counter text
        function updateCounter(slick, currentIndex) {
            let currentSlide = slick.slickCurrentSlide() + 1;
            let totalSlides  = slick.slideCount;
            // for 0 before count
            let formattedCurrentSlide = currentSlide < 10 ? '0' + currentSlide : currentSlide;
            let formattedTotalSlide = totalSlides < 10 ? '0' + totalSlides : totalSlides;

            jQuery('.current-slide').text(formattedCurrentSlide);
            jQuery('.total-slides').text(formattedTotalSlide);
        };
        // Initialize counter
        jQuery(blogSlider).on('init reInit afterChange', function (event, slick, currentSlide) {
            updateCounter(slick, currentSlide);
        });


        // progress bar
        var progressBar = $('.progress_bar');
        blogSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var percent = (nextSlide / (slick.slideCount - 1)) * 100;
            progressBar.css('width', percent + '%');
        });
        blogSlider.on('afterChange', function (event, slick, currentSlide) {
            progressBar.css('width', '0%');
        });

        
       /* ==================
            Blog Mixitup
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