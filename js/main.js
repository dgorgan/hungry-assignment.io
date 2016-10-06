$(document).ready(function() {
    $('.nav-tabs>li').on('click', function() {
        $('div.calendar-picker > ul > li').each(function(index, value) {

            // tab.removeClass('selected-tab');
            console.log(index + ": " + value.outerHTML);

            var outterHTMLZ = value.outterHTML;


            $(outterHTMLZ).removeClass('selected-tab');

        })

        // $.each('div.calendar-picker > ul > li', function(val) {
        //   $(val).removeClass('selected-tab');
        // });

        $(this).toggleClass('selected-tab');
    });

    // $('body > div.jumbotron > div > div.col-md-5.info-right > button').on('click', function() {
    //     alert('#FF00FF is Red, No Green, Blue!');
    // })

    $('.order-now').on('click', function(e) {
        $('body').data('form-focus', true);
        e.stopPropagation();
        $('.jumbotron').addClass('background-modal-opacity');
        $('.calendar-picker').addClass('background-modal-opacity');
        $('.hungry-bag-icn').addClass('background-modal-opacity');
        $('.form-signup').addClass('open').fadeIn('fast');
    })

    $('body').on("click", 'div:not(.form-signup.open)', function(e){
      e.stopPropagation()
      if ( $('body').data('form-focus') ) {
        $('body').data('form-focus', false);
        $('.form-signup').removeClass('open').hide();
        $('.jumbotron').removeClass('background-modal-opacity');
        $('.calendar-picker').removeClass('background-modal-opacity');
        $('.hungry-bag-icn').removeClass('background-modal-opacity');
      }
    })
});
