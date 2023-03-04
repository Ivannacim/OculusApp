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
import productImage from "../assets/img/lg-brown.png";

let product = ref("Pradica");
let features = ref(["Plastika", "Odgovara svim oblicima lica", "Stakla"]);
let variants = ref([
  {
    variantId: 1,
    variantColor: "red",
    variantImage: ref("../assets/img/lg-brown.png"),
  },
  {
    variantId: 2,
    variantColor: "white",
    variantImage: ref("../assets/img/lg3-brown.png"),
  },
  {
    variantId: 3,
    variantColor: "black",
    variantImage: ref("../assets/img/lg4-brown.png"),
  },
]);

function updateImage(variantImage) {
  productImage.value = variantImage;
}
</script>
