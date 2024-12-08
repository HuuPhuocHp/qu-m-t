document.addEventListener("DOMContentLoaded", function () {
    const buyNowBtn = document.getElementById("buy-now-btn");
    const successMessage = document.createElement("div");
    
    successMessage.id = "success-message";
    successMessage.innerText = "Thêm vào giỏ hàng thành công!";
    document.body.appendChild(successMessage);

    buyNowBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn liên kết mặc định
        successMessage.classList.add("show");

        // Ẩn thông báo sau 3 giây
        setTimeout(() => {
            successMessage.classList.remove("show");
        }, 3000);
    });
});
