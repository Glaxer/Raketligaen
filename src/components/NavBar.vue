<script lang="ts" setup></script>

<template>
  <div class="h-full min-h-screen sticky w-60 bg-primary text-lg">
    <div class="p-4 flex justify-center">
      <router-link to="/" v-slot="{ href, navigate }" custom>
        <a :href="href" @click="navigate">
          <img src="../assets/logo.png" width="100" />
        </a>
      </router-link>
    </div>
    <nav>
      <ul>
        <router-link
          to="/league-table"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          custom
        >
          <a :href="href" @click="navigate">
            <li
              :class="[
                isActive && 'router-link-active',
                isExactActive && 'router-link-exact-active',
              ]"
              class="text-white p-2 hover:bg-tertiary"
            >
              {{ route.name }}
            </li>
          </a>
        </router-link>
        <router-link
          to="/matches"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          custom
        >
          <a :href="href" @click="navigate">
            <li
              :class="[
                isActive && 'router-link-active',
                isExactActive && 'router-link-exact-active',
              ]"
              class="text-white p-2 hover:bg-tertiary"
            >
              {{ route.name }}
            </li>
          </a>
        </router-link>
        <router-link
          to="/teams"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          custom
        >
          <a :href="href" @click="navigate">
            <li
              :class="[
                isActive && 'router-link-active',
                isExactActive && 'router-link-exact-active',
              ]"
              class="text-white p-2 hover:bg-tertiary"
            >
              {{ route.name }}
            </li>
          </a>
        </router-link>
        <router-link
          to="/players"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          custom
        >
          <a :href="href" @click="navigate">
            <li
              :class="[
                isActive && 'router-link-active',
                isExactActive && 'router-link-exact-active',
              ]"
              class="text-white p-2 hover:bg-tertiary"
            >
              {{ route.name }}
            </li>
          </a>
        </router-link>
        <router-link
          to="/signup"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          custom
        >
          <a :href="href" @click="navigate">
            <li
              :class="[
                isActive && 'router-link-active',
                isExactActive && 'router-link-exact-active',
              ]"
              class="text-white p-2 hover:bg-tertiary"
            >
              {{ route.name }}
            </li>
          </a>
        </router-link>
        <router-link
          to="/rules"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          custom
        >
          <a :href="href" @click="navigate">
            <li
              :class="[
                isActive && 'router-link-active',
                isExactActive && 'router-link-exact-active',
              ]"
              class="text-white p-2 hover:bg-tertiary"
            >
              {{ route.name }}
            </li>
          </a>
        </router-link>
        <router-link
          to="/about"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          custom
        >
          <a :href="href" @click="navigate">
            <li
              :class="[
                isActive && 'router-link-active',
                isExactActive && 'router-link-exact-active',
              ]"
              class="text-white p-2 hover:bg-tertiary"
            >
              {{ route.name }}
            </li>
          </a>
        </router-link>
        <router-link
          to="/sponsors-and-prizes"
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          custom
        >
          <a :href="href" @click="navigate">
            <li
              :class="[
                isActive && 'router-link-active',
                isExactActive && 'router-link-exact-active',
              ]"
              class="text-white p-2 hover:bg-tertiary"
            >
              {{ route.name }}
            </li>
          </a>
        </router-link>
      </ul>
    </nav>
    <div class="absolute bottom-10">
      <a href="https://www.razer.com/eu-en" target="_blank">
        <img src="../assets/Razer.png" width="232" class="mx-1 py-2" />
      </a>
      <a href="https://www.elgiganten.dk" target="_blank">
        <img src="../assets/Elgiganten.png" width="232" class="mx-1 py-2" />
      </a>
      <a href="https://esportsadvokaten.dk" target="_blank">
        <img src="../assets/Advokatgruppen.png" width="232" class="mx-1 py-2" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  background-color: var(--color-secondary);
}
</style>
