<template>
  <div class="slideshow-container">
    <div class="mySlides fade">
      <img src="../assets/img/hero-image1.jpg" />
      <div class="text">Veliki izbor naočara za sunce</div>
    </div>

    <div class="mySlides fade">
      <img src="../assets/img/hero-image2.jpg" />
      <div class="text">Photogray stakla</div>
    </div>

    <div class="mySlides fade">
      <img src="../assets/img/hero-image3.jpg" />
      <div class="text">Dioptrijski okviri poznatih brendova</div>
    </div>

    <a class="prev" @click="plusSlides(-1)">❮</a>
    <a class="next" @click="plusSlides(1)">❯</a>

    <div class="dots">
      <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot" @click="currentSlide(3)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let slideIndex = ref(1);
let plusSlides = () => null;
let currentSlide = () => null;
let showSlides = () => null;
let slides = ref("");
let dots = ref("");

onMounted(() => {
  (plusSlides = (n) => showSlides((slideIndex.value += n))),
    (currentSlide = (n) => showSlides((slideIndex.value = n))),
    (showSlides = (n) => {
      let i;
      (slides.value = document.getElementsByClassName("mySlides")),
        (dots.value = document.getElementsByClassName("dot"));
      if (n > slides.value.length) {
        slideIndex.value = 1;
      }
      if (n < 1) {
        slideIndex.value = slides.value.length;
      }
      for (i = 0; i < slides.value.length; i++) {
        slides.value[i].style.display = "none";
      }
      for (i = 0; i < dots.value.length; i++) {
        dots.value[i].className = dots.value[i].className.replace(
          " active",
          ""
        );
      }
      slides.value[slideIndex.value - 1].style.display = "block";
      dots.value[slideIndex.value - 1].className += " active";
    });
  showSlides(slideIndex.value);
});
</script>

<style lang="scss" scoped>
.slideshow-container {
  width: 100%;
  position: relative;
  margin: auto;

  .mySlides {
    display: none;

    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
      display: inline-block;
      margin-bottom: -20px;
    }

    .text {
      color: #f2f2f2;
      font-size: 28px;
      font-weight: 700;
      position: absolute;
      top: 60%;
      right: 4%;
      width: 250px;

      &:nth-child(2) .text:nth-child(2) {
        top: 30%;
        right: 40%;
      }
    }
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -22px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .dots {
    text-align: center;
    position: relative;
    top: -15px;
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;

      &:hover,
      .active {
        background-color: #717171;
      }
    }
  }

  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
