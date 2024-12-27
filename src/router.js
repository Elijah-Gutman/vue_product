import { createWebHistory, createRouter } from "vue-router";

// import Signup from "./components/Signup.vue";
// import Login from "./components/Login.vue";
// import LogoutLink from "./components/LogoutLink.vue";
import ProductsPage from "./components/ProductsPage.vue";
import ProductsNew from "./components/ProductsNew.vue";
import Home from "./components/Home.vue";

const routes = [
  // { path: "/signup", component: Signup },
  // { path: "/login", component: Login },
  // { path: "/logout", component: LogoutLink },
  { path: "/products", component: ProductsPage },
  { path: "/products/new", component: ProductsNew },
  { path: "/", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
