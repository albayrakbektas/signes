<template>
  <div>
    <form
      action="https://formsubmit.co/1a3b21370ecf398abfa4eb9f7e111a4d"
      method="POST"
    >
      <div class="form-top">
        <label>
          <input
            :placeholder="$t('_INPUT_NAME')"
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          <input
            :placeholder="$t('_INPUT_EMAIL')"
            type="email"
            name="email"
            required
          />
        </label>
      </div>
      <label>
        <input :placeholder="$t('_INPUT_SUBJECT')" type="text" name="subject" />
      </label>
      <textarea
        :placeholder="$t('_INPUT_MESSAGE')"
        cols="40"
        rows="6"
        name="message"
        required
      ></textarea>
      <button type="submit">Contact me</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .form-top {
    grid-template-columns: 1fr !important;
    grid-template-rows: repeat(2, 1fr);
    gap: 0 !important;
  }
}
form {
  text-align: left !important;
}
.form-top {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}
input,
textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(210, 176, 76, 0.5);
  -webkit-box-shadow: 0 0 0.8333rem rgb(0 0 0 / 50%);
  border: none;
  color: #000000;
  outline: 0;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}
textarea {
  overflow: auto;
  resize: vertical;
}
button {
  padding: 1rem 2.333rem;
  color: #fff;
  background-color: #c32865;
  -webkit-box-shadow: 0 0 0.8333rem rgb(0 0 0 / 50%);
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.025em;
  line-height: 1.5;
  text-transform: none;
  border: none;
  outline: 0;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    background-color: #e02f7b;
  }
}
</style>
