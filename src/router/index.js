import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "oculus",
      component: HomeView,
    },
    {
      path: "/eyeglassesforwomen",
      name: "eyeglassesforwomen",
      component: () => import("../views/EyeglassesForWomenView.vue"),
    },
    {
      path: "/eyeglassesformen",
      name: "eyeglassesformen",
      component: () => import("../views/EyeglassesForMenView.vue"),
    },
    {
      path: "/sunglasses",
      name: "sunglasses",
      component: () => import("@/views/SunglassesView.vue"),
    },
    {
      path: "/sunglasses/:id",
      name: "sunglassesSingle",
      component: () => import("@/views/SunglassesSingleView.vue"),
    },
    {
      path: "/lenses",
      name: "lenses",
      component: () => import("@/views/LensesView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactView.vue"),
    },
  ],
});

export default router;
