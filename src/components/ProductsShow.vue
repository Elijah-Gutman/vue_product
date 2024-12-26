<script>
export default {
  props: {
    product: Object,
  },
  data: function () {
    return {
      editProductParams: {},
    };
  },
  created: function () {
    this.editProductParams = { ...this.product };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("updateProduct", this.product.id, this.editProductParams);
    },
  },
};
</script>

<template>
  <div>
    <h1>Product information</h1>
    <p>Name: {{ product.name }}</p>
    <p>Image Url: {{ product.image_url }}</p>
    <p>Description: {{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <p>Category: {{ product.category }}</p>
    <p>tax: {{ product.tax }}</p>
    <p>total: {{ product.total }}</p>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Name:
        <input v-model="editProductParams.name" type="text" />
      </div>
      <div>
        Url:
        <input v-model="editProductParams.url" type="text" />
      </div>
      <div>
        Width:
        <input v-model="editProductParams.width" type="text" />
      </div>
      <div>
        Height:
        <input v-model="editProductParams.height" type="text" />
      </div>
      <button type="submit">Update product</button>
    </form>
    <button v-on:click="$emit('destroyProduct', product)">
      Destroy product
    </button>
  </div>
</template>

<style></style>

<!-- testing -->
