<template>
  <div class="servicies-container">
    <div class="content-wrapper">
      <div class="service">
        <img src="/img/lg-brown.png" alt="service picture" />
        <div class="service-text">
          <h2>Ugradnja stakala</h2>
          <p>Kvalitetna i precizna ugradnja dioptrijskih stakala.</p>
        </div>
      </div>
      <div class="service">
        <img src="/img/lg3-brown.png" alt="service picture" />
        <div class="service-text">
          <h2>Nega oka</h2>
          <p>Korisni saveti za negu očiju od strane stručnog osoblja</p>
        </div>
      </div>
      <div class="service">
        <img src="/img/lg4-brown.png" alt="service picture" />
        <div class="service-text">
          <h2>Očni pregled</h2>
          <p>Kontrola oštrine vida po ustanovljenoj praksi i rutini</p>
        </div>
      </div>
    </div>
  </div>
  <div class="narrow-container">
    <div class="content-wrapper">
      <p>
        Online shop Optike Oculus nudi široki spektar stranih i domaćih brendova
        dioptrijskih okvira i naočara za sunce
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.servicies-container,
.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 30px;
  margin: 20px auto;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  .service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #313131;
    width: 33%;
    gap: 30px;

    @media screen and (max-width: 600px) {
      flex-direction: row;
      justify-content: flex-start;
      width: 70%;
    }

    img {
      width: 30%;
    }

    .service-text {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      gap: 30px;

      @media screen and (max-width: 600px) {
        gap: 10px;
      }

      h2 {
        font-size: 24px;
        font-weight: 700;

        @media screen and (max-width: 600px) {
          font-size: 20px;
        }
      }

      p {
        width: 60%;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;

        @media screen and (max-width: 600px) {
          width: 80%;
          font-size: 14px;
        }
      }
    }
  }
}
.narrow-container {
  padding: 15px 0;
  background-image: url("/img/peach-marble-swirl-background-handmade-acrylic-paint.jpg");
  background-attachment: fixed;
  text-align: center;

  p {
    width: 90%;
    font-size: 20px;
    color: #313131;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      font-size: 16px;
      line-height: 18px;
    }
  }
}
</style>
