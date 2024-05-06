const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const carouselDots = document.querySelector(".carousel-dots");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
  updateDots(index);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function updateDots(index) {
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("button");
  dot.classList.add("carousel-dot");
  dot.addEventListener("click", () => goToSlide(i));
  carouselDots.appendChild(dot);
}

updateDots(currentIndex);
let autoSlideInterval = setInterval(nextSlide, 5000); // Change to 5 seconds

// carousel
const logisticsBoxes = document.querySelectorAll(".logistics-box");

logisticsBoxes.forEach((box) => {
  box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    box.style.color = "white";
  });
});
