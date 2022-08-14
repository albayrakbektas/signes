<template>
  <router-link :to="img.href">
    <div class="shortcut">
      <img :src="img.src" :alt="img.alt" />
      <h1>{{ $t(`${img.title}`) }}</h1>
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
  &:hover {
    //background-color: rgba(210, 176, 76, 0.1);
    background-image: linear-gradient(
      to right,
      rgba(210, 176, 76, 0.1),
      rgba(238, 215, 148, 0.5)
    );
    opacity: 1;
    transition: background-image 2s;
  }
}
h1 {
  flex-wrap: wrap;
  margin-block-end: 0;
  font-weight: normal;
}
img {
  height: 10vw;
  width: 10vw;
  justify-self: center;
}
</style>
