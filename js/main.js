$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('.navbar').css('background', '#212529');
    } else {
        $('.navbar').css('background', 'transparent');
    }
});

//Reviews
$('.reviews-sider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    smartspeed: 600,
})
