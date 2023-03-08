// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    counter: 4,
  }),
  getters: {
    doubleCounter: (state) => state.counter * 3,
  },
  actions: {
    increaseCount(newVal) {
       this.counter=newVal;
    },
  },
});
