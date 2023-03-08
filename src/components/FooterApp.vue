<template>
  <footer>
    <div class="content-wrapper">
      <div class="footer-about">
        <h3>Oculus</h3>
        <img src="/img/logo-oculus.png" alt="oculus logo" />
        <p>
          Optika Oculus vam pruža sve za vid i negu oka sa odličnim rasponom
          cena, širokim asortimanom i uslugom.
        </p>
      </div>
      <div class="footer-links">
        <h4>Shop:</h4>
        <a href="#">Naočare za vid</a>
        <a href="#">Naočare za sunce</a>
        <h4>Društvene mreže:</h4>
        <div class="social-icons">
          <a href="#"><img src="/img/Vector1.png" alt="instagram-icon" /></a>
          <a href="#"><img src="/img/Vector2.png" alt="facebook-icon" /></a>
        </div>
      </div>
      <div class="footer-info">
        <h4>Adresa:</h4>
        <p>Bulevar kralja Aleksandra bb</p>
        <p>Beograd</p>

        <h4>Telefon:</h4>
        <p>011/123 45 67</p>

        <h4>Email:</h4>
        <p>oculus@gmail.com</p>

        <h4>Radno vreme:</h4>
        <p>Radnim danima : 09-20h</p>
        <p>Subota : 09-15h</p>
      </div>
    </div>
    <div class="footer-end">
      <p><span>Oculus</span> Copyright &copy; 2023</p>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss">
footer {
  background-color: rgba(255, 255, 255, 0.854);

  .content-wrapper {
    padding-top: 20px;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;

    .footer-about {
      width: 40%;
      /* margin-right: 50px; */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      h3 {
        font-size: 32px;
        font-weight: 700;
        color: #29a5a1;
      }

      img {
        width: 33%;
      }

      p {
        width: 60%;
        font-size: 16px;
        text-align: justify;
      }
    }
    .footer-links {
      width: 30%;
      margin-left: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;

      h4 {
        font-size: 24px;
        color: #29a5a1;

        &:nth-child(2) {
          padding-top: 40px;
        }
      }

      a {
        display: block;
        color: #000;
        font-size: 16px;
        text-decoration: none;

        &:hover {
          color: #df865a;
        }
      }

      .social-icons {
        a {
          margin-right: 5px;
          display: inline;
        }

        img {
          display: inline-block;
          width: 10%;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }

    .footer-info {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;

      h4 {
        padding-top: 10px;
        font-size: 24px;
        color: #29a5a1;
      }
    }
  }

  .footer-end {
    padding: 10px 0;
    text-align: center;

    span {
      color: #29a5a1;
      font-size: larger;
    }
  }
}
</style>
