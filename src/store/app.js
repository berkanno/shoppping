// Utilities
import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    shopItems:
      localStorage.getItem("Kaydedildi") == ""
        ? []
        : JSON.parse(localStorage.getItem("Kaydedildi")),
    likeNumber:
      localStorage.getItem("likeNumber") == ""
        ? 0
        : JSON.parse(localStorage.getItem("likeNumberLocal")),
  }),
  getters: {
    getState(state) {
      return state;
    },
  },
  actions: {
    addShopItem(value, arrayIndex) {
      if (this.shopItems[arrayIndex] == "") {
        axios
          .get("https://api.escuelajs.co/api/v1/products")
          .then((response) => {
            this.shopItems[arrayIndex] = response.data
              .filter((x) => x.category.id == value)
              .splice(0, 32);
            for (let i = 0; i < this.shopItems[arrayIndex].length; i++) {
              this.shopItems[arrayIndex][i].showIcon = "mdi-chevron-right";
              this.shopItems[arrayIndex][i].showDetails = false;
              this.shopItems[arrayIndex][i].showNumber = 0;
              this.shopItems[arrayIndex][i].likeIcon = "mdi-heart-outline";
              this.shopItems[arrayIndex][i].likeIconColor = "black";
            }
            localStorage.setItem(
              "Kaydedildi",
              JSON.stringify(this.shopItems[arrayIndex])
            );
          });
      }
    },
    onLikeIconClickStore(index, arrayIndex) {
      if (this.shopItems[arrayIndex][index].likeIconColor == "black") {
        this.shopItems[arrayIndex][index].likeIconColor = "purple-darken-3";
        this.shopItems[arrayIndex][index].likeIcon = "mdi-heart";
        this.likeNumber++;
      } else {
        this.shopItems[arrayIndex][index].likeIconColor = "black";
        this.shopItems[arrayIndex][index].likeIcon = "mdi-heart-outline";
        this.likeNumber--;
      }
      localStorage.setItem("Kaydedildi", JSON.stringify(this.shopItems));
      localStorage.setItem("likeNumberLocal", JSON.stringify(this.likeNumber));
    },
    onShowIconClickStore(index, arrayIndex) {
      if (this.shopItems[arrayIndex][index].showIcon == "mdi-chevron-right") {
        this.shopItems[arrayIndex][index].showIcon = "mdi-chevron-down";
        this.shopItems[arrayIndex][index].showDetails = true;
      } else {
        this.shopItems[arrayIndex][index].showIcon = "mdi-chevron-right";
        this.shopItems[arrayIndex][index].showDetails = false;
      }
      localStorage.setItem("Kaydedildi", JSON.stringify(this.shopItems));
    },
    onAddOrNotAdd(index, arrayIndex, value) {
      this.shopItems[arrayIndex][index].showNumber += value;
      if (this.shopItems[arrayIndex][index].showNumber < 0) {
        this.shopItems[arrayIndex][index].showNumber = 0;
      } else if (this.shopItems[arrayIndex][index].showNumber == 0) {
      } else if (this.shopItems[arrayIndex][index].showNumber == 1) {
      }
    },
  },
});
