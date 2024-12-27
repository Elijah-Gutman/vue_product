<script>
import axios from "axios";
import Header from "./components/Header.vue";
import ProductsPage from "./components/ProductsPage.vue";
import Footer from "./components/Footer.vue";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

export default {
  name: "app",
  components: {
    Header,
    ProductsPage,
    Footer,
  },
};
</script>

<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style></style>
