$( document ).ready(function() {
    $('.categoryData').slice(0,6).show();
    $('.showMore').on('click',function (e) {
        e.preventDefault();
        $('.categoryData:hidden').slice(0,6).addClass('animated fadeIn');
        $('.categoryData:hidden').slice(0,6).slideDown();
        if($('.categoryData:hidden').length==0){
            $('.showMore').addClass('animated fadeOut');
            $('.showMore').fadeOut('slow');
            $('.showMore').unbind('click');
        }
    })
});