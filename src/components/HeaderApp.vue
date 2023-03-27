<template>
  <header>
    <!--
    <nav>
      <ul>
        <li><RouterLink to="/">Oculus</RouterLink></li>
        <li>
          <RouterLink to="/eyeglasses">Naočare</RouterLink>
          <ul>
            <li></li>
          </ul>
        </li>
      </ul>
    </nav>
    -->

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
              <RouterLink to="/eyeglasses">
                Naočare<i class="fa-solid fa-caret-down"></i>
                <ul class="dropdown-content">
                  <li>
                    <RouterLink to="/sunglasses">Muški okviri</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/eyeglasses">Ženski okviri</RouterLink>
                  </li>
                </ul>
              </RouterLink>
            </li>
            <li><RouterLink to="/lenses">Stakla</RouterLink></li>
            <li><RouterLink to="/contact">Kontakt</RouterLink></li>
          </ul>
          <div class="icon">
            <i
              @click="toggleMobileNav"
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
                <RouterLink to="/eyeglasses">
                  Naočare<i class="fa-solid fa-caret-down"></i>
                  <ul class="dropdown-content">
                    <li>
                      <RouterLink to="/sunglasses">Muški okviri</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/eyeglasses">Ženski okviri</RouterLink>
                    </li>
                  </ul>
                </RouterLink>
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
let toggleMobileNav = () => null;
let checkScreen = () => null;

onMounted(() => {
  window.addEventListener("resize", checkScreen);

  checkScreen = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 768) {
      mobile.value = true;
    } else {
      mobile.value = false;
      mobileNav.value = false;
    }
  };
  toggleMobileNav = () => {
    mobileNav.value != mobileNav.value;
    console.log("toggle navbar");
  };
  checkScreen();
  toggleMobileNav();
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
          gap: 18px;

          li {
            position: relative;
            float: left;
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
            padding: 20px;
            display: block;

            a {
              text-decoration: none;
              color: rgb(71, 77, 83);
              transition: 0.3s ease all;

              &:hover {
                color: #fbb08a;
              }
            }

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
          }
        }
        .icon {
          display: flex;
          align-self: center;
          position: absolute;
          top: 0px;
          right: 15px;

          i {
            font-size: 20px;
            cursor: pointer;
          }
        }

        .icon-active {
          transform: rotate(180deg);
        }
        .dropdown-nav {
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          max-width: 250px;
          height: 100%;
          background-color: azure;

          li {
            margin-left: 0;
          }
        }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active {
          transition: 1s ease all;
        }

        .mobile-nav-enter-from,
        .mobile-nav-leave-to {
          transform: translateX(-250px);
        }

        .mobile-nav-enter-to {
          transform: translateX(0);
        }
      }
    }
  }
}
</style>
