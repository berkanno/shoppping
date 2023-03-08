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
          <v-col cols="3" class="mt-2">
          <v-row justify="center" class=" mr-4">
           <router-link to="/" class="text-decoration-none">
           <v-icon icon="mdi-home-outline"
           size="50"
           color="purple-darken-3"
           end>

           </v-icon>
           </router-link>

            <router-link to="/favourites" class="text-decoration-none px-4">
              <v-icon
                icon="mdi-shopping-outline"
                size="45"
                color="purple-darken-3"
                end
              >
              </v-icon>
            </router-link>
            <router-link to="/shopcounter" class="text-decoration-none">
              <v-icon
                icon="mdi-heart-outline"
                size="45"
                color="purple-darken-2"
                end
                
              ></v-icon>
            </router-link>
            
            </v-row>
          </v-col>
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
