<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <form action="" @submit.prevent="state.fetchData">

          <input type="text" v-model="state.query">
          <button type="submit">cerca</button>
        </form>
        <span>hai cercato {{ state.querySpan }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-3 my-2 p-3 border" v-for="film in    state.filmList   ">
        <h5>film:</h5>
        <p>titolo originale : {{ film.original_title }}</p>
        <p>titolo : {{ film.title }}</p>
        <p>lingua : {{ film.original_language }}</p>
        <img width="100" :alt="film.original_language"
          :src="state.baseFlagUrl + (film.original_language === 'en' ? film.original_language = 'gb' : film.original_language).toUpperCase() + '.svg'" />

        <p>voto : {{ film.vote_average }}</p>
      </div>

      <div class="col-3 my-2 p-3 border" v-for="serie in    state.tvList   ">
        <h5>serie tv:</h5>
        <p>titolo originale : {{ serie.original_name }}</p>
        <p>titolo : {{ serie.name }}</p>
        <p>lingua : {{ serie.original_language }}</p>
        <img width="100" :alt="serie.original_language"
          :src="state.baseFlagUrl + (serie.original_language === 'en' ? serie.original_language = 'gb' : serie.original_language).toUpperCase() + '.svg'" />

        <p>voto : {{ serie.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { state } from './state.js'

export default {
  data() {
    return {
      state,
    }
  },
  created() {
    state.fetchData();
  }
}

</script>


<style scoped></style>