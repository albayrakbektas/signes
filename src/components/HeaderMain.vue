<template>
  <div @focusout="closeMenu" class="header">
    <router-link to="/">
      <img src="../assets/brand-logo.jpeg" alt="brand logo" />
    </router-link>
    <div
      v-if="isMobile && !this.$store.state.isMenu"
      @click="updateIsMenu"
      class="mobile-menu"
    >
      <span class="material-symbols-outlined"> menu </span>
    </div>
    <div class="container">
      <div class="bg-img"></div>
      <div class="close-icon">
        <span @click="closeMenu" class="material-symbols-outlined">
          close
        </span>
      </div>
      <ul>
        <li @click="closeMenu" v-for="(item, index) of navList" :key="index">
          <router-link :to="item.href">{{ $t(item.text) }}</router-link>
        </li>
      </ul>
      <div class="flags-menu">
        <button
          v-for="entry in languages"
          :key="entry.flag"
          @click="changeLocale(entry.language)"
        >
          <flag :iso="entry.flag" v-bind:squared="false" />
        </button>
      </div>
    </div>
    <nav v-if="!isMobile">
      <router-link to="/">{{ $t("_HOME") }}</router-link>
      <router-link to="/projects">{{ $t("_PROJECTS") }}</router-link>
      <router-link to="/products">{{ $t("_PRODUCTS") }}</router-link>
      <router-link to="/documents">{{ $t("_DOCUMENTS") }}</router-link>
      <router-link to="/about">{{ $t("_ABOUT") }}</router-link>
      <router-link to="/contact">{{ $t("_CONTACT") }}</router-link>
    </nav>
    <div v-if="!isMobile" class="flags">
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
      isMenu: false,
      languages: [
        { flag: "us", language: "en" },
        { flag: "tr", language: "tr" },
      ],
      navList: [
        { href: "/", text: "_HOME" },
        { href: "/projects", text: "_PROJECTS" },
        { href: "/products", text: "_PRODUCTS" },
        { href: "/documents", text: "_DOCUMENTS" },
        { href: "/about", text: "_ABOUT" },
        { href: "/contact", text: "_CONTACT" },
      ],
    };
  },
  created() {
    this.isMobileView();
    window.addEventListener("resize", this.isMobileView);
  },
  mounted() {
    document.addEventListener("focusout", this.closeMenu);
  },
  beforeDestroy() {
    document.removeEventListener("focusout", this.closeMenu);
  },
  methods: {
    ss() {
      console.log("ss");
    },
    updateIsMenu() {
      this.$store.state.isMenu = true;
      document.querySelector(".container").style.width = "250px";
    },
    closeMenu() {
      this.$store.state.isMenu = false;
      document.querySelector(".container").style.width = "0";
    },
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
@media (max-width: 500px) {
  .header {
    grid-template-columns: auto auto;
  }
  .mobile-menu {
    display: grid;
    align-items: center;
    justify-content: end;
    padding-right: 2rem;
  }
}
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
    transition: font-weight 500ms;
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
  transition: opacity 500ms;
  &:hover {
    opacity: 0.5;
    //background-color: rgba(128, 128, 128, 0.2);
  }
}
.container {
  padding-bottom: 70px;
  background-color: #ffffff;
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 99;
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
.flags-menu {
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
  transition: opacity 500ms;
  &:hover {
    opacity: 0.5;
    //background-color: rgba(128, 128, 128, 0.2);
  }
}
</style>
