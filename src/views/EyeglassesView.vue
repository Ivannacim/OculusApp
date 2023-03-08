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
    src: "/img/frames/women/square/framesquarear1.png",
    alt: "Armani frame",
    category: "square",
    brand: "Armani",
    kod: "AX1032",
  },
  {
    id: 2,
    src: "/img/frames/women/square/framesquarear2.png",
    alt: "Armani frame",
    category: "square",
    brand: "Armani",
    kod: "AX1047",
  },
  {
    id: 3,
    src: "/img/frames/women/square/framesquarebu1.png",
    alt: "Burberry frame",
    category: "square",
    brand: "Burberry",
    kod: "BU2343",
  },
  {
    id: 4,
    src: "/img/frames/women/square/framesquaremk1.png",
    alt: "Michael Kors frame",
    category: "square",
    brand: "Michael Kors",
    kod: "MK4054",
  },
  {
    id: 5,
    src: "/img/frames/women/square/framesquarepr1.png",
    alt: "Prada frame",
    category: "square",
    brand: "Prada",
    kod: "PR 16CV",
  },
  {
    id: 6,
    src: "/img/frames/women/square/framesquarerayb1.png",
    alt: "Ray Ban frame",
    category: "square",
    brand: "Ray Ban",
    kod: "RB 8573",
  },
  {
    id: 7,
    src: "/img/frames/women/oval/frameovalar1.png",
    alt: "Armani frame",
    category: "oval",
  },
  {
    id: 8,
    src: "/img/frames/women/oval/frameovalar2.png",
    alt: "Armani frame",
    category: "oval",
  },
  {
    id: 9,
    src: "/img/frames/women/oval/frameovalbu1.png",
    alt: "Burberry frame",
    category: "oval",
  },
  {
    id: 10,
    src: "/img/frames/women/oval/frameovaldg1.png",
    alt: "Dolce&Gabbana frame",
    category: "oval",
  },
  {
    id: 11,
    src: "/img/frames/women/oval/frameovalmk1.png",
    alt: "Michael Kors frame",
    category: "oval",
  },
  {
    id: 12,
    src: "/img/frames/women/oval/frameovalrayb1.png",
    alt: "Ray Ban frame",
    category: "oval",
  },
  {
    id: 13,
    src: "/img/frames/women/pilot/framepilotbu1.png",
    alt: "Burberry frame",
    category: "pilot",
  },
  {
    id: 14,
    src: "/img/frames/women/pilot/framepilotmk1.png",
    alt: "Michael Kors frame",
    category: "pilot",
  },
  {
    id: 15,
    src: "/img/frames/women/pilot/framepilotpr1.png",
    alt: "Prada frame",
    category: "pilot",
  },
  {
    id: 16,
    src: "/img/frames/women/pilot/framepilotrayb1.png",
    alt: "Ray Ban frame",
    category: "pilot",
  },
  {
    id: 17,
    src: "/img/frames/women/pilot/framepilotvog1.png",
    alt: "Vogue frame",
    category: "pilot",
  },
  {
    id: 18,
    src: "/img/frames/women/cat-eye/framear1.png",
    alt: "Armani frame",
    category: "cat-eye",
  },
  {
    id: 19,
    src: "/img/frames/women/cat-eye/framear2.png",
    alt: "Armani frame",
    category: "cat-eye",
  },
  {
    id: 20,
    src: "/img/frames/women/cat-eye/framebu1.png",
    alt: "Burberry frame",
    category: "cat-eye",
  },
  {
    id: 21,
    src: "/img/frames/women/cat-eye/framemk1.png",
    alt: "Michael Kors frame",
    category: "cat-eye",
  },
  {
    id: 22,
    src: "/img/frames/women/cat-eye/framepr1.png",
    alt: "Prada frame",
    category: "cat-eye",
  },
  {
    id: 23,
    src: "/img/frames/women/round/frameroundar1.png",
    alt: "Armani frame",
    category: "round",
  },
  {
    id: 24,
    src: "/img/frames/women/round/frameroundbu1.png",
    alt: "Burberry frame",
    category: "round",
  },
  {
    id: 25,
    src: "/img/frames/women/round/framerounddg1.png",
    alt: "Dolce&Gabbana frame",
    category: "round",
  },
  {
    id: 26,
    src: "/img/frames/women/round/frameroundmk1.png",
    alt: "Michael Kors frame",
    category: "round",
  },
  {
    id: 27,
    src: "/img/frames/women/round/frameroundpr1.png",
    alt: "Prada frame",
    category: "round",
  },
  {
    id: 28,
    src: "/img/frames/women/round/frameroundrayb1.png",
    alt: "Ray Ban frame",
    category: "round",
  },
]);
</script>

<style>
.hero-image {
  height: 600px;
  background-image: url("/img/pexels-ali-pazani-2810835.jpg");
  background-size: cover;
}
</style>
