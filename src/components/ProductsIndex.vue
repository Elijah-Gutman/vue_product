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
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="container mx-auto text-center mb-12">
      <h1 class="text-4xl font-semibold text-gray-800">All Products</h1>
    </div>

    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="product in products"
        v-bind:key="product.id"
        class="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg"
      >
        <img v-bind:src="product.image_url" alt="Product Image" class="w-full h-48 object-cover" />

        <div class="p-6 space-y-4">
          <h2 class="text-2xl font-bold text-gray-900 tracking-wide">{{ product.name }}</h2>

          <p class="text-gray-700 text-base leading-relaxed">{{ product.description }}</p>

          <p class="text-sm text-gray-500 uppercase tracking-wider">{{ product.category }}</p>

          <p class="text-lg font-medium text-gray-800">
            <span class="text-gray-600">Price:</span>
            ${{ product.price }}
          </p>

          <p class="text-sm text-gray-500">
            <span class="text-gray-600">Tax Rate:</span>
            {{ product.tax }}%
          </p>

          <p class="text-xl font-semibold text-gray-900">
            <span class="text-gray-600">Total:</span>
            ${{ product.total }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
