<template>
  <div class="container">
    <div class="footer-left">
      <span class="material-symbols-outlined"> copyright </span>
      <span>SiGNES FRAGRANCE KiMYA SANAYi VE TICARET LiMiTED SiRKETi</span>
    </div>
    <div class="footer-right">
      <div
        v-for="(item, index) of icons"
        :key="index"
        class="icon"
        :class="index.toString()"
      >
        <a target="_blank" :href="item.href">
          <img :src="item.src" :alt="item.alt" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMain",
  data() {
    return {
      icons: [
        {
          href: "https://www.instagram.com/ssbysignes/",
          src: require("../assets/icons/instragram.png"),
          alt: "Instagram icon",
        },
        {
          href: "https://wa.me/905446410304",
          src: require("../assets/icons/whatsapp.png"),
          alt: "Whatsapp icon",
        },
        {
          href: "mailto:info@signes.com.tr",
          src: require("../assets/icons/gmail.png"),
          alt: "Mail icon",
        },
        {
          href: "tel:+905446410304",
          src: require("../assets/icons/phone.png"),
          alt: "Phone icon",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .container {
    grid-template-columns: 1fr !important;
    grid-template-rows: 1fr 1fr;
    height: 100px !important;
  }
  .footer-left,
  .footer-right {
    margin-left: 1rem !important;
  }
  .footer-left {
    grid-area: 2;
    span:first-child {
    }
    span:last-child {
      text-wrap: none;
      font-size: 2.2vw !important;
      text-align: left !important;
    }
  }
  .footer-right {
    grid-area: 1;
    grid-template-columns: repeat(4, auto);
    width: 50vw;
    margin-left: 2rem;
  }
}
.container {
  grid-template-columns: auto auto;
  justify-content: space-between;
  height: 50px;
  background-color: rgba(210, 176, 76, 0.5);
  * {
    max-height: 50px;
  }
}
.container,
.footer-left,
.footer-right,
.icon,
a {
  display: grid;
  align-items: center;
}
.footer-left {
  grid-template-columns: auto 1fr;
  grid-gap: 0.2rem;
  margin-left: 2rem;
  span:last-child {
    font-weight: bold;
    font-size: 13px;
    font-family: "Arial Unicode MS", sans-serif;
  }
}
.footer-right {
  grid-template-columns: repeat(4, auto);
  grid-gap: 5px;
  margin-right: calc(2rem - 10px);
}
.icon.\32 {
  //margin-right: 10px;
}
img {
  padding: 5px;
  height: 30px;
  object-fit: cover;
}
</style>
