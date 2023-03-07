<template>
  <v-row justify="center">
    <v-col cols="5">
      <v-card height="500" class="pt-16" flat>
        <v-card class="pt-13 ma-5" elevation="10">
          <v-card-text>
            <v-text-field
              label="Email address"
              placeholder="johndoe@gmail.com"
              type="email"
              clearable
              color="purple-darken-3"
              variant="outlined"
              v-model="getEmail"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              variant="outlined"
              label="Password"
              type="password"
              hint="Enter your password to access this website"
              color="purple-darken-3"
              clearable
              v-model="getPassword"
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="mr-2">
            <v-row justify="end">
              <v-col cols="3" class="">
                <router-link to="/singup" class="text-overline"
                  >Sing up</router-link
                >
              </v-col>
              <v-col cols="3">
                <v-btn color=" text-white " class="mb-10 bg-purple-darken-4">
                  <router-link to="/" class="text-decoration-none text-white">
                    Sing in
                  </router-link>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      getEmail: "",
      getPassword: "",
    };
  },
};
</script>
