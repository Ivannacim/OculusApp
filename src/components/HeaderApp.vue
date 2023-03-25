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
          <ul>
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
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router"; /*importuj svuda gde ima routerlink */
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

      .navbar ul {
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
    }
  }
}
</style>
