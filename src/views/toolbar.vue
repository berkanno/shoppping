<template>
  <v-toolbar class="py-2 pt-6" flat color="white">
    <v-row>
      <v-col cols="2">
        <v-card class="text-purple-darken-1 ml-5" flat>
          <v-card-title class="text-h3">eXe</v-card-title>
        </v-card>
      </v-col>

      <v-col cols="10">
        <v-row justify="end">
          <v-col cols="1">
            <v-btn class="bg-purple-darken-1 font-weight-medium">
              <router-link to="/login" class="text-white text-decoration-none">
                login
              </router-link>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn class="font-weight-bold">
              <router-link
                to="/singup"
                class="text-decoration-none text-purple-lighten-1"
              >
                Sing up
              </router-link>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-toolbar>
</template>
<script>
export default {};
</script>
