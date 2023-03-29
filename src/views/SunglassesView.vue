<template>
  <div class="about">Single product</div>
  <div class="single">{{ $route.params.id }}</div>
  <SingleProduct :id="$route.params.id" />
</template>
<script setup>
import SingleProduct from "../components/SingleProduct.vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params);
</script>
