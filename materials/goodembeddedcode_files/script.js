// Generated by CoffeeScript 1.3.3
(function () {
    var contentWithArrow, desktopFooter, heroInsightsMobile, heroSlider, heroSliderMobile, homeHero, homeMobileHero, homeTabletSlide, loadArticles, loadVidTemplate, mobileFooter, navSearchTap, tabbedSliders;

    $(function () {
        var currPage;
        currPage = $('body').attr('name');
        /* CHECK BROWSER RESOLUTION
        # Due to requirements with responsiveness, we need to check + run a statement
        # on browser resolution. This does not include touch - that is elsewhere.
        # using the modernizr (from foundation) method here
        # http://modernizr.com/docs/#mq
        */

        if (Modernizr.mq('only screen and (max-width: 767px)')) {
            if (currPage !== "home-landing") {
                if (currPage === "insights-landing") {
                    heroInsightsMobile(292, 445);
                } else {
                    heroSliderMobile();
                }
            } else {
                homeMobileHero();
            }
            navSearchTap();
            mobileFooter();
        } else if (Modernizr.mq('only screen and (min-width: 768px) and (max-width: 979px)')) {
            homeTabletSlide();
            if (currPage === "insights-landing") {
                tabbedSliders(750, 194);
            } else {
                tabbedSliders(750, 220);
            }
//            homeHero();
            navSearchTap();
            if (currPage === "product-landing") {
                heroSlider(422, 450);
            } else if (currPage === "events-landing") {
                heroSlider(422, 448);
            } else {
                heroSlider(422, 455);
            }
            mobileFooter();
        } else {
//            homeHero();
            desktopFooter();
            if (currPage === "insights-landing") {
                tabbedSliders(630, 194);
            } else {
                tabbedSliders();
            }
            if (currPage === "category-landing") {
                heroSlider(292, 455);
            } else if (currPage === "events-landing") {
                heroSlider(292, 445);
            } else {
                heroSlider();
            }
        }
        if (Modernizr.touch || navigator.userAgent.match(/Windows Phone/i)) {
            0;

        }
        loadArticles();
        
        $('.dropdown.mobile .active').bind("click", function () {
            return $('.list').toggleClass('hidden');
        });
        return $('.dropdown.mobile .list li a').bind("click", function () {
            var category, title;
            title = $(this).parent().attr('title');
            category = $(this).attr('href');
            $(category).removeClass('hidden').addClass('show');
            $('.active .title').html(title);
            $(this).parent().parent().addClass('hidden');
            return false;
        });
    });

    /* FUNCTIONS BELOW HERE
    # These are js functions used in the TOLD app.
    */


    /* HERO FUNCTIONS
    # Multiple options here, three variations of the same code.
    */


//    homeHero = function () {
//        var hero;
//        hero = $('.hero');
//        if (hero.height() >= 1) {
//            return $('.select-box .item', hero).on('click', function () {
//                var displayThis;
//                displayThis = $('.img', this).attr('href');
//                $('.select-box .item').removeClass('active');
//                $(this).addClass('active');
//                $('.item:visible', '.current').hide();
//                return $(displayThis).fadeIn(300);
//            });
//        }
//    };

//    homeTabletSlide = function () {
//        var hero;
//        hero = $('.hero');
//        if (hero.height() >= 1) {
//            return $('.two-up-columns').slides({
//                width: 370,
//                height: 380,
//                slide: {
//                    interval: 300
//                }
//            });
//        }
//    };

//    homeMobileHero = function (slideWidth, slideHeight) {
//        var count, current, hero;
//        if (slideWidth == null) {
//            slideWidth = 272;
//        }
//        if (slideHeight == null) {
//            slideHeight = 500;
//        }
//        hero = $('.hero');
//        if (hero.height() >= 1) {
//            current = $('.current').slides({
//                width: slideWidth,
//                height: slideHeight,
//                slide: {
//                    interval: 300
//                },
//                pagination: false,
//                navigation: false
//            });
//            count = $('.page-count span');
//            $('.next-mobile').on('click', function () {
//                var slideNum;
//                current.slides('next');
//                slideNum = current.slides('status', 'current');
//                if (slideNum === false) {
//                    slideNum = 2;
//                } else if (slideNum === 11) {
//                    slideNum = 1;
//                } else {
//                    slideNum++;
//                    slideNum++;
//                }
//                count.html(slideNum);
//                return false;
//            });
//            return $('.previous-mobile').on('click', function () {
//                var slideNum;
//                current.slides('previous');
//                slideNum = current.slides('status', 'current');
//                if (slideNum === false) {
//                    slideNum = 12;
//                }
//                count.html(slideNum);
//                return false;
//            });
//        }
//    };

    tabbedSliders = function (slideWidth, slideHeight) {
        var slides;
        if (slideWidth == null) {
            slideWidth = 630;
        }
        if (slideHeight == null) {
            slideHeight = 194;
        }
        slides = $('.tabbed-slider');
        if (slides.length >= 1) {
            return $.each(slides, function () {
                var navigation, slide;
                slide = $(this);
                if (slides.data('generate') === true) {
                    slide.slides({
                        width: slideWidth,
                        height: slideHeight,
                        slide: {
                            interval: 450
                        },
                        pagination: true,
                        navigation: true
                    });
                } else {
                    slide.slides({
                        width: slideWidth,
                        height: slideHeight,
                        slide: {
                            interval: 450
                        },
                        pagination: false,
                        navigation: false
                    });
                }
                navigation = $(this).next('.navigation');
                $('.next', navigation).on('click', function () {
                    var next;
                    slide.slides('next');
                    next = slide.slides('status', 'current');
                    if (next === false) {
                        next = 2;
                    } else if (next === 4) {
                        next = 1;
                    } else {
                        next++;
                        next++;
                    }
                    $('.slide-pagination li a', navigation).removeClass('active');
                    $('.page' + next, navigation).addClass('active');
                    return false;
                });
                return $('.previous', navigation).on('click', function () {
                    var next;
                    slide.slides('previous');
                    next = slide.slides('status', 'current');
                    if (next === false) {
                        next = 5;
                    }
                    $('.slide-pagination li a', navigation).removeClass('active');
                    $('.page' + next, navigation).addClass('active');
                    return false;
                });
            });
        }
    };

    heroSlider = function (slideWidth, slideHeight) {
        var slides;
        if (slideWidth == null) {
            slideWidth = 292;
        }
        if (slideHeight == null) {
            slideHeight = 450;
        }
        slides = $(".tabbed-slider2");
        if (slides.length >= 1) {
            contentWithArrow();
            $.each(slides, function () {
                var slide;
                slide = $(this);
                return slide.slides({
                    width: slideWidth,
                    height: slideHeight,
                    slide: {
                        interval: 450
                    },
                    pagination: true,
                    navigation: true
                });
            });
        }
        return $('.side-controls .slidesNavigation').on("click", function () {
            return $(".side-controls .arrow").addClass("hide");
        });
    };

    heroSliderMobile = function (slideWidth, slideHeight) {
        var count, current, hero;
        if (slideWidth == null) {
            slideWidth = 290;
        }
        if (slideHeight == null) {
            slideHeight = 500;
        }
        hero = $('.slider');
        if (hero.height() >= 1) {
            current = $('.current').slides({
                width: slideWidth,
                height: slideHeight,
                slide: {
                    interval: 300
                },
                pagination: false,
                navigation: false
            });
            count = $('.page-count span');
            $('.next-mobile').on('click', function () {
                var slideNum;
                current.slides('next');
                slideNum = current.slides('status', 'current');
                if (slideNum === false) {
                    slideNum = 2;
                } else if (slideNum === 19) {
                    slideNum = 1;
                } else {
                    slideNum++;
                    slideNum++;
                }
                count.html(slideNum);
                return false;
            });
            return $('.previous-mobile').on('click', function () {
                var slideNum;
                current.slides('previous');
                slideNum = current.slides('status', 'current');
                if (slideNum === false) {
                    slideNum = 20;
                }
                count.html(slideNum);
                return false;
            });
        }
    };

    heroInsightsMobile = function (slideWidth, slideHeight) {
        var count, current, hero;
        if (slideWidth == null) {
            slideWidth = 292;
        }
        if (slideHeight == null) {
            slideHeight = 445;
        }
        hero = $('.hero.slider');
        if (hero.height() >= 1) {
            current = $('.current').slides({
                width: slideWidth,
                height: slideHeight,
                slide: {
                    interval: 300
                },
                pagination: false,
                navigation: false
            });
            count = $('.page-count span');
            $('.next-mobile').on('click', function () {
                var slideNum;
                current.slides('next');
                slideNum = current.slides('status', 'current');
                if (slideNum === false) {
                    slideNum = 2;
                } else if (slideNum === 11) {
                    slideNum = 1;
                } else {
                    slideNum++;
                    slideNum++;
                }
                count.html(slideNum);
                return false;
            });
            return $('.previous-mobile').on('click', function () {
                var slideNum;
                current.slides('previous');
                slideNum = current.slides('status', 'current');
                if (slideNum === false) {
                    slideNum = 12;
                }
                count.html(slideNum);
                return false;
            });
        }
    };

    loadArticles = function () {
        return $(".custom.dropdown.articles ul li").on("click", function () {
            var articleSelected, currentSelected;
            currentSelected = $(this).html();
            articleSelected = $('*[name="' + currentSelected + '"]');
            $('.current.modified').html(currentSelected);
            $(".archives-list ul").removeClass("active").fadeOut("fast");
            articleSelected.fadeIn("fast").addClass("active");
            $(".custom.dropdown.articles").removeClass("open");
            return false;
        });
    };

    desktopFooter = function () {
        $('.category', '.rss').on('mouseenter', function () {
            return $('.flyout-wrap').removeClass('hidden');
        });
        return $('.rss').on('mouseleave', function () {
            return $('.flyout-wrap').addClass('hidden');
        });
    };

    mobileFooter = function () {
        return $('.category', '.rss').on('click', function () {
            return $('.flyout-wrap').toggleClass('hidden');
        });
    };

    contentWithArrow = function () {
        return $(".section-links .item a").on("click", function () {
            var catID, currSecItem, num, secItem;
            catID = $(this).attr("href");
            secItem = $(".section-links .item");
            currSecItem = $(this).parent();
            num = currSecItem.attr('title');
            secItem.removeClass("active");
            currSecItem.addClass("active");
            $(".side-controls .arrow").removeClass("hide").addClass("show");
            switch (num) {
                case "1":
                    $(".side-controls .arrow").animate({
                        top: "40px"
                    }, 'fast');
                    break;
                case "2":
                    $(".side-controls .arrow").animate({
                        top: "150px"
                    }, 'fast');
                    break;
                case "3":
                    $(".side-controls .arrow").animate({
                        top: "260px"
                    }, 'fast');
                    break;
                case "4":
                    $(".side-controls .arrow").animate({
                        top: "370px"
                    }, 'fast');
                    break;
                default:
                    $(".side-controls .arrow").animate({
                        top: "35px"
                    }, 'fast');
            }
            $(".side-small .item").removeClass("active").addClass("hide");
            $(".side-small " + catID).removeClass("hide").addClass("active");
            return false;
        });
    };
    
    navSearchTap = function () {
        return $('header .search .button').on("click", function () {
            $('.search-popup').css('background-color', '#007F99');
            $('.search-popup').toggle();
            $('.search-popup').on("click", function () {
                return $(this).css('background-color', '#0AC');
            });
            return false;
        });
    };

}).call(this);
