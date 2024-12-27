<script>
export default {
  props: {
    products: {
      type: Array,
    },
  },
};
</script>

<template>
  <div>
    <div>
      <h1>All Products</h1>
    </div>
    <div>
      <div v-for="product in products" v-bind:key="product.id">
        <img v-bind:src="product.image_url" alt="Product Image" />
        <div>
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>{{ product.category }}</p>
          <div>
            <p>
              <span>Price:</span>
              ${{ product.price }}
            </p>
            <p>
              <span>Tax Rate:</span>
              {{ product.tax }}%
            </p>
          </div>
          <p>
            <span>Total:</span>
            ${{ product.total }}
          </p>
          <button>View More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
