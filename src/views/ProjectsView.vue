<template>
  <div class="projects">
    <div class="row">
      <div
        v-for="(item, index) of this.$store.state.projects"
        :key="index"
        class="column"
      >
        <div class="card">
          <img
            :src="item.src[0].src"
            :alt="item.src[0].alt"
            style="width: 100%; height: 20vh"
          />
          <div class="container">
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.subTitle }}
            </p>
            <router-link :to="{ name: 'project', params: { id: index } }">
              <button class="button">
                <span class="material-symbols-outlined"> description </span>
                <span>VIEW PROJECT</span>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      project: {},
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .row {
    grid-template-columns: 1fr !important;
    margin-top: 2rem;
  }
  .column {
    width: 100%;
    display: block;
    margin: 2rem 0;
  }
  a {
    width: 100% !important;
  }
}
.projects {
  margin-top: 70px;
  min-height: calc(100vh - 120px);
}
.row {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  margin: 5rem 0;
}
.column {
  float: left;
  width: 90%;
  margin-bottom: 16px;
  padding: 0 8px;
}
img {
  box-shadow: -10px -10px 8px 0 rgba(0, 0, 0, 0.2);
}
.container {
  padding: 0 16px;
}
.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}
.title {
  color: grey;
}
.button {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 5px;
  align-items: center;
  justify-content: center;
  background-color: rgba(210, 176, 76, 1);
  text-align: center;
  width: 100%;
  margin: auto;
  padding: 1rem 2rem;
  color: #fff;
  background-color: #c32865;
  -webkit-box-shadow: 0 0 0.8333rem rgb(0 0 0 / 50%);
  font-family: Poppins, sans-serif;
  text-transform: none;
  border: none;
  outline: 0;
  cursor: pointer;
  transition: background-color 500ms;
  &:hover {
    background-color: #e02f7b;
  }
}
a {
  display: inline-block;
  width: 60%;
}
</style>
