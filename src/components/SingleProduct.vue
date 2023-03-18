<template>
  <div class="container">
    <div class="product">
      <div class="image">
        <img v-bind:src="productImage" alt="product image" />
      </div>
      <div class="content">
        <h1>{{ product }}</h1>
        <ul class="features">
          <li v-for="(feature, index) in features" :key="index">
            {{ feature }}
          </li>
        </ul>
        <div class="variants">
          <span
            v-for="variant in variants"
            :key="variant.variantId"
            @click="updateImage(variant.variantImage)"
            class="colorBox"
            :style="{ backgroundColor: variant.variantColor }"
          >
            {{ variant.variantColor }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let product = ref("Burberry");
let productImage = ref("/img/frames/women/oval/frameovalbu1.png");
let features = ref(["Plastika", "Odgovara svim oblicima lica", "Stakla"]);
let variants = ref([
  {
    variantId: 1,
    variantColor: "blue",
    variantImage: ref("/img/frames/women/oval/frameovalbu1.png"),
  },
  {
    variantId: 2,
    variantColor: "brown",
    variantImage: ref("/img/frames/women/oval/frameovalbu1brown.png"),
  },
  {
    variantId: 3,
    variantColor: "darkbrown",
    variantImage: ref("/img/frames/women/oval/frameovalbu1darkbrown.png"),
  },
]);

function updateImage(variantImage) {
  productImage.value = variantImage;
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 70px;
  .product {
    margin: 0 auto;
    width: 40%;

    .image {
      width: 30%;

      img {
        width: 100%;
      }
    }
    .colorBox {
      width: 40px;
      height: 40px;
      display: inline-block;
      border: 5px solid #ccc;
      cursor: pointer;
    }
  }
}
</style>
