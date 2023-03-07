<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="3"
            v-for="(item, i) in getData.slice(0, 32)"
            :key="item"
            class="mb-4"
          >
            <v-card height="355" width="100%">
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
                  <v-card height="40" flat class="mt-2">
                    <v-card-text
                      class="text-overline text-center text-purple-darken-4"
                      >{{ item.title }}</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-card flat height="50">
                    <v-card-text
                      class="text-h4 text-center text-purple-darken-1"
                      >{{ item.price }}$</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn
                  width="100%"
                  height="100%"
                  color="purple-darken-4"
                  @click="($event) => onClick(i, counter++)"
                  variant="outlined"
                >
                  <v-icon
                    color="purple-darken-4"
                    size="50"
                    :icon="item.icon"
                  ></v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-col cols="12" v-if="item.showDetails" class="mt-3">
              <v-card height="100%" flat>
                <v-row>
                  <v-col cols="12">
                    <v-card height="100" flat>
                      <v-card-text
                        class="text-center text-overline text-purple-darken-1"
                      >
                        {{ item.description }}
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12">
                    <v-card width="100%" flat>
                      <v-row justify="center">
                        <v-col cols="12" class="mx-3">
                          <v-row>
                            <v-col cols="3" class="ml-2"
                              ><v-btn
                                size="40"
                                color="purple-darken-4"
                                @click="($event) => selectNumber(i, number++)"
                              >
                                <v-icon icon="mdi-plus"></v-icon> </v-btn
                            ></v-col>
                            <v-col cols="5">
                              <v-card width="100%" flat>
                                <v-card-text
                                  class="text-center text-h4 text-purple-darken-1"
                                  >{{ item.showNumber }}</v-card-text
                                >
                              </v-card>
                            </v-col>
                            <v-col cols="3">
                              <v-btn
                                size="40"
                                color="purple-darken-4"
                                @click="($event) => selectNumber(i, number--)"
                              >
                                <v-icon icon="mdi-minus"></v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
import { toHandlers } from "vue";
export default {
  data() {
    return {
      getData: [],
      counter: 3,
      number: 0,
    };
  },
  methods: {
    onClick(i) {
      if (this.counter % 2) {
        if (this.getData[i].showDetails == false) {
          this.getData[i].icon = "mdi-chevron-down";
          this.getData[i].showDetails = true;
        } else {
          this.getData[i].icon = "mdi-chevron-right";
          this.getData[i].showDetails = false;
        }
      } else {
        if (this.getData[i].showDetails == true) {
          this.getData[i].icon = "mdi-chevron-right";
          this.getData[i].showDetails = false;
        } else {
          this.getData[i].icon = "mdi-chevron-down";
          this.getData[i].showDetails = true;
        }
      }
      return;
    },
    selectNumber(i) {
      this.getData[i].showNumber += this.number;
      if (this.getData[i].showNumber < 0) {
        this.getData[i].showNumber = 0;
      }
      this.number = 0;
    },
  },

  beforeMount() {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        this.getData = response.data.filter((x) => x.category.id == 1);
        for (let i = 0; i < this.getData.length; i++) {
          this.getData[i].icon = "mdi-chevron-right";
          this.getData[i].showDetails = false;
          this.getData[i].showNumber = 0;
        }
      })
      .catch((e) => console.log("hata"));
  },
  watch: {
    number: {
      handler(newValue, oldValue) {
        if (newValue < 0) {
          this.number = 0;
        }
      },
      deep: true,
    },
  },
};
</script>
