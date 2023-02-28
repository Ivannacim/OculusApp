<template>
  <div class="servicies-container">
    <div class="content-wrapper">
      <div class="service">
        <img src="../assets/img/lg-brown.png" alt="service picture" />
        <h2>Ugradnja stakala</h2>
        <p>Kvalitetna i precizna ugradnja dioptrijskih stakala.</p>
      </div>
      <div class="service">
        <img src="../assets/img/lg3-brown.png" alt="service picture" />
        <h2>Nega oka</h2>
        <p>Korisni saveti za negu očiju od strane stručnog osoblja</p>
      </div>
      <div class="service">
        <img src="../assets/img/lg4-brown.png" alt="service picture" />
        <h2>Očni pregled</h2>
        <p>Kontrola oštrine vida po ustanovljenoj praksi i rutini</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.servicies-container,
.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin: 35px auto;

  .service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #313131;
    width: 33%;
    gap: 30px;

    img {
      width: 30%;
    }

    h2 {
      font-size: 24px;
      font-weight: 700;
    }

    p {
      width: 60%;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    }
  }
}
</style>
