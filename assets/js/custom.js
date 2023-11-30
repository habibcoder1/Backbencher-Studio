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
        // Smoothly open the menu when the page loads
        // document.addEventListener('DOMContentLoaded', function () {
        //     mainMenu.style.transition = 'transform 0.8s ease-in-out';
        //     mainMenu.classList.add('bbsmenu-show');
        // });
        
        /* ===============
            All Tabs
        =============== */
        jQuery('.blog_tab-area .category_blog-tab').tabs();

        /* =======================================
            for custom cursor in video section  (will load exact page //home page)
        ======================================= */
        const heroVideoSec    = document.querySelector(".hero_video-area");
        const customCursor = document.querySelector(".custom-cursor"); 
    
        heroVideoSec.addEventListener("mouseenter", function () {
            customCursor.style.display = "block";
            // document.body.style.overflow = "hidden"; //Hide scrollbars when the video is hovered
        });
    
        heroVideoSec.addEventListener("mouseleave", function () {
            customCursor.style.display = "none";
            document.body.style.overflow = "visible"; //Show scrollbars when the video is not hovered
        });
    
        heroVideoSec.addEventListener("mousemove", function (e) {
            const x = e.clientX;
            const y = e.clientY;
        
            customCursor.style.left = x + "px";
            customCursor.style.top = y + "px";
        });

        
        
       
        

    });
})(jQuery);