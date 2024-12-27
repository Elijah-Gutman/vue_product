<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <section class="bg-white rounded-lg w-full sm:w-3/4 lg:w-1/2 p-8 shadow-lg">
      <slot></slot>
      <button
        class="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900 focus:outline-none"
        type="button"
        v-on:click="$emit('close')"
      >
        &#x2715;
      </button>
    </section>
  </div>
</template>

<style>
.modal-background {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
}

.modal-main {
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
}

.modal-main img {
  width: 300px;
  height: 300px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.modal-main button.close {
  font-size: 2em;
  background: none;
  border: none;
  position: absolute;
  top: 0em;
  right: 0.2em;
}
</style>
