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
      <router-link to="/products/new">Create Product</router-link> |
      <router-link v-if="!isLoggedIn" to="/signup">Signup</router-link> |
      <router-link v-if="!isLoggedIn" to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn" to="/logout">Logout</router-link>
    </nav>
  </header>
</template>

<style></style>
