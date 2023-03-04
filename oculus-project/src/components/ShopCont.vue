<template>
  <div class="shop-container">
    <div class="content-wrapper">
      <h2>Popularni modeli</h2>

      <div class="shop-gallery">
        <a href="#" class="frames">
          <img src="../assets/img/framear1.png" alt="armani frame" />
          <h4>Armani</h4>
          <p>AX1034</p>
        </a>

        <a href="#" class="frames">
          <img src="../assets/img/framebu1.png" alt="burberry frame" />
          <h4>Burberry</h4>
          <p>BE2363</p>
        </a>
        <a href="#" class="frames">
          <img src="../assets/img/framemk1.png" alt="michael-kors frame" />
          <h4>Michael Kors</h4>
          <p>MK4058</p>
        </a>
        <a href="#" class="frames">
          <img src="../assets/img/framepr1.png" alt="prada frame" />
          <h4>Prada</h4>
          <p>PR 18WV</p>
        </a>
        <a href="#" class="frames">
          <img src="../assets/img/frameroundpr1.png" alt="prada frame" />
          <h4>Prada</h4>
          <p>PR 16TA</p>
        </a>
        <a href="#" class="frames">
          <img
            src="../assets/img/framerounddg1.png"
            alt="dolce&amp;gabbana frame"
          />
          <h4>Dolce&amp;Gabbana</h4>
          <p>DG3235</p>
        </a>
        <a href="#" class="frames">
          <img src="../assets/img/frameroundbu1.png" alt="burberry frame" />
          <h4>Burberry</h4>
          <p>BE3572</p>
        </a>
        <a href="#" class="frames">
          <img src="../assets/img/frameroundmk1.png" alt="michael-kors frame" />
          <h4>Michael Kors</h4>
          <p>MK7345</p>
        </a>
      </div>
      <button>Vidi okvire</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop-container {
  padding: 50px 0;
}

.shop-container,
.content-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .shop-gallery {
    padding: 5px 0 30px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-content: center;
    gap: 70px 70px;

    .frames {
      width: 250px;
      height: 250px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      color: #000;
      text-decoration: none;
      /* border: 1px solid #ccc; */
      border-radius: 7px;
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 0 0 10px rgba(33, 33, 33, 0.3);
      }

      img {
        width: 100%;
      }

      h4 {
        font-size: 20px;
        font-weight: 700;
        margin-top: 30px;
      }

      p {
        font-size: 18px;
      }
    }
  }
  button {
    width: 150px;
    margin: 0 auto;
    padding: 15px;
    font-size: 20px;
    font-weight: 700;
    border-style: none;
    border-radius: 7px;
    background-color: #fbb08a;
    color: #fff;

    &:hover {
      background-color: #f39e73;
      cursor: pointer;
    }
  }
}
</style>
