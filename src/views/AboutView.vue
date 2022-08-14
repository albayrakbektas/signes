<template>
  <div class="about">
    <div class="horizontal">
      <div>
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
        src="../assets/big-img/from-left.jpeg"
        alt="img"
      />
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
          culpa error exercitationem incidunt minima officia qui rem rerum
          soluta? Cupiditate dolorem doloremque enim eveniet ex, fugiat in minus
          quam.
        </p>
      </div>
      <img
        class="img-vertical"
        src="../assets/big-img/from-left.jpeg"
        alt="img"
      />
    </div>
    <!--    <div class="horizontal">-->
    <!--      <img-->
    <!--        class="img-horizontal"-->
    <!--        src="../assets/full-width-img/full-width-home.jpeg"-->
    <!--        alt="img"-->
    <!--      />-->
    <!--      <div>-->
    <!--        <h2>About us</h2>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.about,
.horizontal,
.vertical {
  display: grid;
  position: relative;
}
.about {
  grid-template-rows: 1fr 2fr;
  max-height: calc(100vh - 70px);
}
.horizontal {
  grid-template-columns: repeat(2, 1fr);
}
.vertical {
  grid-template-columns: 1fr 3fr 1fr;
}
.img-horizontal {
  height: calc(calc(100vh - 70px) / 3);
  width: 50vw;
}
.img-vertical {
  height: calc(calc(100vh - 70px) / 3 * 2);
  width: 20vw;
}
</style>
