<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

function setup() {
  const login_form = ref();
  const register_form = ref();
  const store = useAuthStore();

  const login = () => {
    store.dispatch('login', login_form.value);
  };

  const register = () => {
    store.dispatch('register', register_form.value);
  };

  return {
    login_form,
    register_form,
    login,
    register,
  };
}
</script>

<template>
  <main class="p-2">
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <h2>Register</h2>
        <input type="email" placeholder="Email" v-model="register_form.email" />
        <input
          type="password"
          placeholder="Password"
          v-model="register_form.password"
        />
        <input type="submit" value="Register" />
      </form>
      <form class="login" @submit.prevent="login">
        <h2>Login</h2>
        <input type="email" placeholder="Email" v-model="login_form.email" />
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password"
        />
        <input type="submit" value="Login" />
      </form>
    </section>
  </main>
</template>
