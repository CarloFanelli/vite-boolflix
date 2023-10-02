<script>
import { state } from '../state';
export default {
    name: 'AppFilters',
    data() {
        return {
            state
        }
    },
    methods: {
        addClass(genre) {

            document.getElementById(genre).classList.add('active');
            console.log(genre);
        }
    }
}
</script>

<template>
    <ul class=" list-unstyled m-0 position-fixed">
        <li :id="genre" v-for="genre in state.catList" @click="state.filterResults(genre); addClass(genre)"> {{ genre }}
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

li {
    font-family: $text_font;
    text-transform: uppercase;
    letter-spacing: 1px;

}

.active {
    color: $bf_logo;
    font-size: 150%;
}
</style>