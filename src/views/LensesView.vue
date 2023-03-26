<template>
  <div class="hero-lenses"></div>
  <!-- Main -->
  <main>
    <div class="content-wrapper">
      <div class="zeiss-lenses">
        <h1>Ugradnja stakala</h1>
        <p>
          Zahvaljujući savremenoj Zeiss tehnologiji za obradu i ugradnju stakala
          za naočare, u prilici smo da Vam ponudimo kvalitetnu i preciznu
          ugradnju i izradimo naočare za vid ili naočare za sunce prema vašim
          parametrima i potrebama.
        </p>
      </div>

      <div class="zeiss-frame">
        <img src="img/pngwing.com (35).png" alt="frame" />
      </div>

      <div class="lenses-about">
        <div class="lenses-img">
          <img src="img/lenses.png" alt="lenses" />
        </div>
        <div class="lenses-text">
          <p>
            Tim naših stručnjaka po ustanovljenoj dioptriji pacijentu predlaže
            određeni tip dioptrijskih stakala.
          </p>
          <p>
            Progresivna (multifokalna) stakla objedinjuju dioptrije za sve
            distance, postepenim prelaskom od najniže (za daljinu) do najjače
            (za citanje) bez estetskih promena u spoljašnjem izgledu stakala.
          </p>
        </div>
      </div>

      <div class="lens-cross">
        <h3>Izaberi najbolja stakla za svoj okvir</h3>
        <img src="img/cross-section.jpg" alt="cross section" />
      </div>

      <div class="lenses-technology">
        <div class="technology-content">
          <h4>Anti-reflex stakla</h4>
          <div class="img-content">
            <img src="img/anti-reflex.jpg" alt="anti-reflex lens" />
            <div class="overlay">
              <p class="text">
                Antirefleksna stakla poboljšavaju Vaš vid i daju lepši izgled
                Vašim naočarima i eliminišu neželjen efekat refleksije
              </p>
            </div>
          </div>
        </div>
        <div class="technology-content">
          <h4>Blue-light stakla</h4>
          <div class="img-content">
            <img src="img/blue-light.jpg" alt="blue-light lens" />
            <div class="overlay">
              <p class="text">
                Blue light stakla za digitalne uređaje obezbeđuju zaštitu i
                komfor pri svim aktivnostima
              </p>
            </div>
          </div>
        </div>
        <div class="technology-content">
          <h4>Transitions stakla</h4>
          <div class="img-content">
            <img src="img/transitions.jpg" alt="transitions lens" />
            <div class="overlay">
              <p class="text">
                Transitions sočiva vam pružaju najdugotrajniju jasnoću vida
              </p>
            </div>
          </div>
        </div>
        <div class="technology-content">
          <h4>Foto-grey stakla</h4>
          <div class="img-content">
            <img src="img/photo-grey.jpg" alt="photo-grey lens" />
            <div class="overlay">
              <p class="text">
                Foto gray stakla menjanju boju ( u braon ili sivo) usled
                izlaganja naočara spoljnoj svetlosti
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.hero-lenses {
  width: 100%;
  height: 600px;
  background-image: url("img/ZEISS175-bannerFormats.jpg");
  background-size: cover;
  background-position: center;
}

.zeiss-lenses {
  padding: 50px 0;
  color: #313131;
  text-align: center;

  h1 {
    margin-bottom: 50px;
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

.zeiss-frame {
  width: 50%;
  margin: 0 auto;

  img {
    width: 100%;
  }
}

.lenses-about {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 600px) {
    padding: 20px 10px;
  }

  .lenses-img {
    width: 20%;

    @media screen and (max-width: 600px) {
      width: 30%;
    }

    img {
      width: 100%;
    }
  }

  .lenses-text {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 50px;

    @media screen and (max-width: 480px) {
      gap: 20px;
    }

    p {
      width: 50%;
      text-align: center;

      @media screen and (max-width: 768px) {
        width: 70%;
      }
    }
  }
}

.lens-cross {
  padding: 30px 0;
  text-align: center;

  h3 {
    margin: 30px 0;
    font-size: 20px;
    font-weight: 500;
  }
  img {
    width: 70%;
    vertical-align: middle;
  }
}

.lenses-technology {
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-content: center;
  gap: 50px 0px;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .technology-content {
    width: 80%;
    text-align: center;

    h4 {
      padding-bottom: 20px;
      font-size: 20px;
    }
    .img-content {
      position: relative;

      img {
        width: 100%;
        display: block;
      }
      .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #77aaecb7;
        overflow: hidden;
        width: 100%;
        height: 0;
        transition: 0.5s ease;

        .text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgb(239, 238, 238);
          font-size: 20px;
          font-weight: 400;
          line-height: 26px;
          text-align: center;

          @media screen and (max-width: 768px) {
            font-size: 16px;
          }

          @media screen and (max-width: 480px) {
            font-size: 18px;
          }
        }
      }
      &:hover {
        .overlay {
          height: 100%;
        }
      }
    }
  }
}
</style>
