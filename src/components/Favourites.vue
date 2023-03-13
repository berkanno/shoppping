<template>
  <v-container>
    <v-row>
      <v-col cols="3"> </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useAppStore } from "@/store/app";
import { mapState } from "pinia";
export default {
  data() {
    return {
      favouriteProducts: [],
    };
  },
  computed: {
    ...mapState(useAppStore, ["shopItems"]),
  },
  beforeMount() {
    for (let i = 0; i < this.shopItems.length; i++) {
      this.favouriteProducts.push(
        this.shopItems[i].filter((x) => x.likeIconColor == "purple-darken-3")
      );
    }
    console.log(this.favouriteProducts);
    console.log(this.shopItems);
  },
};
</script>
