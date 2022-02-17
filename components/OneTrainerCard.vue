<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
    >
      <v-card-title>{{ cardData.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> {{ cardData.name }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div></div>

      <div>{{ cardData.email }}</div>
      <v-card-title>{{ cardData.pricePerHour }} JOD</v-card-title>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text> Book </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    cardData: {
      type: Array,
    },
  },
};
</script>

