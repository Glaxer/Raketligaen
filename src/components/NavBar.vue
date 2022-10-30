<script lang="ts" setup></script>

<template>
  <div class="h-screen w-60 bg-primary text-lg">
    <div class="p-4 flex justify-center">
      <a href="/"><img src="../assets/logo.png" width="100" /></a>
    </div>
    <nav>
      <ul>
        <a href="/matches">
          <li class="text-white bg-secondary p-2 hover:bg-orange">Kampe</li>
        </a>
        <a href="/league-table">
          <li class="text-white p-2 hover:bg-orange">Stilling</li>
        </a>
        <a href="/teams">
          <li class="text-white p-2 hover:bg-orange">Hold</li>
        </a>
        <a href="/players">
          <li class="text-white p-2 hover:bg-orange">Spillere</li>
        </a>
        <a href="/signup">
          <li class="text-white p-2 hover:bg-orange">Tilmelding</li>
        </a>
        <a href="/sponsors-and-prizes">
          <li class="text-white p-2 hover:bg-orange">Info & Regler</li>
        </a>
        <a href="/about">
          <li class="text-white p-2 hover:bg-orange">Om Os</li>
        </a>
        <a href="/sponsors-and-prizes">
          <li class="text-white p-2 hover:bg-orange">Sponsorer & Præmier</li>
        </a>
      </ul>
    </nav>
  </div>
</template>
