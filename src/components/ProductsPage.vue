<script>
import axios from "axios";
import ProductsIndex from "./ProductsIndex.vue";
import ProductsNew from "./ProductsNew.vue";
import ProductsShow from "./ProductsShow.vue";
import Modal from "./Modal.vue";

export default {
  components: {
    ProductsIndex,
    ProductsNew,
    ProductsShow,
    Modal,
  },
  data() {
    return {
      products: [],
      currentProduct: null,
      isProductsShowVisible: false,
    };
  },
  created() {
    this.handleIndexProducts();
  },
  methods: {
    handleIndexProducts() {
      axios.get("/products.json").then((response) => {
        console.log("products index", response);
        this.products = response.data;
      });
    },
    handleCreateProduct(params) {
      axios.post("/products.json", params).then((response) => {
        console.log("products create", response);
        this.products.push(response.data);
      });
    },
    handleShowProduct(product) {
      this.currentProduct = product;
      this.isProductsShowVisible = true;
    },
    handleClose() {
      this.isProductsShowVisible = false;
    },
  },
};
</script>

<template>
  <div>
    <h1>All products</h1>
    <div
      class="product-card"
      v-for="product in products"
      v-bind:key="product.id"
    >
      <h2>{{ product.name }}</h2>
      <img
        v-bind:src="product.image_url"
        alt="product image"
        class="product-image"
      />
      <p>Price: ${{ product.price }}</p>
      <button class="info-button" @click="handleShowProduct(product)">
        More Info
      </button>
      <Modal :show="isProductsShowVisible" @close="handleClose">
        <ProductsShow v-if="currentProduct" :product="currentProduct" />
      </Modal>
    </div>
  </div>
</template>

<style>
.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  text-align: center;
  border-radius: 8px;
}

.product-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

.info-button {
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.info-button:hover {
  background-color: #45a049;
}
</style>
