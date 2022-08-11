import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenu: false,
    keywords: {
      tr: {
        _HOME: "Anasayfa",
        _PROJECTS: "Projeler",
        _PARTNERS: "Partnerler",
        _ABOUT: "Hakkımızda",
        _CONTACT: "İletişim",
      },
      en: {
        _HOME: "Home",
        _PROJECTS: "Projects",
        _PARTNERS: "Partners",
        _ABOUT: "About",
        _CONTACT: "Contact",
      },
      _HOME: {
        tr: "Anasayfa",
        en: "Home",
      },
      _PROJECTS: {
        tr: "Projeler",
        en: "Projects",
      },
      _PARTNERS: {
        tr: "Partnerler",
        en: "Partners",
      },
      _ABOUT: {
        tr: "Hakkımızda",
        en: "About",
      },
      _CONTACT: {
        tr: "İletişim",
        en: "Contact",
      },
    },
  },
  getters: {
    getLocalKey(key) {
      return this.state.keywords[key][this.$route.query.language];
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
