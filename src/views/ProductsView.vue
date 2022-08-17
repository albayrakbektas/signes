<template>
  <div class="products">
    <router-link
      :to="{ name: 'product', params: { id: index } }"
      v-for="(item, index) of this.$store.state.products"
      :key="index"
    >
      <ProductCard
        class="card"
        :product="item"
        :key="index"
        @click="seeDetail"
      />
    </router-link>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: "ProductsView",
  components: { ProductCard },
  data() {
    return {};
  },
  methods: {
    seeDetail() {},
  },
};
</script>

<style lang="scss" scoped>
.products {
  margin-top: 70px;
  min-height: calc(100vh - 120px);
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-evenly;
}
@media (max-width: 500px) {
  .products {
    grid-template-columns: 1fr !important;
    justify-items: center;
  }
}
</style>
