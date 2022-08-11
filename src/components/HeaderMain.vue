<template>
  <div class="header">
    <router-link to="/">
      <img src="../assets/brand-logo.jpeg" alt="brand logo" />
    </router-link>
    <div v-if="isMobile" class="mobile-menu">
      <span class="material-symbols-outlined"> menu </span>
    </div>
    <nav>
      <router-link to="/">{{ $t("_HOME") }}</router-link>
      <router-link to="/projects">{{ $t("_PROJECTS") }}</router-link>
      <router-link to="/products">{{ $t("_PRODUCTS") }}</router-link>
      <router-link to="/documents">{{ $t("_DOCUMENTS") }}</router-link>
      <router-link to="/about">{{ $t("_ABOUT") }}</router-link>
      <router-link to="/contact">{{ $t("_CONTACT") }}</router-link>
    </nav>
    <div class="flags">
      <button
        v-for="entry in languages"
        :key="entry.flag"
        @click="changeLocale(entry.language)"
      >
        <flag :iso="entry.flag" v-bind:squared="false" />
      </button>
    </div>
  </div>
</template>

<script>
import i18n from "@/i18n";

export default {
  name: "HeaderMain",
  data() {
    return {
      isMobile: false,
      languages: [
        { flag: "us", language: "en" },
        { flag: "tr", language: "tr" },
      ],
    };
  },
  created() {
    this.isMobileView();
    window.addEventListener("resize", this.isMobileView);
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
    isMobileView() {
      const width = window.innerWidth <= 500;
      if (width) {
        console.log("t");
        this.isMobile = true;
      } else {
        console.log("f");
        this.isMobile = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 70px;
  max-height: 70px;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 1fr auto;
  z-index: 99;
  position: relative;
}
nav {
  display: grid;
  height: 70px;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  padding-left: 10rem;
  position: relative;
  z-index: 99;
  * {
    text-decoration: none;
    color: #000000;
    font-weight: inherit;
    &:hover {
      font-weight: 700;
    }
  }
}
img {
  height: 70px;
  width: 210px;
  object-fit: fill;
}
.flags {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 140px;
}
.fi {
  height: 24px;
  width: 24px;
}
button {
  padding: 3px;
  font-size: 8px;
  margin: 2px;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
  }
}
</style>
