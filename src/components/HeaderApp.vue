<template>
  <header>
    <div class="content-wrapper">
      <div class="header-container">
        <div class="logo">
          <a href="#"><img src="/img/logo-oculus.png" alt="Oculus logo" /></a>
        </div>

        <!-- Navigacija -->

        <nav class="navbar">
          <ul v-show="!mobile" class="navigation">
            <li>
              <RouterLink to="/"><a>Oculus</a></RouterLink>
            </li>
            <li>
              <RouterLink to="/eyeglassesformen">Muški okviri</RouterLink>
            </li>
            <li>
              <RouterLink to="/eyeglassesforwomen">Ženski okviri</RouterLink>
            </li>
            <li><RouterLink to="/lenses">Stakla</RouterLink></li>
            <li><RouterLink to="/contact">Kontakt</RouterLink></li>
          </ul>
          <div class="icon">
            <i
              @click="toggleMobileNav()"
              v-show="mobile"
              class="fa fa-bars"
              :class="{ 'icon-active': mobileNav }"
            ></i>
          </div>
          <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
              <li>
                <RouterLink to="/"><a>Oculus</a></RouterLink>
              </li>
              <li>
                <RouterLink to="/eyeglassesformen">Muški okviri</RouterLink>
              </li>
              <li>
                <RouterLink to="/eyeglassesforwomen">Ženski okviri</RouterLink>
              </li>
              <li><RouterLink to="/lenses">Stakla</RouterLink></li>
              <li><RouterLink to="/contact">Kontakt</RouterLink></li>
            </ul>
          </transition>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router"; /*importuj svuda gde ima routerlink */
import { ref, onMounted } from "vue";

let mobile = ref(null);
let mobileNav = ref(null);
let windowWidth = ref(null);
let checkScreen = () => null;

let toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};

checkScreen = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 768) {
    mobile.value = true;
  } else {
    mobile.value = false;
    mobileNav.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", checkScreen);

  checkScreen();
});
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 9;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 20px rgb(0, 0, 0, 0.5);

  .content-wrapper {
    max-width: 1240px;
    margin: 0 auto;

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo a {
        display: inline-block;
        margin-bottom: -5px;
        white-space: nowrap;

        img {
          height: 70px;
          /*display: block;*/
        }
      }

      .navbar {
        position: relative;

        ul {
          list-style: none;
          display: flex;
          gap: 10px;

          li {
            position: relative;
            float: left;
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
            padding: 15px;
            display: block;

            a {
              text-decoration: none;
              color: rgb(71, 77, 83);
              transition: 0.3s ease all;

              &:hover {
                color: #fbb08a;
              }
            }
            /*
            i {
              margin-left: 5px;
            }

            &:hover {
              ul {
                display: initial;
              }
            }

            ul {
              position: absolute;
              left: 0;
              top: 105%;
              width: 200px;
              background-color: rgba(255, 255, 255, 0.9);
              display: none;

              li {
                width: 100%;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
              }
            }
            */
          }
        }
        .icon {
          display: flex;
          align-self: center;
          position: absolute;
          top: -10px;
          right: 15px;

          i {
            font-size: 24px;
            cursor: pointer;
          }
        }

        .icon-active {
          transform: rotate(180deg);
        }
        .dropdown-nav {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 10px;
          position: fixed;
          top: 70px;
          left: 0;
          width: calc(100% - 80px);
          //max-width: 300px;
          height: calc(100% - 70px);
          background-color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 20px 20px rgb(0, 0, 0, 0.5);

          li {
            text-align: center;

            &::after {
              content: "";
              position: absolute;
              top: 52px;
              left: 0;
              width: 100%;
              height: 1px;
              background-color: rgba(0, 0, 0, 0.3);
            }
          }
        }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
          transition: 1s ease all;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
          transform: translateX(-700px);
        }

        .mobile-nav-enter-to {
          transform: translateX(0);
        }
      }
    }
  }
}
</style>
