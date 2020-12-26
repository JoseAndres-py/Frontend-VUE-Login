import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/panel",
    name: "Panel",
    component: () =>
      import(/* webpackChunkName: "panel" */ "../views/Panel.vue"),
    meta: {
      requieresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requieresAuth)) {
    if (localStorage.getItem("jwt") === null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
