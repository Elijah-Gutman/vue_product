<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit() {
      axios
        .post("/sessions", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password"];
        });
    },
  },
};
</script>

<template>
  <div class="bg-gray-50 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-4xl font-semibold text-gray-800 text-center mb-6">Login</h1>
      <ul v-if="errors.length" class="text-red-500 text-sm mb-4">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
      <form v-on:submit.prevent="submit" class="space-y-4">
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
        <button
          type="submit"
          class="w-full bg-gray-800 text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-lg transition"
        >
          Login
        </button>
      </form>
      <p class="mt-6 text-sm text-center text-gray-600">
        Don't have an account?
        <router-link to="/signup" class="text-primary hover:text-primary-dark">Signup here</router-link>
      </p>
    </div>
  </div>
</template>
