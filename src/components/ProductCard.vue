<template>
  <div class="card-container">
    <img :src="product.src[0]" :alt="product.alt" />
    <div class="card-bottom">
      <div class="title">
        <h4>
          <b>{{ product.title }}</b>
        </h4>
      </div>
      <div class="sub-title">
        <p>{{ product.subTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .card-container,
  .card-bottom {
    width: 80vw !important;
    margin: 0 auto;
  }
  img {
    width: 80vw !important;
    height: 50vh !important;
  }
}
.card-container {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  align-items: start;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    img {
      opacity: 0.7;
      transition: 0.3s;
    }
  }
  margin: 1rem 0;
}
img {
  width: 20vw;
  height: 20vw;
}
.card-container,
.card-bottom {
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(2, auto);
  width: 20vw;
}
.card-bottom {
  text-align: left;
  justify-content: flex-start;
  align-content: flex-start;
  height: 100%;
  padding-bottom: 1.33em;
}
.title {
  h4 {
    -webkit-margin-after: 0;
    margin-block-end: 0;
  }
}
h4,
p {
  padding: 0 16px;
}
.sub-title {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
