import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import WelcomePage from "../components/welcome/WelcomeView.vue";
import DashboardPage from "../components/dashboard/DashBoard.vue";
import SignupPage from "../components/auth/SignUp.vue";
import SigninPage from "../components/auth/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: WelcomePage },
  { path: "/signup", component: SignupPage },
  { path: "/signin", component: SigninPage },
  {
    path: "/dashboard",
    component: DashboardPage,
    beforeEnter(to, from, next) {
      if (store.state.idToken) {
        next();
      } else {
        next("/signin");
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
