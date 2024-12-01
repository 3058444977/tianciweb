
document.querySelectorAll('.cjcIyR')[0].addEventListener('focus', function () {
    ftyHYg.style.border = '1px solid #333';

});
document.querySelectorAll('.cjcIyR')[0].addEventListener('blur', function () {
    ftyHYg.style.border='none'
});

$(".cjcIyR").focus(function () {
    // 切换下拉菜单的显示和隐藏状态

    $("#history").stop().slideDown('slow');
});

$(".cjcIyR").blur(function () {
    // 切换下拉菜单的显示和隐藏状态

     $("#history").stop().slideUp('slow');;
});


$(document).ready(function () {
    $('.accordion-title').click(function () {
        $(this).next('.accordion-content').slideToggle();
    
        $(this).toggleClass("rotate");
        if ($(this).hasClass("rotate")) {
           
            $(this).children('.iconRight').children("svg").css("transform", "rotate(0deg)");
        }else {
            $(this).children('.iconRight').children("svg").css("transform", "rotate(180deg)");
        }
        
    });
});
$("#history li").click(function () {
    window.location.href='../html/search.html'
   
})




