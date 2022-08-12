<template>
  <div class="container">
    <router-link to="/products">
      <h3>{{ img.subTitle || "View All Products" }}</h3>
    </router-link>
    <h1>{{ img.title }}</h1>
    <img :src="img.src" :alt="img.alt" />
  </div>
</template>

<script>
export default {
  name: "ProductPicture",
  props: {
    img: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 50vh;
  position: relative;
}
img {
  text-align: center;
  height: 100%;
  width: 100%;
}
h1,
h3 {
  position: absolute;
  color: #ffffff;
}
h3 {
  top: 0;
  left: 5%;
  transition: color 1s;
  &:hover {
    color: rgba(210, 176, 76, 1);
  }
}
h1 {
  top: 5%;
  left: 5%;
}
@keyframes grad {
  0% {
    color: white;
  }
  100% {
    color: rebeccapurple;
  }
}
</style>
