<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="grid grid-cols-body">
    <div>
      <NavBar />
    </div>
    <div>
      <RouterView />
    </div>
  </div>
  <Footer />
</template>
