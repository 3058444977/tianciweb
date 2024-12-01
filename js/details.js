
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: '.details-img-left',
        clickable :true,
        bulletClass : 'my-bullet',//需设置.my-bullet样式
        bulletActiveClass: 'my-bullet-active',
        renderBullet: function (index, className) {
            console.log(index,className);
            return '<div class="' + className + '" ><img src="../img/details'+(index+1)+'.jpg" alt=""></div>'
        },

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


