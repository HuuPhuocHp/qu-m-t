document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#jewellery_main_slider");
  const indicators = document.querySelectorAll("#slide-indicator span");

  if (carousel) {
     // Cập nhật chỉ báo slide khi chuyển slide
     carousel.addEventListener("slide.bs.carousel", function (event) {
        indicators.forEach(indicator => indicator.classList.remove("active"));
        indicators[event.to].classList.add("active");
     });

     // Xử lý khi nhấn vào số slide
     indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", function () {
           $(carousel).carousel(index);
        });
     });
  }
});

 
