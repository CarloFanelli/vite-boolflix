<script>
import AppSearch from './AppSearch.vue';
import AppLogo from './AppLogo.vue'
import { state } from '../state';

export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },
    components: { AppSearch, AppLogo },
    methods: {
        searchFilmAndSeries() {
            state.fetchData();
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row py-2">

            <AppLogo class="w-50"></AppLogo>
            <AppSearch @perform-search="searchFilmAndSeries" class="w-50 text-end"></AppSearch>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>