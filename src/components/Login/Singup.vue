<template>
  <v-row justify="center">
    <v-col cols="5">
      <v-card class="mt-10 py-5" elevation="10">
        <v-container>
          <v-text-field
            color="purple-darken-1"
            label="First name"
            variant="outlined"
            clearable
            placeholder="john"
          ></v-text-field>

          <v-text-field
            color="purple-darken-1"
            label="Last name"
            variant="outlined"
            clearable
            placeholder="doe"
          ></v-text-field>

          <v-text-field
            color="purple-darken-1"
            label="Email"
            variant="outlined"
            placeholder="johndoe@gmail.com"
            type="email"
            clearable
          ></v-text-field>

          <v-text-field
            color="purple-darken-1"
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            type="password"
            clearable
          ></v-text-field>

          <v-checkbox
            color="purple-darken-1"
            label="I agree to site terms and conditions"
          ></v-checkbox>
        </v-container>

        <v-card-actions class="mr-3">
          <v-row justify="end">
            <v-col cols="3" class="mt-3 text-right">
              <router-link to="/login"> Sing in </router-link>
            </v-col>
            <v-col cols="3">
              <v-btn class="bg-purple-darken-4">
                <router-link to="/" class="text-decoration-none text-white">
                  Sing up
                </router-link>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
