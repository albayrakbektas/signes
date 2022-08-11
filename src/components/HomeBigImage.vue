<template>
  <div class="container">
    <img :src="image.src" :alt="image.alt" />
    <h1>{{ image.text }}</h1>
  </div>
</template>

<script>
export default {
  name: "HomeBigImage",
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  position: relative;
}
img {
  text-align: center;
  height: 100%;
  width: 100%;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  //color: rgba(215, 192, 136, 1);
  color: #ffffff;
}
</style>
