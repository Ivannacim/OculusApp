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
    brand: "Armani",
    kod: "AX3574",
  },
  {
    id: 8,
    src: "/img/frames/women/oval/frameovalar2.png",
    alt: "Armani frame",
    category: "oval",
    brand: "Armani",
    kod: "AX2895",
  },
  {
    id: 9,
    src: "/img/frames/women/oval/frameovalbu1.png",
    alt: "Burberry frame",
    category: "oval",
    brand: "Burberry",
    kod: "BU5434",
  },
  {
    id: 10,
    src: "/img/frames/women/oval/frameovaldg1.png",
    alt: "Dolce&Gabbana frame",
    category: "oval",
    brand: "Dolce&Gabbana",
    kod: "DG3531",
  },
  {
    id: 11,
    src: "/img/frames/women/oval/frameovalmk1.png",
    alt: "Michael Kors frame",
    category: "oval",
    brand: "Michael Kors",
    kod: "MK4775",
  },
  {
    id: 12,
    src: "/img/frames/women/oval/frameovalrayb1.png",
    alt: "Ray Ban frame",
    category: "oval",
    brand: "Ray Ban",
    kod: "RB 7854",
  },
  {
    id: 13,
    src: "/img/frames/women/pilot/framepilotbu1.png",
    alt: "Burberry frame",
    category: "pilot",
    brand: "Burberry",
    kod: "BU3475",
  },
  {
    id: 14,
    src: "/img/frames/women/pilot/framepilotmk1.png",
    alt: "Michael Kors frame",
    category: "pilot",
    brand: "Michael Kors",
    kod: "MK3235",
  },
  {
    id: 15,
    src: "/img/frames/women/pilot/framepilotpr1.png",
    alt: "Prada frame",
    category: "pilot",
    brand: "Prada",
    kod: "PR 12VG",
  },
  {
    id: 16,
    src: "/img/frames/women/pilot/framepilotrayb1.png",
    alt: "Ray Ban frame",
    category: "pilot",
    brand: "Ray Ban",
    kod: "RB 7587",
  },
  {
    id: 17,
    src: "/img/frames/women/pilot/framepilotvog1.png",
    alt: "Vogue frame",
    category: "pilot",
    brand: "Vogue",
    kod: "VG357E",
  },
  {
    id: 18,
    src: "/img/frames/women/cat-eye/framear1.png",
    alt: "Armani frame",
    category: "cat-eye",
    brand: "Armani",
    kod: "AX1224",
  },
  {
    id: 19,
    src: "/img/frames/women/cat-eye/framear2.png",
    alt: "Armani frame",
    category: "cat-eye",
    brand: "Armani",
    kod: "AX2312",
  },
  {
    id: 20,
    src: "/img/frames/women/cat-eye/framebu1.png",
    alt: "Burberry frame",
    category: "cat-eye",
    brand: "Burberry",
    kod: "BU4534",
  },
  {
    id: 21,
    src: "/img/frames/women/cat-eye/framemk1.png",
    alt: "Michael Kors frame",
    category: "cat-eye",
    brand: "Michael Kors",
    kod: "MK5477",
  },
  {
    id: 22,
    src: "/img/frames/women/cat-eye/framepr1.png",
    alt: "Prada frame",
    category: "cat-eye",
    brand: "Prada",
    kod: "PR 14SE",
  },
  {
    id: 23,
    src: "/img/frames/women/round/frameroundar1.png",
    alt: "Armani frame",
    category: "round",
    brand: "Armani",
    kod: "AX3431",
  },
  {
    id: 24,
    src: "/img/frames/women/round/frameroundbu1.png",
    alt: "Burberry frame",
    category: "round",
    brand: "Burberry",
    kod: "BU5743",
  },
  {
    id: 25,
    src: "/img/frames/women/round/framerounddg1.png",
    alt: "Dolce&Gabbana frame",
    category: "round",
    brand: "Dolce&Gabbana",
    kod: "DG2574",
  },
  {
    id: 26,
    src: "/img/frames/women/round/frameroundmk1.png",
    alt: "Michael Kors frame",
    category: "round",
    brand: "Michael Kors",
    kod: "MK7873",
  },
  {
    id: 27,
    src: "/img/frames/women/round/frameroundpr1.png",
    alt: "Prada frame",
    category: "round",
    brand: "Prada",
    kod: "PR 18PA",
  },
  {
    id: 28,
    src: "/img/frames/women/round/frameroundrayb1.png",
    alt: "Ray Ban frame",
    category: "round",
    brand: "Ray Ban",
    kod: "RB 8779",
  },
]);
</script>

<style lang="scss" scoped>
.hero-image {
  height: 600px;
  background-image: url("/img/pexels-ali-pazani-2810835.jpg");
  background-size: cover;

  @media screen and (max-width: 480px) {
    background-position: center;
  }
}
</style>
