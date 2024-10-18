import { createRouter, createWebHistory } from "vue-router";
import PenilaianView from "../views/PenilaianView.vue";
import AbsensiView from "../views/AbsensiView.vue";

const routes = [
  {
    path: "/",
    name: "PenilaianView",
    component: PenilaianView,
  },
  {
    path: "/absensi",
    name: "AbsensiView",
    component: AbsensiView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
