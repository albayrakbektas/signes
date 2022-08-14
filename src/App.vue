<template>
  <div id="app">
    <div class="header-sticky">
      <HeaderMain />
    </div>
    <router-view />
    <FooterMain />
  </div>
</template>

<style lang="scss">
body {
  font-family: Century Gothic Std, arial, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 100vw;
  overflow: hidden;
  min-height: 100vh;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  cursor: pointer;
}
.header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background-color: white;
  z-index: 100;
}
</style>
<script>
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";
export default {
  components: { FooterMain, HeaderMain },
};
</script>
