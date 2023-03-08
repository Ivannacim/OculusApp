<template>
  <div class="aboutus-container">
    <div class="content-wrapper">
      <div class="aboutus-img">
        <img src="img/pexels-francesco-paggiaro.jpg" alt="frames" />
      </div>
      <div class="aboutus-text">
        <p>
          Optika Oculus se nalazi u Beogradu i pruža kompletnu uslugu Vašem vidu
          sa odličnim rasponom cena i širokim asortimanom.
        </p>
        <button>Saznaj više</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutus-container {
  padding: 40px 0;
}

.aboutus-container,
.content-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;

  .aboutus-img {
    width: 50%;

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

    p {
      width: 90%;
      text-align: center;
      font-size: 20px;
      color: #313131;
    }

    button {
      width: 22%;
      padding: 10px 5px;
      font-size: 18px;
      font-weight: 500;
      border-style: none;
      border-radius: 7px;
      background-color: #fbb08a;
      color: #313131;
      cursor: pointer;

      &:hover {
        background-color: #f39e73;
      }
    }
  }
}
</style>
