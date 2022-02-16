<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-toolbar-title
        ><router-link to="/">Yoga Trainer </router-link></v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-tab v-for="item in items" :key="item">
        <router-link :to="item.targetRoute">
          {{ item.navTitle }}
        </router-link>
      </v-tab>
      <v-spacer></v-spacer>

      <v-tab> <router-link to="/login">Login </router-link></v-tab>
      <v-tab> <router-link to="/register">Register </router-link></v-tab>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        { navTitle: "Home", targetRoute: "/" },
        { navTitle: "Find A Trainer", targetRoute: "/findTrainer" },
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: unset;
}
</style>