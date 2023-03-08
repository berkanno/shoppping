// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    shoppingCount: [],
  }),
  getters:{
    getState(state){
      return state;
    }
  },
  actions: {
    addShopItem(val) {
      return this.shoppingCount=val;
    },
  },
});
