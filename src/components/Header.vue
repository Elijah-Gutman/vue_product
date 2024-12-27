<script>
export default {
  name: "Header",
};
</script>

<template>
  <header class="bg-white shadow-sm">
    <nav class="container mx-auto flex items-center justify-between py-4 px-6">
      <div class="text-2xl font-semibold text-gray-800">
        <router-link to="/">Awesome Furniture Website</router-link>
      </div>

      <div class="flex space-x-8">
        <router-link to="/" class="text-sm font-medium text-gray-600 hover:text-gray-800 transition">Home</router-link>
        <router-link to="/products" class="text-sm font-medium text-gray-600 hover:text-gray-800 transition">
          Products
        </router-link>
        <router-link to="/products/new" class="text-sm font-medium text-gray-600 hover:text-gray-800 transition">
          Create Product
        </router-link>
      </div>

      <div class="flex items-center space-x-4">
        <router-link
          v-if="!isLoggedIn"
          to="/signup"
          class="text-sm font-medium text-primary hover:text-gray-800 transition"
        >
          Signup
        </router-link>
        <span v-if="!isLoggedIn" class="text-gray-600">|</span>
        <router-link
          v-if="!isLoggedIn"
          to="/login"
          class="text-sm font-medium text-primary hover:text-gray-800 transition"
        >
          Login
        </router-link>
        <span v-if="isLoggedIn" class="text-gray-600">|</span>
        <router-link
          v-if="isLoggedIn"
          to="/logout"
          class="text-sm font-medium text-primary hover:text-gray-800 transition"
        >
          Logout
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.text-primary {
  color: #4caf50;
}
</style>

<style></style>
