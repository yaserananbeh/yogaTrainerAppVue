<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="6" md="4" v-for="test in 5">
        <OneTrainerCard />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return { counter: this.$store.state.counter };
  },
};
</script>