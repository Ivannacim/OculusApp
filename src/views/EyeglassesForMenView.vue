<template>
  <div class="hero-image"></div>
  <div class="content-wrapper">
    <FramesForMen :images="images" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import FramesForMen from "../components/FramesForMen.vue";

let images = ref([
  {
    id: 1,
    src: "/img/frames/men/square/squareframear.png",
    alt: "Armani frame",
    category: "square",
    brand: "Armani",
    kod: "AX1034",
  },
  {
    id: 2,
    src: "/img/frames/men/square/squareframemk.png",
    alt: "Michael Kors frame",
    category: "square",
    brand: "Michael Kors",
    kod: "MK4056",
  },
  {
    id: 3,
    src: "/img/frames/men/square/squareframedg.png",
    alt: "Dolce&Gabbana frame",
    category: "square",
    brand: "Dolce&Gabbana",
    kod: "DG3537",
  },
  {
    id: 4,
    src: "/img/frames/men/square/squareframebu.png",
    alt: "Burberry frame",
    category: "square",
    brand: "Burberry",
    kod: "BU5438",
  },
  {
    id: 5,
    src: "/img/frames/men/square/squareframepr.png",
    alt: "Prada frame",
    category: "square",
    brand: "Prada",
    kod: "PR 19CV",
  },
  {
    id: 6,
    src: "/img/frames/men/square/squareframevo.png",
    alt: "Vogue frame",
    category: "square",
    brand: "Vogue",
    kod: "VG351E",
  },
  {
    id: 7,
    src: "/img/frames/men/square/squareframear1.png",
    alt: "Armani frame",
    category: "square",
    brand: "Armani",
    kod: "AX3572",
  },
  {
    id: 8,
    src: "/img/frames/men/oval/ovalframear.png",
    alt: "Armani frame",
    category: "oval",
    brand: "Armani",
    kod: "AX2893",
  },
  {
    id: 9,
    src: "/img/frames/men/oval/ovalframearbu.png",
    alt: "Burberry frame",
    category: "oval",
    brand: "Burberry",
    kod: "BU5435",
  },
  {
    id: 10,
    src: "/img/frames/men/oval/ovalframearmk.png",
    alt: "Michael Kors frame",
    category: "oval",
    brand: "Michael Kors",
    kod: "MK4773",
  },
  {
    id: 11,
    src: "/img/frames/men/oval/ovalframearmkblack.png",
    alt: "Michael Kors frame",
    category: "oval",
    brand: "Michael Kors",
    kod: "MK4771",
  },
  {
    id: 12,
    src: "/img/frames/men/pilot/pilotframemk.png",
    alt: "Michael Kors frame",
    category: "pilot",
    brand: "Michael Kors",
    kod: "MK4778",
  },
  {
    id: 13,
    src: "/img/frames/men/pilot/pilotframemksand.png",
    alt: "Michael Kors frame",
    category: "pilot",
    brand: "Michael Kors",
    kod: "MK3236",
  },
  {
    id: 14,
    src: "/img/frames/men/pilot/pilotframevo.png",
    alt: "Vogue frame",
    category: "pilot",
    brand: "Vogue",
    kod: "VG357G",
  },
  {
    id: 15,
    src: "/img/frames/men/pilot/pilotframevosilver.png",
    alt: "Vogue frame",
    category: "pilot",
    brand: "Vogue",
    kod: "VG357R",
  },
  {
    id: 16,
    src: "/img/frames/men/round/roundframear.png",
    alt: "Armani frame",
    category: "round",
    brand: "Armani",
    kod: "AX5431",
  },
  {
    id: 17,
    src: "/img/frames/men/round/roundframebu.png",
    alt: "Burberry frame",
    category: "round",
    brand: "Burberry",
    kod: "BU5732",
  },
  {
    id: 18,
    src: "/img/frames/men/round/roundframedg.png",
    alt: "Dolce&Gabbana frame",
    category: "round",
    brand: "Dolce&Gabbana",
    kod: "DG2575",
  },
  {
    id: 19,
    src: "/img/frames/men/round/roundframemk.png",
    alt: "Michael Kors frame",
    category: "round",
    brand: "Michael Kors",
    kod: "MK7879",
  },
  {
    id: 20,
    src: "/img/frames/men/round/roundframepr.png",
    alt: "Prada frame",
    category: "round",
    brand: "Prada",
    kod: "PR 18PS",
  },
  {
    id: 21,
    src: "/img/frames/men/round/roundframebu1.png",
    alt: "Burberry frame",
    category: "round",
    brand: "Burberry",
    kod: "BU5731",
  },
  {
    id: 22,
    src: "/img/frames/men/round/roundframevo.png",
    alt: "Vogue frame",
    category: "round",
    brand: "Vogue",
    kod: "VG357V",
  },
]);
</script>

<style lang="scss" scoped>
.hero-image {
  height: 600px;
  background-image: url("/img/pexels-andrea-piacquadio3.jpg");
  background-size: cover;
  background-position: top;

  @media screen and (max-width: 480px) {
    background-position: right;
  }
}
</style>
