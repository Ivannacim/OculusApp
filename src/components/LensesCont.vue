<template>
  <div class="glasses-container">
    <div class="content-wrapper">
      <div class="lenses">
        <img src="/img/lenses.png" alt="lenses" />
      </div>
      <div class="about-lenses">
        <h3>Dioptrijska stakla</h3>
        <p>
          Pored pregleda vršimo i ugradnju dioptrijskih stakala. U ponudi su
          mineralna sferna stakla, cilindrična stakla za astigmatizam,
          titanijumska stakla, bifokalna, multifokalna (progresivna) i foto
          stakla u više boja.
        </p>
        <button>Saznaj više</button>
      </div>
      <div class="glasses">
        <img src="/img/glasses.png" alt="glasses" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.glasses-container {
  padding: 20px 0;
  background-color: #fbb08a;
}

.glasses-container,
.content-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .lenses {
    width: 33%;
    display: flex;
    justify-content: center;

    img {
      width: 50%;
      animation: scaleImg 0.7s ease-in-out 0.7s;
    }
  }

  .about-lenses {
    width: 33%;
    margin: 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap: 35px;

    h3 {
      font-size: 32px;
      font-weight: 700;
      color: #313131;
    }
    p {
      width: 80%;
      font-size: 17px;
      font-weight: 400;
      line-height: 22px;
    }
    button {
      width: 35%;
      padding: 10px 5px;
      font-size: 18px;
      font-weight: 500;
      border-style: none;
      border-radius: 7px;
      background-color: #313131;
      color: #fbb08a;

      &:hover {
        background-color: #414141;
        color: #fbb08a;
        cursor: pointer;
      }
    }
  }

  .glasses {
    width: 33%;

    img {
      width: 80%;
      animation: scaleImg 0.7s ease-in-out 0.7s;
    }
  }
}
@keyframes scaleImg {
  0% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
</style>
