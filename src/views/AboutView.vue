<template>
  <div>
    <div v-if="windowWidth > 500" class="about">
      <div class="horizontal">
        <div class="title-container">
          <h1>About us</h1>
        </div>
        <img
          class="img-horizontal"
          src="../assets/full-width-img/full-width-home.jpeg"
          alt="img"
        />
      </div>
      <div class="vertical">
        <img
          class="img-vertical"
          src="../assets/big-img/from-right.jpeg"
          alt="img"
        />
        <div class="content">
          <p>
            {{ $t("_ABOUT_US") }} <br />
            {{ $t("_ABOUT_US_SECOND") }} <br />
            <span>
              <em> {{ $t("_ABOUT_US_NAME") }} </em>
            </span>
          </p>
        </div>
        <img
          class="img-vertical"
          src="../assets/big-img/from-left.jpeg"
          alt="img"
        />
      </div>
    </div>
    <div v-else class="about-mobile">
      <div class="about-mobile-top">
        <img
          class="bg-img"
          src="../assets/big-img/from-left.jpeg"
          alt="bg-image"
        />
        <h1>{{ $t("_ABOUT") }}</h1>
        <hr />
        <span>
          <em> {{ $t("_ABOUT_US_NAME") }} </em>
        </span>
      </div>
      <div class="content">
        <p>
          {{ $t("_ABOUT_US") }} <br />
          {{ $t("_ABOUT_US_SECOND") }} <br />
          <!--          <span>-->
          <!--            <em> {{ $t("_ABOUT_US_NAME") }} </em>-->
          <!--          </span>-->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.windowWidth;
    },
  },
};
</script>

<style scoped lang="scss">
@media (max-width: 500px) {
  .content {
    height: unset !important;
    z-index: 8;
  }
  h1 {
    padding-top: 2rem !important;
    margin-block-end: 0 !important;
  }
  p {
    padding: 1rem 2rem !important;
    font-size: 1.2rem !important;
    line-height: 1.6rem !important;
  }
}
.about,
.horizontal,
.vertical {
  display: grid;
  position: relative;
}
.about {
  grid-template-rows: 1fr 2fr;
  max-height: calc(100vh - 70px);
  margin-top: 70px;
}
.about-mobile {
  margin-top: 70px;
  display: grid;
}
.about-mobile-top {
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-content: center;
  justify-content: center;
  height: 40vh;
}
hr {
  width: 20vw;
}
.bg-img {
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100%;
  opacity: 0.5;
  width: 100vw;
}
.horizontal {
  grid-template-columns: repeat(2, 1fr);
}
.title-container {
  align-self: center;
  h1 {
    font-size: 4rem;
    color: rgba(210, 176, 76, 1);
    text-shadow: 0 12px 12px rgba(210, 176, 76, 1);
  }
}
.vertical {
  grid-template-columns: 1fr 2fr 1fr;
}
.img-horizontal {
  height: calc(calc(100vh - 70px) / 3);
  width: 50vw;
}
.img-vertical {
  height: calc(calc(100vh - 70px) / 3 * 2);
  width: 100%;
}
.content {
  height: calc(calc(100vh - 70px) / 3 * 2);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
}
p {
  padding: 1rem 3rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-family: "Arial Unicode MS", fantasy;
  span:last-child {
    font-family: Times, sans-serif;
    display: inline-block;
    padding-top: 2rem;
    font-weight: bolder;
    font-style: italic !important;
  }
}
img {
  object-fit: cover;
}
</style>
