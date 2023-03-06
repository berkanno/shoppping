<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-container>
        <v-row justify="center">
          <v-col cols="3" v-for="item in getData.slice(0, 32)" :key="item">
            <v-card height="339" elevation="24" class=" mb-5">
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
                    <v-card-text class="text-overline text-center">{{
                      item.title
                    }}</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                    <v-card flat height="36">

                  <v-card-text class="text-h6 text-center text-purple-darken-1"
                    >{{ item.price }}$</v-card-text
                  >
                    </v-card>
                </v-col>
              </v-row>
              
                
                    <v-btn class="mt-3" width="100%">
                        <v-icon icon="mdi-chevron-down"></v-icon>
                    </v-btn>
                
              
            </v-card>
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
    };
  },
  beforeMount() {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then(
        (response) =>
          (this.getData = response.data.filter(
            (x) => x.category.name == "Clothe"
          ))
      )
      .catch((e) => console.log("hata"));
  },
};
</script>
