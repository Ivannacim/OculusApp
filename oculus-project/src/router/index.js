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
      path: "/eyeglasses",
      name: "eyeglasses",
      component: () => import("../views/EyeglassesView.vue"),
    },
  ],
});

export default router;
