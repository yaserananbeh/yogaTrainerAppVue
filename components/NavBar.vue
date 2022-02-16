<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-toolbar-title>Yoga Trainer</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-tab> Login </v-tab>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ["web", "shopping", "videos", "images", "news"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>