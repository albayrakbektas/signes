import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenu: false,
    products: [
      {
        src: [
          require("../assets/big-img/from-left.jpeg"),
          require("../assets/big-img/from-right.jpeg"),
        ],
        alt: "alt",
        title: "title",
        subTitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores dolores et, eum fugiat fugit hic\n" +
          "      incidunt, itaque magnam maxime molestias necessitatibus optio reiciendis repellendus similique, sit temporibus\n" +
          "      voluptates! Consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores dolores et, eum fugiat fugit hic\n" +
          "      incidunt, itaque magnam maxime molestias necessitatibus optio reiciendis repellendus similique, sit temporibus\n" +
          "      voluptates! Consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores dolores et, eum fugiat fugit hic\n" +
          "      incidunt, itaque magnam maxime molestias necessitatibus optio reiciendis repellendus similique, sit temporibus\n" +
          "      voluptates! Consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores dolores et, eum fugiat fugit hic\n" +
          "      incidunt, itaque magnam maxime molestias necessitatibus optio reiciendis repellendus similique, sit temporibus\n" +
          "      voluptates! Consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores dolores et, eum fugiat fugit hic\n" +
          "      incidunt, itaque magnam maxime molestias necessitatibus optio reiciendis repellendus similique, sit temporibus\n" +
          "      voluptates! Consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores dolores et, eum fugiat fugit hic\n" +
          "      incidunt, itaque magnam maxime molestias necessitatibus optio reiciendis repellendus similique, sit temporibus\n" +
          "      voluptates! Consectetur!",
      },
      {
        src: [
          require("../assets/big-img/from-right.jpeg"),
          require("../assets/big-img/from-left.jpeg"),
        ],
        alt: "alt",
        title: "title",
        subTitle: "subTitle",
      },
      {
        src: [
          require("../assets/big-img/from-left.jpeg"),
          require("../assets/big-img/from-right.jpeg"),
        ],
        alt: "alt",
        title: "title",
        subTitle: "subTitle",
      },
      {
        src: [
          require("../assets/big-img/from-right.jpeg"),
          require("../assets/big-img/from-left.jpeg"),
        ],
        alt: "alt",
        title: "title",
        subTitle: "subTitle",
      },
      {
        src: [
          require("../assets/big-img/from-left.jpeg"),
          require("../assets/big-img/from-right.jpeg"),
        ],
        alt: "alt",
        title: "title",
        subTitle: "subTitle",
      },
      {
        src: [
          require("../assets/big-img/from-right.jpeg"),
          require("../assets/big-img/from-left.jpeg"),
        ],
        alt: "alt",
        title: "title",
        subTitle: "subTitle",
      },
    ],
    projects: [
      {
        src: [
          {
            src: require("../assets/brand-logo.jpeg"),
            alt: "alt-1",
          },
          {
            src: require("../assets/brand-logo.jpeg"),
            alt: "alt-1",
          },
        ],
        title: "Title1",
        subTitle:
          "Some text that describes me lorem ipsum ipsum lorem.Some text that\n" +
          "              describes me lorem ipsum ipsum lorem.Some text that describes me\n" +
          "              lorem ipsum ipsum lorem.Some text that describes me lorem ipsum\n" +
          "              ipsum lorem.",
      },
      {
        src: [
          {
            src: require("../assets/brand-logo.jpeg"),
            alt: "alt-1",
          },
          {
            src: require("../assets/brand-logo.jpeg"),
            alt: "alt-1",
          },
        ],
        title: "Title1",
        subTitle:
          "Some text that describes me lorem ipsum ipsum lorem.Some text that\n" +
          "              describes me lorem ipsum ipsum lorem.Some text that describes me\n" +
          "              lorem ipsum ipsum lorem.Some text that describes me lorem ipsum\n" +
          "              ipsum lorem.",
      },
      {
        src: [
          {
            src: require("../assets/brand-logo.jpeg"),
            alt: "alt-1",
          },
          {
            src: require("../assets/brand-logo.jpeg"),
            alt: "alt-1",
          },
        ],
        title: "Title1",
        subTitle:
          "Some text that describes me lorem ipsum ipsum lorem.Some text that\n" +
          "              describes me lorem ipsum ipsum lorem.Some text that describes me\n" +
          "              lorem ipsum ipsum lorem.Some text that describes me lorem ipsum\n" +
          "              ipsum lorem.",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
