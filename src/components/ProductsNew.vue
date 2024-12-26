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
        Name:
        <input type="text" v-model="newProductParams.name" />
      </div>
      <div>
        Url:
        <input type="text" v-model="newProductParams.url" />
      </div>
      <div>
        Width:
        <input type="text" v-model="newProductParams.width" />
      </div>
      <div>
        Height:
        <input type="text" v-model="newProductParams.height" />
      </div>
      <button type="submit">Create product</button>
    </form>
  </div>
</template>

<style></style>
