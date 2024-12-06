console.log("Carousel script is loaded and running!");
// Đảm bảo document sẵn sàng
$(document).ready(function() {
    // Khi slide chuyển đổi, cập nhật chỉ mục
    $('#jewellery_main_slider').on('slid.bs.carousel', function () {
        var currentIndex = $('.carousel-inner .active').index();
        $('#slide-indicator span').removeClass('active-slide');
        $('#slide-indicator span').eq(currentIndex).addClass('active-slide');
    });
 
    // Hàm chuyển đến slide cụ thể
    window.goToSlide = function(slideIndex) {
        $('#jewellery_main_slider').carousel(slideIndex);
        $('#slide-indicator span').removeClass('active-slide');
        $('#slide-indicator span').eq(slideIndex).addClass('active-slide');
    };
 });
 $('#slide-indicator span').click(function () {
    var slideIndex = $(this).data('slide-to');
    console.log("Slide index clicked: ", slideIndex);
    $('#jewellery_main_slider').carousel(slideIndex);
});
 