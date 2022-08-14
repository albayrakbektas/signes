<template>
  <div class="container">
    <div
      v-for="(item, index) of imgList"
      :key="index"
      :class="index.toString()"
    >
      <HomeShortcut :img="item" />
    </div>
  </div>
</template>

<script>
import HomeShortcut from "@/components/HomeShortcut";
export default {
  name: "HomeShortcuts",
  components: { HomeShortcut },
  data() {
    return {
      imgList: [
        {
          src: require("../assets/shortcuts/project.png"),
          alt: "projects image",
          title: "Our projects",
          subTitle: "Lorem Ipsum",
          href: "/projects",
        },
        {
          src: require("../assets/shortcuts/document.jpg"),
          alt: "document image",
          title: "Our documents",
          subTitle: "Lorem Ipsum",
          href: "/documents",
        },
        {
          src: require("../assets/shortcuts/about.png"),
          alt: "about us image",
          title: "About us",
          subTitle: "Lorem Ipsum",
          href: "/about",
        },
        {
          src: require("../assets/shortcuts/contact.png"),
          alt: "contact image",
          title: "Contact us",
          subTitle: "Lorem Ipsum",
          href: "/contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .container {
    grid-template-columns: repeat(2, 1fr) !important;
    grid-template-rows: repeat(2, 1fr);
  }
  .\30,
  .\31,
  .\32 {
    border-right: none !important;
  }
  .\30,
  .\31 {
    border-bottom: 1px solid rgba(210, 176, 76, 1);
  }
  .\32,
  .\33 {
    align-self: flex-end;
  }
}
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem 0;
}
.\30,
.\31,
.\32 {
  border-right: 1px solid rgba(210, 176, 76, 1);
}
</style>
