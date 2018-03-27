(function ($) {
    $(() => {
        $('.gallery__slider').slick({
            centerPadding: '60px',
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerPadding: '120px',
                        arrows: true,
                        slidesToShow: 1
                    }
                }
            ]
        });
        $('.questions__answer').each(function (i) {
            if (i !== 0) {
                $(this).hide(0);
            }
        });

        $(document).on('click', '.questions__question', function (e) {
            e.preventDefault();
            const tabId = $(this).attr('href');
            $('.questions__question').removeClass('questions__question--active');
            $(this).addClass('questions__question--active');
            $('.questions__answer').hide(0);
            $(tabId).show();
        });

    });

})(jQuery);

