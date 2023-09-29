<script>
import { state } from '../state';
import SingleCard from './SingleCard.vue';

export default {
    name: 'AppCards',
    components: { SingleCard },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <SingleCard v-for="film in state.filmList" :show="film"></SingleCard>
    <SingleCard v-for=" serie in state.tvList" :show="serie"></SingleCard>
</template>

<style lang="scss" scoped></style>