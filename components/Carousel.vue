<template>
  <v-carousel :show-arrows="false" cycle>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <!-- <v-sheet :color="color" height="100%" tile> -->
      <v-row class="fill-height" align="center" justify="center">
        <div class="text-h2">Slide {{ i + 1 }}</div>
        <br />
        <button @click="test()">click me</button>
      </v-row>
      <!-- </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  methods: {
    test: function () {
      this.$store.dispatch("fetchTrainerData");
    },
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>