<template>
  <div class="hero-image"></div>
  <div class="content-wrapper">
    <FramesForWomen :images="images" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import FramesForWomen from "../components/FramesForWomen.vue";

let images = ref([
  {
    id: 1,
    src: "../assets/img/frames/women/Cetvrtaste/framesquarear1.png",
    alt: "Random image 1",
    category: "square",
  },
  {
    id: 2,
    src: "https://picsum.photos/200/300?random=2",
    alt: "Random image 2",
    category: "square",
  },
  {
    id: 3,
    src: "https://picsum.photos/200/300?random=3",
    alt: "Random image 3",
    category: "square",
  },
  {
    id: 4,
    src: "https://picsum.photos/200/300?random=4",
    alt: "Random image 4",
    category: "oval",
  },
  {
    id: 5,
    src: "https://picsum.photos/200/300?random=5",
    alt: "Random image 5",
    category: "oval",
  },
  {
    id: 6,
    src: "https://picsum.photos/200/300?random=6",
    alt: "Random image 6",
    category: "oval",
  },
  {
    id: 7,
    src: "https://picsum.photos/200/300?random=7",
    alt: "Random image 1",
    category: "pilot",
  },
  {
    id: 8,
    src: "https://picsum.photos/200/300?random=8",
    alt: "Random image 2",
    category: "pilot",
  },
  {
    id: 9,
    src: "https://picsum.photos/200/300?random=9",
    alt: "Random image 3",
    category: "pilot",
  },
  {
    id: 10,
    src: "https://picsum.photos/200/300?random=10",
    alt: "Random image 4",
    category: "cat-eye",
  },
  {
    id: 11,
    src: "https://picsum.photos/200/300?random=11",
    alt: "Random image 5",
    category: "cat-eye",
  },
  {
    id: 12,
    src: "https://picsum.photos/200/300?random=12",
    alt: "Random image 6",
    category: "cat-eye",
  },
  {
    id: 13,
    src: "https://picsum.photos/200/300?random=13",
    alt: "Random image 4",
    category: "round",
  },
  {
    id: 14,
    src: "https://picsum.photos/200/300?random=14",
    alt: "Random image 5",
    category: "round",
  },
  {
    id: 15,
    src: "https://picsum.photos/200/300?random=15",
    alt: "Random image 6",
    category: "round",
  },
]);
</script>

<style>
.hero-image {
  height: 600px;
  background-image: url("../assets/img/pexels-ali-pazani-2810835.jpg");
  background-size: cover;
}
</style>
