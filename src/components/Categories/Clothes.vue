<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-container>
        <v-row justify="center">
          <v-col cols="3" v-for="(item, i) in getData.slice(0, 32)" :key="item">
            <v-card height="338" elevation="24" class="mb-5">
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
                    <v-card-text
                      class="text-h6 text-center text-purple-darken-1"
                      >{{ item.price }}$</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>

              <v-btn class="mt-3" width="100%" flat>
                <v-icon
                  :icon="getData[i].icon[counter % 2]"
                  color="purple-darken-4"
                  @click="($event) => getData[i].counter[0]++"
                  size="40"
                ></v-icon>
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
      counter: 0,
      show: "0",
      getSelect: [],
    };
  },
   watch:{ counter(value){

       console.log(value)
   }
   },

  beforeMount() {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        this.getData = response.data.filter((x) => x.category.name == "Clothe");
        for (let i = 0; i < this.getData.length; i++) {
          this.getData[i].icon = ["mdi-chevron-right", "mdi-chevron-down"];
          this.getData[i].counter= {'counter' : 0}
        }

        console.log(this.getData[1].counter);
        console.log(this.getData)
      })
      .catch((e) => console.log("hata"));
  },
  updated() {
    console.log(get[i].counterr[0].counter)
  },
};
</script>
