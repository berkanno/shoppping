<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card height="100%" flat>
            <v-card-title
              class="text-h2 text-center my-3 text-uppercase text-purple-darken-2 font-weight-black"
              >Home</v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat class="mt-10">
          <v-carousel hide-delimiters height="400">
            <v-carousel-item v-for="item in homeCategories" :key="item">
              <v-card flat>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-card height="100%" flat>
                      <v-carousel
                        height="100%"
                        show-arrows="hover"
                        hide-delimiters
                        progress="white"
                      >
                        <v-carousel-item v-for="value in item.img" :key="value">
                          <v-img :src="value" cover> </v-img>
                        </v-carousel-item>
                      </v-carousel>
                    </v-card>
                  </v-col>

                  <v-col cols="4">
                    <v-hover v-slot="{ isHovering, props }">
                      <v-card
                        class="cardHover"
                        height="100%"
                        :elevation="isHovering ? 12 : 2"
                        :class="{ 'on-hover': isHovering }"
                        v-bind="props"
                      >
                        <router-link
                          :to="item.routerlink"
                          class="text-decoration-none"
                        >
                          <v-card
                            height="100%"
                            class="bg-purple-lighten-1 d-flex align-center justify-center"
                          >
                          <v-col cols="12">

                            <v-card-title
                            class="text-h4 font-weight-medium text-center py-5 text-uppercase"
                            >
                            {{ item.title }}
                          </v-card-title>
                        </v-col>
                          </v-card>
                        </router-link>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      homeCategories: [
        {
          title: "clothes",
          img: [
            "https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491__340.jpg",
            "https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596__340.jpg",
            "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg",
            "https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471__340.jpg",
            "https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347__340.jpg",
          ],
          routerlink: "/clothes",
        },
        {
          title: "electronics",
          img: [
            "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg",
            "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822__340.jpg",
            "https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221__340.jpg",
            "https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg",
            "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557__340.jpg",
          ],
          routerlink: "/electronics",
        },
        {
          title: "furniture",
          img: [
            "https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060__340.jpg",
            "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
            "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960__340.jpg",
            "https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497__340.jpg",
            "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070__340.jpg",
            "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg",
            "https://cdn.pixabay.com/photo/2016/11/29/08/42/frame-1868498__340.jpg",
          ],
          routerlink: "/furniture",
        },
        {
          title: "others",
          img: [
            "https://api.lorem.space/image?w=640&h=480&r=7846",
            "https://api.lorem.space/image?w=640&h=480&r=6510",
            "https://api.lorem.space/image?w=640&h=480&r=6476",
            "https://api.lorem.space/image?w=640&h=480&r=5613",
            "https://api.lorem.space/image?w=640&h=480&r=3624",
          ],
          routerlink: "/others",
        },
        {
          title: "shoes",
          img: [
            "https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg",
            "https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918__340.jpg",
            "https://cdn.pixabay.com/photo/2017/08/12/19/01/legs-2635038__340.jpg",
            "https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873__340.jpg",
            "https://cdn.pixabay.com/photo/2013/09/12/19/57/boots-181744__340.jpg",
          ],
          routerlink: "/shoes",
        },
      ],
    };
  },
};
</script>
<style>
.cardHover {
  transition: opacity 0.6s ease-in-out;
}

.cardHover:not(.on-hover) {
  opacity: 0.3;
}


</style>
