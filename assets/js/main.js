/*-----------------------------------------------------------------

Template Name: Stackly - IT Solution Solutionsnology HTML Template<
Author:  ex-coders
Author URI: https://themeforest.net/user/ex-coders
Developer: Syed Imraan
Version: 1.0.0
Description: Stackly - IT Solution Solutionsnology HTML Template<

-------------------------------------------------------------------
Js TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up 
05. wow animation
06. nice select
07. swiper slider
08. team hover effect
09. search popup
10. mouse cursor
11. Set Background Image
12. Global Slider
13. Progress Bar Animation 
14. Checkbox
15. preloader

------------------------------------------------------------------*/

(function ($) {
    "use strict";

    $(document).ready(function () {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function () {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        //>> Hero-1 Slider Start <<//
        const sliderActive2 = ".hero-slider";
        const sliderInit2 = new Swiper(sliderActive2, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 3000,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });

        function animated_swiper(selector, init) {
            const animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive2 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive2, sliderInit2);
        //>> Banner Animation <<//




        //>> Magnific Popup <<//   
        /* magnificPopup img view */
        $(".popup-image").magnificPopup({
            type: "image",
            mainClass: 'mfp-zoom-in',
            removalDelay: 260,
            gallery: {
                enabled: true,
            },
        });



        /* magnificPopup video view */
        $(".popup-video").magnificPopup({
            type: "iframe",
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });



        /* magnificPopup video view */
        $(".popup-content").magnificPopup({
            type: "inline",
            midClick: true,
        });



        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });



        //>> Counter Up  <<//    
        $(".counter-number").counterUp({
            delay: 10,
            time: 1000,
        });



        //>> Wow Animation Start <<//
        new WOW().init();



        //>> Nice Select Start <<//
        $('select').niceSelect();



        //>> Brand Slider Start <<//
        const brandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        const brandSlider2 = new Swiper(".brand-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });



        //>> Service Slider Start <<// 
        const serviceSlider2 = new Swiper(".service-slider-2", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot-2",
                clickable: true,
            },

            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });



        //>> Project Slider Start <<// 
        const projectSlider2 = new Swiper(".project-slider-2", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot-2",
                clickable: true,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },

                575: {
                    slidesPerView: 1,
                },

                0: {
                    slidesPerView: 1,
                },
            },
        });

        const projectSlider3 = new Swiper(".project-slider-3", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot-2",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                650: {
                    slidesPerView: 2,
                },

                575: {
                    slidesPerView: 1,
                },

                0: {
                    slidesPerView: 1,
                },
            },
        });



        //>> Testimonial Slider Start <<// 

        const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
            speed: 1500,
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                },

                575: {
                    slidesPerView: 1,
                },

                0: {
                    slidesPerView: 1,
                },
            },

        });



        //>> News Slider Start <<//
        const newsSlider = new Swiper(".news-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },

                575: {
                    slidesPerView: 1,
                },

                0: {
                    slidesPerView: 1,
                },
            },
        });



        //>> Team Slider Start <<//
        const teamSlider = new Swiper(".team-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot-2",
                clickable: true,
            },

            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });



        //>> Team Hover Image Show Slider Start <<//
        const teamItems = document.querySelectorAll(".team-items");

        function followImageCursor(event, teamItems) {
            const contentBox = teamItems.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            const dy = event.clientY - contentBox.y;
            teamItems.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
        }

        teamItems.forEach((item, i) => {
            item.addEventListener("mousemove", (event) => {
                setInterval(followImageCursor(event, item), 1000);
            });
        });


        //>> Search Popup Start <<//
        const $searchWrap = $(".search-wrap");
        const $navSearch = $(".nav-search");
        const $searchClose = $("#search-close");

        $(".search-trigger").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).addClass("open");
        });

        $(".search-close").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).removeClass("open");
        });

        function closeSearch() {
            $searchWrap.fadeOut(200);
            $navSearch.add($searchClose).removeClass("open");
        }

        $(document.body).on("click", function (e) {
            closeSearch();
        });

        $(".search-trigger, .main-search-input").on("click", function (e) {
            e.stopPropagation();
        });

        //>> Mouse Cursor Start <<//
        function mousecursor() {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function (s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                    $("body").on("mouseenter", "a, .cursor-pointer", function () {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "a, .cursor-pointer", function () {
                        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                            (e.classList.remove("cursor-hover"),
                                t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
        $(function () {
            mousecursor();
        });



        //>> Set Background Image  & Mask<<// 
        if ($("[data-bg-src]").length > 0) {
            $("[data-bg-src]").each(function () {
                var src = $(this).attr("data-bg-src");
                $(this).css("background-image", "url(" + src + ")");
                $(this).removeAttr("data-bg-src").addClass("background-image");
            });
        }

        if ($('[data-mask-src]').length > 0) {
            $('[data-mask-src]').each(function () {
                var mask = $(this).attr('data-mask-src');
                $(this).css({
                    'mask-image': 'url(' + mask + ')',
                    '-webkit-mask-image': 'url(' + mask + ')'
                });
                $(this).addClass('bg-mask');
                $(this).removeAttr('data-mask-src');
            });
        };


        //>> Global Slider<<//  
        $('.gt-slider').each(function () {
            var gtSlider = $(this);
            var settings = $(this).data('slider-options');

            // Log settings to verify initialSlide
            console.log("Slider settings: ", settings);

            // Store references to the navigation Slider
            var prevArrow = gtSlider.find('.slider-prev');
            var nextArrow = gtSlider.find('.slider-next');
            var paginationEl = gtSlider.find('.slider-pagination');
            var paginationElN = gtSlider.find('.slider-pagination.pagi-number');

            var paginationType = settings['paginationType'] ? settings['paginationType'] : 'bullets';

            var autoplayconditon = settings['autoplay'];

            var sliderDefault = {
                slidesPerView: 1,
                spaceBetween: settings['spaceBetween'] ? settings['spaceBetween'] : 24,
                loop: settings['loop'] == false ? false : true,
                speed: settings['speed'] ? settings['speed'] : 1000,
                initialSlide: settings['initialSlide'] ? settings['initialSlide'] : 0,  // Default to 0 if not set
                centeredSlides: settings['centeredSlides'] == true ? true : false,
                autoplay: autoplayconditon ? autoplayconditon : { delay: 6000, disableOnInteraction: false },
                navigation: {
                    nextEl: nextArrow.get(0),
                    prevEl: prevArrow.get(0),
                },
                pagination: {
                    el: paginationEl.get(0),
                    type: paginationType,
                    clickable: true,
                    renderBullet: function (index, className) {
                        var number = index + 1;
                        var formattedNumber = number < 10 ? '0' + number : number;
                        if (paginationElN.length) {
                            return '<span class="' + className + ' number">' + formattedNumber + '</span>';
                        } else {
                            return '<span class="' + className + '" aria-label="Go to Slide ' + formattedNumber + '"></span>';
                        }
                    },
                },
                on: {
                    slideChange: function () {
                        setTimeout(function () {
                            swiper.params.mousewheel.releaseOnEdges = false;
                        }, 500);
                    },
                    reachEnd: function () {
                        setTimeout(function () {
                            swiper.params.mousewheel.releaseOnEdges = true;
                        }, 750);
                    }
                }
            };

            var options = $.extend({}, sliderDefault, settings);
            console.log("Final Swiper options: ", options);  // Log final options to check initialSlide

            var swiper = new Swiper(gtSlider.get(0), options); // Assign the swiper variable

            if ($('.slider-area').length > 0) {
                $('.slider-area').closest(".container").parent().addClass("arrow-wrap");
            }

        });

        // Function to add animation classes
        function animationProperties() {
            $('[data-ani]').each(function () {
                var animationName = $(this).data('ani');
                $(this).addClass(animationName);
            });

            $('[data-ani-delay]').each(function () {
                var delayTime = $(this).data('ani-delay');
                $(this).css('animation-delay', delayTime);
            });
        }
        animationProperties();

        // Add click event handlers for external slider arrows based on data attributes
        $('[data-slider-prev], [data-slider-next]').on('click', function () {
            var sliderSelector = $(this).data('slider-prev') || $(this).data('slider-next');
            var targetSlider = $(sliderSelector);

            if (targetSlider.length) {
                var swiper = targetSlider[0].swiper;

                if (swiper) {
                    if ($(this).data('slider-prev')) {
                        swiper.slidePrev();
                    } else {
                        swiper.slideNext();
                    }
                }
            }
        });


        //>> Progress Bar Animation  <<//     
        $('.progress-bar').each(function () {
            var $this = $(this);
            var progressWidth = $this.attr('style').match(/width:\s*(\d+)%/)[1] + '%';

            $this.waypoint(function () {
                $this.css({
                    '--progress-width': progressWidth,
                    'animation': 'animate-positive 1.8s forwards',
                    'opacity': '1'
                });
            }, { offset: '75%' });
        });



        //>> Clear Form Data When Returning From 404 <<//
        // A successful form submission marks the navigation. When the user
        // returns from 404.html (including browser back / bfcache), every
        // form on the previous page is restored to a fresh state.
        (function () {
            const CLEAR_KEY = 'stacklyClearFormsOn404Return';
            const FORCE_BACK_CLEAR_KEY = 'stacklyForceClearOn404Back';

            function markFormForClear() {
                try {
                    sessionStorage.setItem(CLEAR_KEY, '1');
                    sessionStorage.setItem(FORCE_BACK_CLEAR_KEY, '1');
                } catch (err) {}
            }

            function clearFormsAfter404Return() {
                let shouldClear = false;
                try {
                    shouldClear = sessionStorage.getItem(CLEAR_KEY) === '1' || sessionStorage.getItem(FORCE_BACK_CLEAR_KEY) === '1';
                    if (shouldClear) {
                        sessionStorage.removeItem(CLEAR_KEY);
                        sessionStorage.removeItem(FORCE_BACK_CLEAR_KEY);
                    }

                    // Also consume the legacy newsletter key used by older
                    // versions of the project.
                    if (sessionStorage.getItem('stacklyClearSubscribeOnReturn') === '1') {
                        shouldClear = true;
                        sessionStorage.removeItem('stacklyClearSubscribeOnReturn');
                    }
                } catch (err) {}

                if (!shouldClear) return;

                document.querySelectorAll('form').forEach(function (form) {
                    try { form.reset(); } catch (err) {}
                });

                // The footer newsletter input is intentionally outside the
                // checkbox form, so clear it explicitly as well.
                document.querySelectorAll('.email-input-container input').forEach(function (input) {
                    input.value = '';
                    input.setCustomValidity('');
                    input.removeAttribute('aria-invalid');
                });

                document.querySelectorAll('input, textarea, select').forEach(function (field) {
                    field.classList.remove('is-invalid', 'error', 'success');
                    field.removeAttribute('aria-invalid');
                    if (typeof field.setCustomValidity === 'function') {
                        field.setCustomValidity('');
                    }
                });

                // Restore newsletter buttons to their initial disabled state.
                document.querySelectorAll('.email-input-container button').forEach(function (button) {
                    button.disabled = true;
                });
            }

            window.StacklyMarkFormForClear = markFormForClear;

            window.addEventListener('pageshow', clearFormsAfter404Return);
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', clearFormsAfter404Return, { once: true });
            } else {
                clearFormsAfter404Return();
            }
        })();

        //>> Contact Form -> 404 Redirect <<//
        // Keep the existing contact-form UI, but make a successful valid
        // submission behave consistently with the footer form.
        (function () {
            const $form = $('#contact-form');
            if (!$form.length) return;

            $form.off('submit.stacklyContactRedirect').on('submit.stacklyContactRedirect', function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();

                const $name = $form.find('[name="name"]').first();
                const $email = $form.find('[name="email"]').first();
                const $message = $form.find('[name="message"]').first();

                const name = String($name.val() || '').trim();
                const email = String($email.val() || '').trim();
                const message = String($message.val() || '').trim();

                const emailPattern = /^[A-Za-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

                if (!name || !emailPattern.test(email) || !message) {
                    if (!name) $name.focus();
                    else if (!emailPattern.test(email)) $email.focus();
                    else $message.focus();
                    return false;
                }

                if (typeof window.StacklyMarkFormForClear === 'function') {
                    window.StacklyMarkFormForClear();
                }

                window.location.href = '404.html';
                return false;
            });
        })();

        //>> Footer Email Validation & 404 Redirect <<//
        // Redirect only after a professionally formatted email address is entered.
        // The Privacy Policy checkbox is optional and does not block the email action.
        // Unified footer email validation and 404 redirect.
        $('.email-input-container').each(function () {
            const $container = $(this);
            const $email = $container.find('input[type="email"]').first();
            const $submitButton = $container.find('#submitButton').first();
            if (!$email.length || !$submitButton.length) return;

            function isProfessionalEmail(value) {
                const email = String(value || '').trim();
                if (!email || email.length > 254 || /\s/.test(email) || /\.\./.test(email)) return false;
                const parts = email.split('@');
                if (parts.length !== 2) return false;
                const local = parts[0], domain = parts[1];
                if (!local || local.length > 64 || !domain || domain.length > 253) return false;
                if (local.startsWith('.') || local.endsWith('.')) return false;
                if (!/^[A-Za-z0-9.!#$%&'*+\/=?^_`{|}~-]+$/.test(local)) return false;
                return /^(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/.test(domain);
            }
            function updateState() {
                const valid = isProfessionalEmail($email.val());
                $submitButton.prop('disabled', !valid);
                $email.attr('aria-invalid', valid ? 'false' : 'true');
            }
            $email.off('.footerEmail').on('input.footerEmail blur.footerEmail', function () {
                this.setCustomValidity(''); updateState();
            });
            $submitButton.off('.footerEmail').on('click.footerEmail', function (event) {
                event.preventDefault(); event.stopImmediatePropagation();
                const email = $email.val().trim();
                if (!isProfessionalEmail(email)) {
                    $email[0].setCustomValidity('Please enter a valid professional email address.');
                    $email[0].reportValidity(); updateState(); return false;
                }
                $email[0].setCustomValidity(''); if (typeof window.StacklyMarkFormForClear === 'function') window.StacklyMarkFormForClear(); window.location.href = '404.html'; return false;
            });
            updateState();
        });


    }); // End Document Ready Function

    function loader() {
        $(window).on('load', function () {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(600).fadeOut();
        });
    }

    loader();


})(jQuery); // End jQuery

