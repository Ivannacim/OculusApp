<template>
  <div class="categories-container">
    <div class="content-wrapper">
      <div class="categories">
        <img
          src="/img/pexels-andrea-piacquadio.jpg"
          alt="man wearing eyeglasses"
        />
        <div class="middle-text">
          <a href="#">Muški okviri</a>
        </div>
      </div>
      <div class="categories">
        <img src="/img/pexels-pavel-danilyuk.jpg" alt="eyeglasses" />
        <div class="middle-text">
          <RouterLink to="/lenses">Stakla</RouterLink>
        </div>
      </div>
      <div class="categories">
        <img
          src="img/pexels-andrea-piacquadio2.jpg"
          alt="woman wearing eyeglasses"
        />
        <div class="middle-text">
          <RouterLink to="/eyeglasses">Ženski okviri</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
.categories-container {
  padding: 60px 20px;
}

.categories-container,
.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .categories {
    width: 50%;
    position: relative;

    @media screen and (max-width: 768px) {
      width: 80%;
    }

    img {
      width: 100%;
      display: block;
      opacity: 1;
      transition: 0.5s ease;
      backface-visibility: hidden;
      box-shadow: 0 0 10px rgba(33, 33, 33, 0.3);
    }

    &:hover {
      img {
        opacity: 0.3;
      }
      .middle-text {
        opacity: 1;
      }
    }

    .middle-text {
      text-align: center;
      transition: 0.5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;

      a {
        text-decoration: none;
        background-color: #fbb08a;
        color: white;
        font-size: 18px;
        font-weight: 700;
        padding: 14px 24px;
        border-style: none;
        border-radius: 5px;

        @media screen and (max-width: 1024px) {
          font-size: 16px;
          letter-spacing: 1px;
          padding: 14px 20px;
        }
      }
    }
  }
}
</style>
