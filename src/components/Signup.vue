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
  <div>
    <h1>Signup</h1>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="submit">
      <div>
        <label>Name:</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" />
      </div>
      <div>
        <label>Password confirmation:</label>
        <input type="password" v-model="passwordConfirmation" />
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
</template>
