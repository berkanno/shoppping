<template>
  <v-app>
    <app-toolbar />
    <router-view />
    <app-footer />
  </v-app>
</template>

<script>
import appToolbar from "@/views/toolbar.vue";
import appFooter from "@/views/Footer.vue";
export default {
  components: {
    appToolbar,
    appFooter,
  },
};
</script>
