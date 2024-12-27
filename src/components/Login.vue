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
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
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
  <div>
    <h1>Login</h1>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="submit">
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
