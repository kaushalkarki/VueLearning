<script>
export default {
  name: "CompC",
  emits: ["getC"],
  inject: ["msg", "sendA"],
  methods: {
    Add() {
      this.$store.commit('increment');
    },
  },
  computed: {
    counter() {
      return this.$store.getters.finalCount;
    },
  },
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ counter }}</h1>
    <button @click="Add">Add 1</button>
    <h3>
      <router-link to="/kaushal">
        <button>Send me back</button>
      </router-link>
      <input type="text" :value="msg" @input="sendA" />
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
