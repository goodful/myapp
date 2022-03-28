import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => {
      return import("../views/Form.vue")
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => {
      return import("../views/Login.vue")
    },
  },
  {
    path: "/",
    name: "homeuser",
    component: () => {
      return import("../views/home/HomeUser.vue")
    },
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach(function (to, from, next) {
  console.log(to, from);
  if (to.name === "login") {
    next()
  } else {
    let token = localStorage.getItem("token");
    if (!token)return next({name: "login"})
    if (token)return next()
  }

})

export default router;