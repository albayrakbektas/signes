<template>
  <div class="container">
    <div class="left">
      <div class="contact-message">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque
          doloribus eveniet impedit ipsam iure laudantium quibusdam! Ea,
          incidunt laboriosam laudantium maiores nostrum quam quo quos
          recusandae sint soluta vel?
        </p>
      </div>
      <div class="icon-container">
        <div
          v-for="(item, index) of icons"
          :key="index"
          class="icon"
          :class="index.toString()"
        >
          <a target="_blank" :href="item.href">
            <img :src="item.src" :alt="item.alt" :title="item.title" />
          </a>
        </div>
      </div>
    </div>
    <div class="form-container">
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";
export default {
  name: "ContactView",
  components: { ContactForm },
  data() {
    return {
      icons: [
        {
          href: "https://www.instagram.com/ssbysignes/",
          src: require("../assets/icons/instragram.png"),
          alt: "Instagram icon",
          title: "Instagram",
        },
        {
          href: "https://wa.me/905446410304",
          src: require("../assets/icons/whatsapp.png"),
          alt: "Whatsapp icon",
          title: "Whatsapp",
        },
        {
          href: "mailto:info@signes.com.tr",
          src: require("../assets/icons/gmail.png"),
          alt: "Mail icon",
          title: "Email",
        },
        {
          href: "tel:+905446410304",
          src: require("../assets/icons/phone.png"),
          alt: "Phone icon",
          title: "Phone",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .container {
    height: unset !important;
    grid-template-columns: 1fr !important;
    grid-template-rows: auto 1fr;
    overflow: unset !important;
    padding-bottom: 120px !important;
    margin-top: 70px;
  }
  .left {
    grid-template-rows: auto 1fr !important;
  }
  .icon,
  img {
    height: 15vw !important;
  }
  p {
    padding-right: 0 !important;
  }
}
.container,
.left,
.icon-container,
.icon {
  display: grid;
  align-items: center;
  justify-content: center;
}
.container {
  padding: 0 2rem;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 50px);
  align-content: space-around;
  gap: 5rem;
  overflow: hidden;
}
.contact-message,
.icon-container,
.form-container {
  align-self: flex-start;
}
.left {
  grid-template-rows: 2fr 1fr;
  height: 100%;
}
.contact-message {
  * {
    text-align: left;
  }
}
h1 {
  margin-block-start: 0;
}
p {
  padding-right: 10vw;
}
.form-container {
  padding-right: 2rem;
}
.icon-container {
  grid-template-columns: repeat(4, 1fr);
  //width: 0;
  animation: icon-width 1s linear;
}
@keyframes icon-width {
  0% {
    width: 90%;
  }
  100% {
    width: 100%;
  }
}
.icon {
  height: 140px;
}
img {
  height: 100px;
  transition: height 500ms;
  &:hover {
    height: 120px;
  }
}
</style>
