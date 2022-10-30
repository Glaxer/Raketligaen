import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'navBar',
  state: () => ({
    active: '/',
  }),
  getters: {
    activeMenuItem: (state) => state.active,
  },
  actions: {},
});
