<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col cols="6" md="4" v-for="trainer in trainerData" :key="trainer._id">
        <OneTrainerCard :cardData="trainer"  />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("fetchTrainerData");
    console.log(this.$store.dispatch("fetchTrainerData"));
  },

  data() {
    return {
      counter: this.$store.state.counter,
      trainerData: this.$store.state.trainerData,
    };
  },
};
</script>