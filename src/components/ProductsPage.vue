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
  <div class="bg-gray-50 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-semibold text-gray-900">All Products</h1>
    </div>
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
      <div
        class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
        v-for="product in products"
        v-bind:key="product.id"
      >
        <img v-bind:src="product.image_url" alt="Product Image" class="w-full h-72 object-cover" />
        <div class="p-6 space-y-4">
          <h2 class="text-2xl font-medium text-gray-900">{{ product.name }}</h2>
          <p class="text-lg font-semibold text-gray-800">Price: ${{ product.price }}</p>
          <div class="mt-4">
            <button
              class="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none transition duration-300"
              @click="handleShowProduct(product)"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
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
