<script setup lang="ts">
import { ref } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

const _images = [
  {
    id: 1,
    url: 'http://localhost:3000/src/assets/test.jpg',
    title: 'Lasse "Fuzz" Geugjes',
    text: 'Fuzz har +6 års erfaring inden for esportverdenen både fra hans arbejde hos Copenhagen Flames som spiller, træner, manager, turneringsadmin og caster inden for flere danske Rocket League cups bl.a. youSee Esportligaen, OACES og Nordic Championship i Rocket League.',
  },
  {
    id: 2,
    url: 'http://localhost:3000/src/assets/raketligaen.png',
    title: 'Caroline “Bascounter” Stokholm Caspersen',
    text: 'Bascounter har +3 års erfaring inden for esportverdenen bl.a. fra hendes tid som Streaming & Casting afdelingsleder i AaB esport og senere hen som Rocket League afdelingsleder, hvor hun byggede afdelingerne op fra bunden. Hun har ekstensiv erfaring som både admin og caster på flere af de danske turneringer heriblandt OACES, youSee Esportligaen og har castet turneringer i både Rocket League, CS:GO og LoL.',
  },
];

const currentSlide = ref(0);

function slideTo(val: number) {
  currentSlide.value = val;
}
</script>

<template>
  <Carousel
    id="gallery"
    :items-to-show="1"
    :wrap-around="true"
    v-model="currentSlide"
  >
    <Slide v-for="image in _images" :key="image.id">
      <div class="w-2/3 flex p-4">
        <img :src="image.url" width="1000" class="image" />
        <div class="image_text_wrapper">
          <p class="image_title">{{ image.title }}</p>
          <p class="image_text">{{ image.text }}</p>
        </div>
      </div>
    </Slide>
  </Carousel>

  <Carousel
    id="thumbnails"
    :items-to-show="_images.length"
    :wrap-around="false"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="image in _images" :key="image.id">
      <div @click="slideTo(image.id - 1)">
        <img :src="image.url" width="300" class="cursor-pointer" />
      </div>
    </Slide>
  </Carousel>
</template>

<style scoped>
.image_text_wrapper {
  flex-direction: column;
  background-color: white;
  max-width: 200px;
  margin-left: -200px;
}

.image {
  -webkit-mask-image: linear-gradient(to right, black, transparent);
  mask-image: linear-gradient(to right, black, transparent);
}
.image_title {
  font-weight: bold;
  font-size: xx-large;
  padding-bottom: 24px;
  color: var(--color-primary);
}

.image_text {
  font-weight: 400;
}
</style>
