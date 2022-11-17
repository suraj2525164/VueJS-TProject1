<template>
  <div>
    <h1>Dashboard</h1>
    <div>
      <p>Hii..! {{ name }}</p>
      <p>Email: {{ email }}</p>
      <v-btn
      rounded
      color="primary"
      dark v-on:click="removeUser()"
    >
      Logout
    </v-btn>
    </div>
  </div>
</template>

<script>
import {RouteEnum} from '../router/routeEnum';
export default {
  name: "dashboardComponent",
  data() {
    return {
      name: "Test",
      email: "test122333@gmail.com",
    };
  },
  created() {
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    console.warn(data);
    this.name = data.Name;
    this.email = data.Email;
  },
  methods:{
    removeUser() {
      localStorage.clear();
      this.$router.push(RouteEnum.LOGIN);
    },
  }
};
</script>
