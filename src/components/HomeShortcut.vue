<template>
  <router-link :to="img.href">
    <div class="shortcut">
      <img :src="img.src" :alt="img.alt" />
      <h1>{{ img.title }}</h1>
      <p>{{ img.subTitle }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "HomeShortcut",
  props: {
    img: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.shortcut {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-block-end: 0;
  text-shadow: -2px 2px #808080;
}
img {
  height: 10vw;
  width: 10vw;
  justify-self: center;
}
</style>
