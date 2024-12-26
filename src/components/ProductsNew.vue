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
  <div>
    <h1>New Product</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        name:
        <input type="text" v-model="newProductParams.name" />
      </div>
      <div>
        image_url:
        <input type="text" v-model="newProductParams.image_url" />
      </div>
      <div>
        description:
        <input type="text" v-model="newProductParams.description" />
      </div>
      <div>
        price:
        <input type="integer" v-model="newProductParams.price" />
      </div>
      <div>
        category:
        <input type="text" v-model="newProductParams.category" />
      </div>
      <div>
        tax:
        <input type="float" v-model="newProductParams.tax" />
      </div>
      <div>
        total:
        <input type="integer" v-model="newProductParams.total" />
      </div>
      <button type="submit">Create product</button>
    </form>
  </div>
</template>

<style></style>
