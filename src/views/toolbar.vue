<template>
  <v-toolbar class="py-2" flat color="white">
    <v-col cols="2">
      <v-card class="text-purple-darken-4 text-center" flat>
        <v-card-title class="text-h2 font-weight-medium">eXe</v-card-title>
      </v-card>
    </v-col>

    <v-col cols="6">
      <v-row justify="end">
        <v-col cols="2">
          <router-link to="/" class="text-decoration-none">
            <v-btn color="purple-darken-3">
              <v-icon icon="mdi-home" size="40"></v-icon>
            </v-btn>
          </router-link>
        </v-col>
        <v-col cols="2">
          <v-btn color="purple-darken-4">
            <v-icon icon="mdi-shopping" size="40"></v-icon>
            <v-row>
              <v-col class="text-h6"> 6</v-col>
            </v-row>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn color="purple-darken-4">
            <v-icon icon="mdi-heart" size="40"></v-icon>
            <v-row>
              <v-col class="text-h6" v-if="likeNumber != 0"> {{ likeNumber }} </v-col>
            </v-row>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <v-row justify="end">
      <v-col cols="4" class="text-end">
        <router-link to="/login" class="text-decoration-none">
          <v-btn class="bg-purple-darken-4">
            <v-row>
              <v-col class="mr-2">Login</v-col>
            </v-row>
            <v-icon icon="mdi-login"></v-icon>
          </v-btn>
        </router-link>
      </v-col>
      <v-col cols="3">
        <router-link to="/singup" class="text-decoration-none">
          <v-btn color="purple-darken-4 text-overline" size="40">
            singup
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-toolbar>
</template>
<script>
import { useAppStore } from "@/store/app";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useAppStore, ["likeNumber"]),
  },
};
</script>
