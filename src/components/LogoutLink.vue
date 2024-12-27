<script>
import axios from "axios";

export default {
  created() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/login");
  },
};
</script>

<template>
  <div></div>
</template>
