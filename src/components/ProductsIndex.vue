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
    <div
      v-for="product in products"
      v-bind:key="product.id"
      @click="$emit('showProduct', product)"
    >
      <h2>{{ product.name }}</h2>
      <img v-bind:src="product.image_url" />
      <p>Price: {{ product.price }}</p>
    </div>
  </div>
</template>

<style>
div {
  cursor: pointer;
}
</style>
