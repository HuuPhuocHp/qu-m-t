// Khởi động carousel và cập nhật số slide
$('#electronic_main_slider').carousel({
    interval: 3000 // Tự động chuyển slide mỗi 3 giây
});

// Lấy tổng số slide
var totalSlides = document.querySelectorAll('#electronic_main_slider .carousel-item').length;

// Hàm cập nhật số slide
function updateSlideNumber(currentIndex) {
    // Cập nhật số slide
    var slideNumberElement = document.getElementById('slide-number');
    slideNumberElement.textContent = (currentIndex + 1) + " / " + totalSlides;

    // Xóa lớp in đậm khỏi tất cả các số
    for (let i = 1; i <= totalSlides; i++) {
        var numElement = document.getElementById(`slide-number-${i}`);
        numElement.classList.remove('font-weight-bold'); // Xóa in đậm
    }

    // Thêm lớp in đậm cho số hiện tại
    var currentNumElement = document.getElementById(`slide-number-${currentIndex + 1}`);
    currentNumElement.classList.add('font-weight-bold'); // In đậm cho số hiện tại
}

// Khi carousel thay đổi slide
$('#electronic_main_slider').on('slide.bs.carousel', function (event) {
    var currentIndex = $(event.relatedTarget).index();
    updateSlideNumber(currentIndex);
});

// Khởi tạo số slide khi tải trang
updateSlideNumber(0);
