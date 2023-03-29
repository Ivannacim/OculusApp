<template>
  <div class="hero-aboutus"></div>

  <main>
    <div class="content-wrapper">
      <div class="about">
        <h1>O nama</h1>
        <p>
          Optika Oculus se nalazi u Beogradu i pruža vam sve za vid i negu oka
          sa odličnim rasponom cena,širokim asortimanom i uslugom.
        </p>
      </div>

      <div class="aboutUs first">
        <div class="aboutUs-content">
          <h2>IZ NAŠEG ASORTIMANA PROIZVODA I USLUGA IZDVAJAMO:</h2>
          <ul>
            <li>Dioptrijske okvire</li>
            <li>Sunčane naočare poznatih svetskih proizvođača</li>
            <li>Pregled za utvrđivanje dioptrije</li>
            <li>Visokokvalitetna ugradnja stakala</li>
          </ul>
        </div>
        <img
          src="img/pexels-ali-pazani-2811088.jpg"
          alt="girl wearing eyeglasses"
        />
      </div>

      <div class="aboutUs second">
        <img src="img/pexels-arina-krasnikova-5951539.jpg" alt="eyewear" />
        <div class="aboutUs-content">
          <h2>Vrste stakla:</h2>
          <ul>
            <li>Mineralna sferna stakla</li>
            <li>Cilindrična stakla za astigmatizam</li>
            <li>Titanijumska stakla</li>
            <li>Bifokalna stakla</li>
            <li>Multifokalna (progresivna) stakla</li>
            <li>Foto stakla u više boja</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.hero-aboutus {
  width: 100%;
  height: 600px;
  background-image: url("/img/pexels-pavel-danilyuk-hero.jpg");
  background-position: center;
  background-size: cover;
}
.about {
  padding: 50px 0;
  color: #313131;
  text-align: center;

  @media screen and (max-width: 480px) {
    padding: 30px 0;
  }

  h1 {
    margin-bottom: 40px;
    font-size: 36px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }

  p {
    margin: 0 auto;
    width: 70%;
    font-size: 20px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
}

.aboutUs,
.second {
  .aboutUs-content {
    @media screen and (max-width: 480px) {
      order: 1;
    }
  }
}

.aboutUs {
  padding: 30px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 480px) {
    padding: 20px 15px;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .aboutUs-content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      font-size: 18px;
      text-transform: uppercase;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }

    ul {
      list-style: inside;

      li {
        margin-bottom: 5px;

        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
  img {
    width: 30%;
    box-shadow: 0 0 10px rgba(33, 33, 33, 0.3);
  }
}
</style>
