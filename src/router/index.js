import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: ()=> import('../views/About'),
  },
  {
    path: "/ideas",
    name: "Ideas",
    component: ()=> import('../views/Ideas'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;