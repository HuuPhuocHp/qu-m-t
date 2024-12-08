document.addEventListener('DOMContentLoaded', function() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const slideNumber = document.getElementById('slide-number');

    // Cập nhật số thứ tự slide
    function updateSlideNumber() {
        const currentSlideIndex = document.querySelector('.carousel-item.active').getAttribute('data-slide-to');
        slideNumber.textContent = `${parseInt(currentSlideIndex) + 1} / ${totalSlides}`;
    }

    // Cập nhật số thứ tự khi chuyển slide
    $('#main_slider').on('slid.bs.carousel', function() {
        updateSlideNumber();
    });

    // Gọi hàm một lần khi tải trang để thiết lập số đầu tiên
    updateSlideNumber();
});
