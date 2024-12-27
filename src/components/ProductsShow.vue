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
    <img :src="product.image_url" alt="product image" class="modal-image" />
    <div class="product-info">
      <p><strong>Name:</strong> {{ product.name }}</p>
      <p><strong>Description:</strong> {{ product.description }}</p>
      <p><strong>Category:</strong> {{ product.category }}</p>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <p><strong>Tax Rate:</strong> {{ product.tax }}%</p>
      <p><strong>Total:</strong> ${{ product.total }}</p>
    </div>
  </div>
</template>

<style scoped>
.product-details {
  padding: 20px;
  text-align: center;
}

.modal-image {
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin: 0 auto;
}

.product-info {
  text-align: left;
  margin-top: 20px;
}

.product-info p {
  margin: 10px 0;
}
</style>

<!-- testing -->
