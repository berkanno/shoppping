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
            v-model="sendToFirstName"
          ></v-text-field>

          <v-text-field
            color="purple-darken-1"
            label="Last name"
            variant="outlined"
            clearable
            placeholder="doe"
            v-model="sendToLastName"
          ></v-text-field>

          <v-text-field
            color="purple-darken-1"
            label="Email"
            variant="outlined"
            placeholder="johndoe@gmail.com"
            type="email"
            clearable
            v-model="sendToEmail"
          ></v-text-field>

          <v-text-field
            color="purple-darken-1"
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            type="password"
            clearable
            v-model="sendToPassword"
          ></v-text-field>

          <v-checkbox
            color="purple-darken-1"
            label="I agree to site terms and conditions"
            v-model="sendCheckBox"
          ></v-checkbox>
        </v-container>

        <v-card-actions class="mr-3">
          <v-row justify="end">
            <v-col cols="3" class="mt-3 text-right">
              <router-link to="/login"> Sing in </router-link>
            </v-col>
            <v-col cols="3">
              <v-btn
                class="bg-purple-darken-4"
                @click="($event) => sendToUser()"
              >
                Sing up
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sendToFirstName: "",
      sendToLastName: "",
      sendToEmail: "",
      sendToPassword: "",
      sendToCheckBox: false,
    };
  },
  methods: {
    sendToUser() {
      axios
        .post("https://exe-shopping-default-rtdb.firebaseio.com/users.json", {
          userName: this.sendToFirstName,
          userLastName: this.sendToLastName,
          userEmail: this.sendToEmail,
          userPassword: this.sendToPassword,
        })
        .then((res) => console.log(res.status))
        .catch((e) => console.log("hata"));
    },
  },
};
</script>
