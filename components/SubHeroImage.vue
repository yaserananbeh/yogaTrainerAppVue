<template>
  <div
    class="subHeroImageContainer"
    style="
      background-image: url('https://cdn.vuetifyjs.com/images/carousel/planet.jpg');
    "
  >
    <h3>{{ page }}</h3>
  </div>
</template>

<script>
export default {
  name: "SubHeroImage",
  props: {
    page: {
      type: String,
      default: "Page",
    },
  },
};
</script>

<style  scoped>
.subHeroImageContainer {
  height: 30vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  background-color: #24293588;
  color: var(--smokeWhite);
  width: 100%;
  text-align: center;
  min-height: 30vh;
  font-size: 3rem;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>