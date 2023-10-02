<script>
import AppCards from './components/AppCards.vue';
import AppFilters from './components/AppFilters.vue';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import { state } from './state.js'

export default {
  data() {
    return {
      state,
    };
  },
  created() {
    state.fetchData();
  },

  components: { AppHeader, AppCards, AppFilters }
}

</script>

<template>
  <AppHeader></AppHeader>


  <div class="container d-flex gap-4" @scroll="">
    <div class="w-25">

      <AppFilters></AppFilters>
    </div>
    <div class="container">

      <div class="row">

        <AppCards></AppCards>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;

body {
  background-color: $bf_bg;
  color: white;
}
</style>