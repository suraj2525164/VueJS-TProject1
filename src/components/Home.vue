<template>
  <div class="title">
    <h1>Welcome to Home Page</h1>
    <v-app>

      <v-app-bar app>
        <Header />
      </v-app-bar>

      <v-main>
        <Dashboard />
      </v-main>

      <v-footer app>
        <Footer />
      </v-footer>

    </v-app>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Dashboard from './Dashboard.vue'

export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
    Dashboard
  },
};
</script>

<style>
.v-toolbar__content{
  padding: 0px !important;
  align-items: inherit;
}
/* .v-application .title{
  line-height: 0rem;
} */

</style>
