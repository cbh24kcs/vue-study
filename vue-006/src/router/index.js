import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/about",
    component: () => import("@/views/about.vue"),
  },
  {
    path: "/new",
    component: () => import("@/views/new.vue"),
  },
  {
    path: "/introduction",
    component: () => import("@/views/introduction.vue"),
  },
];

const router = new VueRouter({
  // mode: "history",
  routes,
});

export default router;
