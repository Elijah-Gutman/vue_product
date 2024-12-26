<script>
import axios from "axios";
import ProductsIndex from "./ProductsIndex.vue";
import ProductsNew from "./ProductsNew.vue";
export default {
  components: {
    ProductsIndex,
    ProductsNew,
  },
  data: function () {
    return {
      products: [],
    };
  },
  created: function () {
    this.handleIndexProducts();
  },
  methods: {
    handleIndexProducts: function () {
      axios.get("/products.json").then((response) => {
        console.log("products index", response);
        this.products = response.data;
      });
    },
    handleCreatePhoto: function (params) {
      axios
        .post("/products.json", params)
        .then((response) => {
          console.log("products create", response);
          this.products.push(response.data);
        })
        .catch((error) => {
          console.log("products create error", error.response);
        });
    },
  },
};
</script>
<template>
  <main>
    <h1>Welcome to Vue!</h1>
    <ProductsNew v-on:createProduct="handleCreateProduct" />
    <ProductsIndex v-bind:products="products" />
  </main>
</template>
