import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Alice from "../pages/Alice.vue";
import Bob from "../pages/Bob.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
    children: [
      {
        path: "alice",
        component: Alice,
      },
      {
        path: "bob",
        component: Bob,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
