<template>
  <div class="aboutus-container">
    <div class="content-wrapper">
      <div class="aboutus-img">
        <img src="img/pexels-francesco-paggiaro.jpg" alt="frames" />
      </div>
      <div class="aboutus-text">
        <h2>O nama</h2>
        <p>
          Optika Oculus se nalazi u Beogradu i pruža kompletnu uslugu Vašem vidu
          sa odličnim rasponom cena i širokim asortimanom.
        </p>
        <button @click="click">Saznaj više</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const click = () => {
  router.push({
    path: "/aboutus",
  });
};
</script>

<style lang="scss" scoped>
.aboutus-container {
  padding: 40px 10px;
}

.aboutus-container,
.content-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  .aboutus-img {
    width: 50%;

    @media screen and (max-width: 768px) {
      width: 60%;
    }

    @media screen and (max-width: 480px) {
      width: 80%;
    }

    img {
      width: 100%;
      box-shadow: 0 0 10px rgba(33, 33, 33, 0.3);
    }
  }

  .aboutus-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 480px) {
      width: 80%;
    }

    h2 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 10px;

      @media screen and (max-width: 768px) {
        font-size: 24px;
      }
    }

    p {
      width: 90%;
      text-align: center;
      font-size: 20px;
      color: #313131;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }

    button {
      padding: 10px 15px;
      font-size: 18px;
      font-weight: 500;
      border-style: none;
      border-radius: 7px;
      background-color: #fbb08a;
      color: #313131;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }

      &:hover {
        background-color: #f39e73;
      }
    }
  }
}
</style>
