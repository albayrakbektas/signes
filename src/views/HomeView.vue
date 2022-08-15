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
    <HomeShortcuts />
    <div class="product-images">
      <ProductPicture
        v-for="(item, index) of productImages"
        :img="item"
        :key="index"
        :class="index.toString()"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeBigImage from "@/components/HomeBigImage";
import ProductPicture from "@/components/ProductPicture";
import HomeShortcuts from "@/components/HomeShortcuts";
export default {
  name: "HomeView",
  components: { HomeShortcuts, ProductPicture, HomeBigImage },
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
      productImages: [
        {
          src: require("../assets/small-img/nav-bg.jpeg"),
          alt: "Bambu Picture",
          title: "Lorem Ipsum",
          subTitle: "View All Products",
        },
        {
          src: require("../assets/big-img/from-right.jpeg"),
          alt: "Bambu Picture",
          title: "Lorem Ipsum",
          subTitle: "View All Products",
        },
        {
          src: require("../assets/big-img/from-right.jpeg"),
          alt: "Bambu Picture",
          title: "Lorem Ipsum",
          subTitle: "View All Products",
        },
        {
          src: require("../assets/big-img/from-right.jpeg"),
          alt: "Bambu Picture",
          title: "Lorem Ipsum",
          subTitle: "View All Products",
        },
        {
          src: require("../assets/full-width-img/full-width-home.jpeg"),
          alt: "Bambu Picture",
          title: "Lorem Ipsum",
          subTitle: "View All Products",
        },
      ],
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
  .big-image {
    width: 100% !important;
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
  margin-top: 70px;
}
.big-images {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-around;
  height: calc(100vh - 70px);
  cursor: pointer;
  z-index: 2;
}
.big-image {
  position: relative;
  display: grid;
  animation-duration: 1s;
  width: 50vw;
  z-index: 2;
  transition: width 1s;
  &:hover {
    width: 60vw;
  }
}
.from-left {
  animation-name: left;
}
.from-right {
  animation-name: right;
}
.fw-pic {
  height: calc(100vh - 70px);
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
.product-images {
  display: grid;
}
@media (min-width: 500px) {
  .product-images {
    height: 100vh;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .container.\34 {
    grid-area: 2 / 2 / span 1 / span 2;
  }
}
</style>
