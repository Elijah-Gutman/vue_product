<script>
export default {
  props: {
    product: {
      type: Object,
    },
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
  <div class="product-details">
    <h2>Product Details</h2>
    <img :src="product.images[0]" alt="product image" class="modal-image" />
    <div class="product-info">
      <p>
        <strong>Name:</strong>
        {{ product.name }}
      </p>
      <p>
        <strong>Description:</strong>
        {{ product.description }}
      </p>
      <p>
        <strong>Category:</strong>
        {{ product.category }}
      </p>
      <p>
        <strong>Price:</strong>
        ${{ product.price }}
      </p>
      <p>
        <strong>Tax Rate:</strong>
        {{ product.tax }}%
      </p>
      <p>
        <strong>Total:</strong>
        ${{ product.total }}
      </p>
    </div>
  </div>
</template>

<style></style>
