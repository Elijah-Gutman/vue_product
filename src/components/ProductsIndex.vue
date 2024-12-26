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
    <h1>All products</h1>
    <div v-for="product in products" v-bind:key="product.id">
      <h2>{{ product.name }}</h2>
      <img v-bind:src="product.image_url" />
      <p>Description: {{ product.description }}</p>
      <p>Category: {{ product.category }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Tax Rate: {{ product.tax }}</p>
      <p>Total: {{ product.total }}</p>
    </div>
  </div>
</template>

<style></style>
