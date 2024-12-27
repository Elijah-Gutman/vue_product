<script>
export default {
  data: function () {
    return {
      newProductParams: {},
    };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("createProduct", this.newProductParams);
      this.newProductParams = {};
    },
  },
};
</script>

<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="container mx-auto text-center mb-12">
      <h1 class="text-4xl font-semibold text-gray-800">New Product</h1>
    </div>

    <div class="container mx-auto max-w-lg bg-white rounded-lg shadow-md p-8">
      <form v-on:submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            v-model="newProductParams.name"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label for="image_url" class="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            id="image_url"
            type="text"
            v-model="newProductParams.image_url"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <input
            id="description"
            type="text"
            v-model="newProductParams.description"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Enter product description"
          />
        </div>

        <div>
          <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
          <input
            id="price"
            type="number"
            v-model="newProductParams.price"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Enter product price"
          />
        </div>

        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
          <input
            id="category"
            type="text"
            v-model="newProductParams.category"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Enter product category"
          />
        </div>

        <div>
          <label for="tax" class="block text-sm font-medium text-gray-700">Tax Rate</label>
          <input
            id="tax"
            type="number"
            step="0.01"
            v-model="newProductParams.tax"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Enter tax rate (%)"
          />
        </div>

        <div>
          <label for="total" class="block text-sm font-medium text-gray-700">Total</label>
          <input
            id="total"
            type="number"
            v-model="newProductParams.total"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            placeholder="Enter total price"
          />
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="w-full bg-gray-800 text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
