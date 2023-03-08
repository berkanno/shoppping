<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        {{ shoppingCount }}
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { useAppStore } from "@/store/app";
import { mapState } from "pinia";
export default {
  methods: {
    ...mapState(useAppStore, ["shoppingCount"]),
  },
  watch: {
    shoppingCount: {
      handler(newValue, oldValue) {
        console.log(newValue);
      },
      deep: true,
    },
  },
};
</script>
