<template>
  <main>
    <div class="contact-container" id="contact">
      <div class="content-wrapper">
        <div class="contact-us">
          <div class="contact-heading">
            <h2>Kontaktiraj nas</h2>
            <p>
              Za zakazivanje termina za očni pregled dioptrije, informacije,
              pitanja u vezi naočara za vid, stakala za naočare, možete nas
              kontaktirati putem mejla.
            </p>
          </div>

          <form>
            <input type="text" name="name" placeholder="Ime:" />
            <input type="email" name="email" placeholder="Email:" />
            <textarea cols="50" name="comment" placeholder="Poruka:"></textarea>
            <button>Pošalji</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
body {
  background-image: url(img/2763873.jpg);
  background-size: auto;
  background-repeat: no-repeat;
}

.contact-container,
.content-wrapper {
  width: 100%;
  height: auto;

  .contact-us {
    max-width: 600px;
    height: 95%;
    margin: 70px auto;
    padding: 80px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
      margin: 70px auto 10px auto;
      padding: 20px 0px;
    }

    .contact-heading {
      width: 70%;
      text-align: center;
      color: #fff;

      h2 {
        font-size: 32px;
      }
      p {
        padding-top: 20px;
        font-size: 16px;
        line-height: 18px;
      }
    }

    form {
      width: 95%;
      height: 70%;
      margin: 10px 0 10px 0;
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: space-around;
      gap: 10px;

      input {
        font-size: 16px;
        padding: 20px;
        border-style: none;
        border-radius: 7px;
        background-color: rgb(247, 244, 244);

        &:focus {
          outline: none;
          color: #717171;
        }
      }

      textarea {
        padding: 20px 50px 120px 20px;
        font-size: 16px;
        border-style: none;
        border-radius: 7px;
        background-color: rgb(247, 244, 244);

        &:focus {
          outline: none;
          color: #717171;
        }
      }

      button {
        // width: 20%;
        margin: 0 auto;
        padding: 20px;
        font-size: 18px;
        font-weight: 700;
        border-style: none;
        border-radius: 7px;
        background-color: #df865a;
        color: #fff;
        text-align: center;

        &:hover {
          background-color: #fbb08a;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
