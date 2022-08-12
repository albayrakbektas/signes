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
}
button {
  cursor: pointer;
}
</style>
<script>
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";
export default {
  components: { FooterMain, HeaderMain },
};
</script>
