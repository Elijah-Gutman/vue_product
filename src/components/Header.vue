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
    </nav>
  </header>
</template>

<style></style>
