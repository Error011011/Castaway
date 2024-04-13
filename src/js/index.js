// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.block');
 
    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;
 
        blocks.forEach((block) => {
            let blockPosition = block.getBoundingClientRect().top;
 
            if (blockPosition < windowHeight) {
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
            }
        });
    }
 
    checkBlocksVisibility();
 
    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();
