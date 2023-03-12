<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="4"
            v-for="(item, index) in shopItems[0]"
            :key="item"
            class="mb-4"
          >
            <v-card height="355" width="100%" elevation="3">
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
                    <v-row>
                      <v-col cols="6">
                        <v-card-text
                          class="text-h6 text-end text-purple-darken-1"
                          >{{ item.price }}$</v-card-text
                        >
                      </v-col>
                      <v-col cols="6" class="text-center">
                        <v-icon
                          size="30"
                          :icon="item.likeIcon"
                          end
                          class="mt-3"
                          :color="item.likeIconColor"
                          @click="($event) => onLikeIconClick(index, 0)"
                        ></v-icon>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn
                  width="100%"
                  height="100%"
                  color="purple-darken-4"
                  variant="outlined"
                  @click="($event) => onShowIconClick(index, 0)"
                >
                  <v-icon
                    color="purple-darken-4"
                    size="50"
                    :icon="item.showIcon"
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
import { mapActions } from "pinia";
import { useAppStore } from "@/store/app";
import { mapState } from "pinia";
export default {
  data() {
    return {
      getData: [],
      showCounter: 3,
      Dcounter: 20,
      number: 0,
    };
  },
  computed: {
    ...mapState(useAppStore, ["shopItems"]),
  },
  methods: {
    ...mapActions(
      useAppStore,
      ["addShopItem", "onLikeIconClickStore", "onShowIconClickStore"],
    ),

    onLikeIconClick(index, arrayIndex) {
      this.onLikeIconClickStore(index, arrayIndex);
    },
    onShowIconClick(index, arrayIndex) {
      this.onShowIconClickStore(index, arrayIndex);
    },
    selectNumber(i) {
      this.getData[i].showNumber += this.number;
      if (this.getData[i].showNumber < 0) {
        this.getData[i].showNumber = 0;
      }
    },
  },

  beforeMount() {
    this.addShopItem(1, 0);
  },
};
</script>
