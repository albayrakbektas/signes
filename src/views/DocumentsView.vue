<template>
  <div class="documents">
    <!--    <a href="../assets/pdf/_BektasAlbayrak.pdf"></a>-->
    <iframe src="_BektasAlbayrak.pdf"></iframe>
  </div>
</template>

<script>
export default {
  name: "DocumentsView",
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.documents {
  margin-top: 70px;
  height: calc(100vh - 120px);
}
iframe {
  width: 20vw;
  height: 20vw;
}
</style>
