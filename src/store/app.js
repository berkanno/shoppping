// Utilities
import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    shopItems:
      localStorage.getItem("arrayData") == ""
        ? []
        : JSON.parse(localStorage.getItem("arrayData")),

    showCounter: localStorage.getItem("counter"),
    likeNumber:
      localStorage.getItem("likeNumberStore") == 0
        ? 0
        : JSON.parse(localStorage.getItem("likeNumberStore")),
  }),
  getters: {
    getState(state) {
      return state;
    },
  },
  actions: {
    addShopItem(value, arrayIndex) {
      if (this.shopItems[arrayIndex] == undefined) {
        console.log("çalışıyor");
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
              this.shopItems[arrayIndex][i].getNumberCount = false;
              localStorage.setItem("arrayData", JSON.stringify(this.shopItems));
            }
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
      localStorage.setItem("arrayData", JSON.stringify(this.shopItems));
      localStorage.setItem("likeNumberStore", this.likeNumber);
    },
    onShowIconClickStore(index, arrayIndex) {
      if (this.shopItems[arrayIndex][index].showIcon == "mdi-chevron-right") {
        this.shopItems[arrayIndex][index].showIcon = "mdi-chevron-down";
        this.shopItems[arrayIndex][index].showDetails = true;
      } else {
        this.shopItems[arrayIndex][index].showIcon = "mdi-chevron-right";
        this.shopItems[arrayIndex][index].showDetails = false;
      }
      localStorage.setItem("arrayData", JSON.stringify(this.shopItems));
    },
    onAddOrNotAdd(index, arrayIndex, value, getAnswer) {
      this.shopItems[arrayIndex][index].showNumber += value;
      if (this.shopItems[arrayIndex][index].showNumber < 0) {
        this.shopItems[arrayIndex][index].showNumber = 0;
      }
      this.productCount(index, arrayIndex, getAnswer);
      localStorage.setItem("arrayData", JSON.stringify(this.shopItems));
    },
    productCount(index, arrayIndex, value) {
      this.shopItems[arrayIndex][index].getNumberCount = value;
      if (this.shopItems[arrayIndex][index].getNumberCount) {
        this.showCounter++;
      } else {
        this.showCounter--;
      }
      localStorage.setItem("counter", this.showCounter);
    },
  },
});
