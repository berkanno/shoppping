// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("@/components/Login/Login.vue"),
      },
      {
        path: "/singup",
        name: "singup",
        component: () => import("@/components/Login/Singup.vue"),
      },
      {
        path: "/clothes",
        name: "clothes",
        component: () => import("@/components/Categories/Clothes.vue"),
      },
      {
        path: "/electronics",
        name: "electronics",
        component: () => import("@/components/Categories/Electronics.vue"),
      },
      {
        path: "/furniture",
        name: "furniture",
        component: () => import("@/components/Categories/Furniture.vue"),
      },
      {
        path: "/shoes",
        name: "shoes",
        component: () => import("@/components/Categories/Shoes.vue"),
      },
      {
        path: "/others",
        name: "others",
        component: () => import("@/components/Categories/Others.vue"),
      },
      {
        path: "/shopcounter",
        name: "shopcounter",
        component: () => import("@/components/ShoppingCounter.vue"),
      },
      {
        path: "/favourites",
        name: "favourites",
        component: () => import("@/components/Favourites.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
