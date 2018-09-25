$(function(){
// abre e fecha menu
    $('.nav-toggle, .nav-close').on('click', function(e){
        e.preventDefault();
        $('.nav').toggleClass('active');
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    });
});
