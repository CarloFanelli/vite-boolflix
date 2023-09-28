<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form action="" @submit.prevent="state.fetchData">

          <input type="text" v-model="state.query">
          <button type="submit">cerca</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-3 my-2 p-3 border" v-for="film in state.filmList">
        <span>titolo originale : {{ film.original_title }}</span>
        <span>titolo : {{ film.title }}</span>
        <span>lingua : {{ film.original_language }}</span>
        <span>voto : {{ film.vote_average }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { state } from './state.js'

export default {
  data() {
    return {
      state
    }
  },
  created() {
    state.query = 'toy story'
    state.fetchData();
  }
}

</script>


<style scoped></style>