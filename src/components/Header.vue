<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/products/new">Create Product</router-link>
    </nav>
  </header>
</template>

<style></style>
