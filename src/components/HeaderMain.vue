<template>
  <div class="header">
    <router-link to="/">
      <img src="../assets/brand-logo.jpeg" alt="brand logo" />
    </router-link>
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
      languages: [
        { flag: "us", language: "en" },
        { flag: "tr", language: "tr" },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 70px;
  max-height: 70px;
  display: grid;
  grid-template-columns: auto 1fr auto;
}
nav {
  display: grid;
  height: 70px;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  padding-left: 10rem;
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
  margin-left: 1rem;
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
