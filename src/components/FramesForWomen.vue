<template>
  <div class="frames-container">
    <div class="content-wrapper">
      <h1>Dioptrijski okviri</h1>
      <div class="btn-filtering">
        <button
          class="btn"
          :class="{ active: state.filter === 'all' }"
          @click="filterImages('all')"
        >
          Sve
        </button>
        <button
          class="btn"
          :class="{ active: state.filter === 'square' }"
          @click="filterImages('square')"
        >
          Četvrtasti
        </button>
        <button
          class="btn"
          :class="{ active: state.filter === 'oval' }"
          @click="filterImages('oval')"
        >
          Ovalni
        </button>
        <button
          class="btn"
          :class="{ active: state.filter === 'pilot' }"
          @click="filterImages('pilot')"
        >
          Pilot
        </button>
        <button
          class="btn"
          :class="{ active: state.filter === 'cat-eye' }"
          @click="filterImages('cat-eye')"
        >
          Mačkasti
        </button>
        <button
          class="btn"
          :class="{ active: state.filter === 'round' }"
          @click="filterImages('round')"
        >
          Okrugli
        </button>
      </div>
      <div class="filteredFrames">
        <div class="frames" v-for="image in filteredImages" :key="image.id">
          <img :src="image.src" :alt="image.alt" />
          <h4>{{ image.brand }}</h4>
          <p>{{ image.kod }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const state = ref({
  filter: "all",
});

const filteredImages = computed(() => {
  if (state.value.filter === "all") {
    return props.images;
  } else {
    return props.images.filter(
      (image) => image.category === state.value.filter
    );
  }
});

const filterImages = (category) => {
  state.value.filter = category;
};
</script>

<style lang="scss" scoped>
.frames-container,
.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin: 20px auto;

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  .btn-filtering {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

    .btn {
      background-color: white;
      color: #313131;
      font-size: 18px;
      font-weight: 700;
      padding: 12px 18px;
      border-style: none;
      border-radius: 5px;
      border: 2px solid transparent;

      &:hover,
      &.active {
        border: 2px solid #313131;
        cursor: pointer;
      }
    }
  }

  .filteredFrames {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
    gap: 20px 20px;

    .frames {
      width: 250px;
      height: 250px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      color: #000;
      text-decoration: none;
      /* border: 1px solid #ccc; */
      border-radius: 7px;
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 0 0 10px rgba(33, 33, 33, 0.3);
        cursor: pointer;
      }

      img {
        width: 100%;
      }

      h4 {
        font-size: 20px;
        font-weight: 700;
        margin-top: 30px;
      }

      p {
        font-size: 18px;
      }
    }
  }
}
</style>
