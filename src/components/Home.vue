<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="relative h-96 bg-cover bg-center" style="background-image: url('/images/hero-banner.jpg')">
      <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div class="text-center text-white px-6 md:px-12">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Modern Furniture for Every Home</h1>
          <p class="text-lg mb-6">Explore stylish, comfortable, and affordable furniture for your living space.</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-16 px-6 text-center">
      <h2 class="text-3xl font-semibold text-gray-800 mb-8">Browse by Category</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
          <img
            src="https://d9dvmj2a7k2dc.cloudfront.net/catalog/product/cache/1/image/730x730/17f82f742ffe127f42dca9de82fb58b1/3/5/35702-38-35-20-14-t741_asl20231.jpg"
            alt="Living Room"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Living Room</h3>
          <p class="text-gray-600">Cozy and stylish furniture to enhance your living space.</p>
          <router-link
            to="/products?category=living-room"
            class="mt-4 inline-block text-primary font-medium hover:underline"
          >
            Shop Living Room
          </router-link>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
          <img
            src="https://s3.dutchcrafters.com/product-images/pid_72331-Amish-Grand-Calumet-Solid-Wood-Bedroom-Set---Quick-Ship--10.jpg"
            alt="Bedroom"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Bedroom</h3>
          <p class="text-gray-600">Create a peaceful and comfortable sanctuary with our bedroom furniture.</p>
          <router-link
            to="/products?category=bedroom"
            class="mt-4 inline-block text-primary font-medium hover:underline"
          >
            Shop Bedroom
          </router-link>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
          <img
            src="https://www.sierralivingconcepts.com/images/thumbs/0411980_bloomfield-solid-wood-home-office-furniture-set.jpeg"
            alt="Office"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Office</h3>
          <p class="text-gray-600">Functional and stylish office furniture for your workspace.</p>
          <router-link
            to="/products?category=office"
            class="mt-4 inline-block text-primary font-medium hover:underline"
          >
            Shop Office
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
