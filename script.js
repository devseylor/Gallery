$(function () {
    $('.small a').click(function (even){
        even.preventDefault();
        var href = $(this);  
        $('.big img').fadeOut(100, function(){
            $(this).attr('src', href.attr('href')).fadeIn(100);
        });
    })
    $('.big img').click(function () {
        $('.pop_img').css('display', 'flex');

        $('.pop_img img').attr('src', $(this).attr('src')).fadeIn(100);

        $('.pop_img').click(function(){
            $(this).css('display','none');
        })
    })
})