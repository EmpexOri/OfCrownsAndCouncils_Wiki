// carousel.js
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach(carousel => {
    const images = carousel.querySelectorAll("img");
    let index = 0;

    const show = i => {
      images.forEach(img => img.classList.remove("active"));
      images[i].classList.add("active");
    };

    carousel.querySelector(".prev").onclick = () => {
      index = (index - 1 + images.length) % images.length;
      show(index);
    };

    carousel.querySelector(".next").onclick = () => {
      index = (index + 1) % images.length;
      show(index);
    };
  });
});
