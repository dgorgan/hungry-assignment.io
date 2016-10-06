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

    $('.order-now').on('click',function(){
      $('.jumbotron').toggleClass('background-modal-opacity')
      $('.calendar-picker').toggleClass('background-modal-opacity')
      $('.hungry-bag-icn').toggleClass('background-modal-opacity')
      $('.form-signup').show().toggleClass('open')
    })
  });
