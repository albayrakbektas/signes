<template>
  <div class="container">
    <div class="bg-img"></div>
    <div class="close-icon">
      <span @click="updateIsMenu" class="material-symbols-outlined">
        close
      </span>
    </div>
    <ul>
      <li v-for="(item, index) of navList" :key="index">
        <router-link :to="item.href">{{ $t(item.text) }}</router-link>
      </li>
    </ul>
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
  name: "NavigationMenu",
  data() {
    return {
      navList: [
        { href: "/", text: "_HOME" },
        { href: "/projects", text: "_PROJECTS" },
        { href: "/products", text: "_PRODUCTS" },
        { href: "/documents", text: "_DOCUMENTS" },
        { href: "/about", text: "_ABOUT" },
        { href: "/contact", text: "_CONTACT" },
      ],
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
    updateIsMenu() {
      this.$store.state.isMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  //position: relative;
  //left: 0;
  padding-bottom: 70px;
  background-color: #ffffff;
  height: 100vh;
  //height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
}
.bg-img {
  position: absolute;
  background-image: url("../assets/small-img/nav-bg.jpeg");
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  object-fit: fill;
  background-size: cover;
  z-index: 3;
}
.close-icon {
  display: grid;
  align-items: center;
  justify-content: right;
  margin-right: 1rem;
  height: 70px;
  z-index: 4;
  position: relative;
}
ul {
  padding-inline-start: 0;
  position: relative;
  z-index: 4;
}
li {
  list-style: none;
  padding: 1rem;
  z-index: 4;
}
a {
  text-decoration: none;
  color: #000000;
  font-weight: inherit;
  z-index: 4;
}
.flags {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
}
.fi {
  height: 24px;
  width: 24px;
  z-index: 4;
}
button {
  z-index: 4;

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
