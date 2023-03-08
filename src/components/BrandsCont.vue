<template>
  <div class="brands-container">
    <div class="content-wrapper">
      <p>
        Otkrijte
        <a href="eyeglasses.html"><span>nove kolekcije</span></a> svojih
        omiljenih brendova sa najnovijom tehnologijom polarizovanih sočiva
      </p>
      <div class="brands">
        <div class="brand-logo">
          <img src="/img/armani-png-logo-6724.png" alt="armani logo" />
        </div>
        <div class="brand-logo">
          <img src="/img/vogue-logo-png-transparent.png" alt="vogue logo" />
        </div>
        <div class="brand-logo">
          <img
            src="/img/Dolce__Gabbana_logo_white_5000x555.png"
            alt="dolce&amp;gabbana logo"
          />
        </div>
        <div class="brand-logo">
          <img src="/img/ray-ban-logo-png-transparent.png" alt="ray-ban logo" />
        </div>
        <div class="brand-logo">
          <img src="/img/michaelkors.png" alt="michael-kors logo" />
        </div>
      </div>
    </div>
  </div>

  <div class="narrow-blue"></div>
</template>

<style lang="scss" scoped>
.brands-container {
  padding-top: 30px;
  padding-bottom: 15px;

  p {
    width: 70%;
    margin: 0 auto;
    padding: 35px 20px 10px 20px;
    font-size: 28px;
    font-weight: 700;
    text-align: center;

    a {
      color: #fbb08a;
      text-decoration: none;
    }
  }

  .brands {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .brand-logo {
      width: 20%;

      img {
        width: 100%;
      }
    }
  }
}

.narrow-blue {
  width: 100%;
  height: 100px;
  background-image: url(../img/2763873.jpg);
  background-attachment: fixed;
}
</style>
