<script>
export default {
  name: "Home",
};
</script>

<template>
  <div>
    <h1>Welcome to Vue Products</h1>
    <p>Your one-stop shop for amazing products</p>

    <div>
      <h2>Quick Links:</h2>
      <ul>
        <li><router-link to="/products">View All Products</router-link></li>
        <li><router-link to="/products/new">Add New Product</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style></style>
