<template>
  <div class="home">
    <img
      class="fw-pic"
      src="../assets/full-width-img/full-width-home.jpeg"
      alt="bambu picture"
    />
    <div class="big-images">
      <div class="big-image from-left">
        <HomeBigImage :image="leftImage" />
      </div>
      <div class="big-image from-right">
        <HomeBigImage :image="rightImage" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeBigImage from "@/components/HomeBigImage";
export default {
  name: "HomeView",
  components: { HomeBigImage },
  data() {
    return {
      leftImage: {
        src: require("../assets/big-img/from-left.jpeg"),
        alt: "Bambu Picture",
        text: "Lorem Ipsum",
      },
      rightImage: {
        src: require("../assets/big-img/from-right.jpeg"),
        alt: "Bambu Picture",
        text: "Lorem Ipsum",
      },
    };
  },
};
</script>

<style scoped lang="scss">
@media (max-width: 500px) {
  .big-images {
    grid-template-columns: 1fr !important;
    grid-template-rows: repeat(2, 1fr);
  }
  .from-left {
    animation-name: top;
  }
  .from-right {
    animation-name: bottom;
  }
}
.home {
  position: relative;
}
.big-images {
  //position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: calc(100vh - 70px);
  z-index: 2;
}
.from-left,
.from-right {
  position: relative;
  animation-duration: 1s;
  z-index: 2;
}
.from-left {
  animation-name: left;
}
.from-right {
  animation-name: right;
}
.fw-pic {
  height: calc(100%);
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  left: 0;
}
@keyframes left {
  0% {
    left: -75%;
  }
  100% {
    left: 0;
  }
}
@keyframes right {
  0% {
    right: -75%;
  }
  100% {
    right: 0;
  }
}
@keyframes top {
  0% {
    top: -75%;
  }
  100% {
    top: 0;
  }
}
@keyframes bottom {
  0% {
    bottom: -75%;
  }
  100% {
    bottom: 0;
  }
}
</style>
