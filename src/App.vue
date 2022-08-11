<template>
  <div id="app">
    <HeaderMain />
    <router-view />
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
}
button {
  cursor: pointer;
}
</style>
<script>
import HeaderMain from "@/components/HeaderMain";
export default {
  components: { HeaderMain },
};
</script>
