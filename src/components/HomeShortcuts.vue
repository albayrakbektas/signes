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
          title: "_PROJECTS",
          subTitle: "Lorem Ipsum",
          href: "/projects",
          imgTitle: "_PROJECTS",
        },
        {
          src: require("../assets/shortcuts/document.jpg"),
          alt: "document image",
          title: "_DOCUMENTS",
          subTitle: "Lorem Ipsum",
          href: "/documents",
          imgTitle: "_DOCUMENTS",
        },
        {
          src: require("../assets/shortcuts/about.png"),
          alt: "about us image",
          title: "_ABOUT",
          subTitle: "Lorem Ipsum",
          href: "/about",
          imgTitle: "_ABOUT",
        },
        {
          src: require("../assets/shortcuts/contact.png"),
          alt: "contact image",
          title: "_CONTACT",
          subTitle: "Lorem Ipsum",
          href: "/contact",
          imgTitle: "_CONTACT",
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
  .\31 {
    border-right: none !important;
  }
  .\30,
  .\31 {
    border-bottom: 1px solid rgba(210, 176, 76, 1);
  }
  .\32,
  .\33 {
    padding-top: 2rem;
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
