<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-container>
        <v-row justify="center">
          <v-col cols="3" v-for="(item, i) in getData.slice(0, 32)" :key="item">
            <v-card height="338" class="mb-5" width="100%">
              <v-carousel
                height="180"
                hide-delimiters
                show-arrows="hover"
                progress="purple-darken-4"
              >
                <v-carousel-item v-for="value in item.images" :key="value">
                  <v-img :src="value" width="100%"></v-img>
                </v-carousel-item>
              </v-carousel>
              <v-row>
                <v-col cols="12">
                  <v-card height="50" flat>
                    <v-card-text
                      class="text-overline text-center text-purple-darken-4"
                      >{{ item.title }}</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-card flat height="36">
                    <v-card-text
                      class="text-overline text-center text-purple-darken-1"
                      >{{ item.price }}$</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>

              <v-btn
                class="mt-3"
                width="100%"
                flat
                @click="($event) => onClick(i, counter++)"
              >
                <v-icon
                  color="purple-darken-4"
                  size="40"
                  :icon="item.icon"
                ></v-icon>
              </v-btn>
            </v-card>
            <v-col
              cols="12"
              class="text-center text-overline text-purple-darken-4"
              v-if="item.showDetails"
            >
              {{ item.description }}
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      getData: [],
      counter: 3,
    };
  },
  methods: {
    onClick(i) {
      if (this.counter % 2) {
        if (this.getData[i].showDetails == false) {
          this.getData[i].icon = "mdi-chevron-right";
          this.getData[i].showDetails = true;
        } else {
          this.getData[i].icon = "mdi-chevron-right";
          this.getData[i].showDetails = false;
        }
      } else {
        if (this.getData[i].showDetails == true) {
          this.getData[i].icon = "mdi-chevron-down";
          this.getData[i].showDetails = false;
        } else {
          this.getData[i].icon = "mdi-chevron-down";
          this.getData[i].showDetails = true;
        }
      }
      return;
    },
  },
  watch: {
    counter(value) {
      console.log(value);
    },
  },

  beforeMount() {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        this.getData = response.data.filter(
          (x) => x.category.name == "Clothes"
        );
        for (let i = 0; i < this.getData.length; i++) {
          this.getData[i].icon = "mdi-chevron-right";
          this.getData[i].showDetails = false;
        }
      })
      .catch((e) => console.log("hata"));
  },
};
</script>
