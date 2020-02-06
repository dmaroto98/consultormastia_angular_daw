/*########################## Flecha que direcciona hacia arriba #######################################*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

/*########################## Carrusel Principal #######################################*/
$(function () {
    var Page = (function () {
            var $navArrows = $('#nav-arrows').hide(),
                    $shadow = $('#shadow').hide(),
                    slicebox = $('#sb-slider').slicebox({
                            onReady: function () {
                                    $navArrows.show();
                                    $shadow.show();
                            },
                            orientation: 'r',
                            cuboidsRandom: true,
                            autoplay: true
                    }),
                    init = function () {
                            initEvents();
                    },
                    initEvents = function () {
                            // add navigation events
                            $navArrows.children(':first').on(
                                    'click',
                                    function () {
                                            slicebox.next();
                                            return false;
                                    });
                            $navArrows.children(':last').on('click',
                                    function () {
                                            slicebox.previous();
                                            return false;
                                    });
                    };
            return {
                    init: init
            };
    })();
    Page.init();
});