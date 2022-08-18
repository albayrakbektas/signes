<template>
  <div class="detail-page">
    <div class="slider-container">
      <div
        v-for="(item, index) of product.src"
        :key="index"
        class="slider"
        @mouseover="holdImg"
        @mouseleave="releaseImg"
      >
        <img :src="item" :alt="product.alt" class="slide" />
      </div>
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    <div class="content">
      <h1>{{ product.title }}</h1>
      <h4>
        <span>{{ $t("_DESCRIPTION") }}:</span>
        {{ product.subTitle }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailView",
  data() {
    return {
      product: {},
      slideIndex: 0,
      isHoldImg: false,
    };
  },
  created() {
    this.getProduct();
    window.scrollTo(0, 0);
  },
  mounted() {
    this.productSlider();
  },
  watch: {
    isHoldImg() {
      if (!this.isHoldImg) {
        this.$nextTick(() => {
          this.productSlider();
        });
      }
    },
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.product = this.$store.state.products[id];
    },
    holdImg() {
      this.isHoldImg = true;
    },
    releaseImg() {
      this.isHoldImg = false;
    },
    productSlider() {
      if (!this.isHoldImg) {
        let i;
        let slides = document.getElementsByClassName("slider");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        this.slideIndex++;
        if (this.slideIndex > slides.length) {
          this.slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
        setTimeout(this.productSlider, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
.active-product-image {
  display: block;
}
@media (max-width: 500px) {
  .detail-page {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto auto;
  }
  img {
    width: 100vw !important;
    height: 40vh !important;
  }
  .dots {
    bottom: 10px !important;
  }
}
.detail-page {
  margin-top: 70px;
  min-height: calc(100vh - 120px);
  display: grid;
  grid-template-columns: auto 1fr;
}
.slider-container,
.slider,
.slide {
  height: 100%;
}
.slider-container {
  position: relative;
  //height: calc(100vh - 120px);
}
.slider {
  display: none;
}
img {
  //height: calc(100vh - 120px);
  width: 40vw;
}
.content {
  display: grid;
  grid-template-rows: repeat(2, auto);
  justify-content: start;
  align-content: start;
  padding: 2px 16px;
}
h1 {
  margin-block-end: 0;
  text-align: left;
}
h4 {
  font-weight: normal;
}
span {
  font-weight: bold;
}
.dots {
  display: flex;
  justify-content: center;
  gap: 5px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active {
  background-color: #717171;
}
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
