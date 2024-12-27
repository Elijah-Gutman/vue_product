<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit() {
      axios
        .post("/users", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
        })
        .then((response) => {
          console.log("Success!", response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="bg-gray-50 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-4xl font-semibold text-gray-800 text-center mb-6">Signup</h1>
      <ul v-if="errors.length" class="text-red-500 text-sm mb-4">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      <form v-on:submit.prevent="submit" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-600">Name:</label>
          <input
            id="name"
            type="text"
            v-model="name"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-600">Email:</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-600">Password:</label>
          <input
            id="password"
            type="password"
            v-model="password"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label for="passwordConfirmation" class="block text-sm font-medium text-gray-600">
            Password Confirmation:
          </label>
          <input
            id="passwordConfirmation"
            type="password"
            v-model="passwordConfirmation"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-gray-800 text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition"
        >
          Signup
        </button>
      </form>
      <p class="mt-6 text-sm text-center text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-primary hover:text-primary-dark">Login here</router-link>
      </p>
    </div>
  </div>
</template>
