<script>
import { state } from '../state';

export default {
    name: 'SingleCard',
    data() {
        return {
            state
        }
    },
    props: {
        show: Object,

    },
    methods: {
        getVote(vote) {
            const vote1to5 = Math.round(vote / 2);
            return vote1to5;
        },

    },
}
</script>

<template>
    <div class="col-3 p-3 border">
        <h5>film:</h5>
        <p>titolo originale : {{ show.original_title }}</p>
        <img :src="'https://image.tmdb.org/t/p/w154/' + show.poster_path" alt="">
        <p>titolo : {{ show.title }}</p>
        <div class="language">
            <span>lingua :</span>
            <img width="100" :alt="show.original_language"
                :src="state.baseFlagUrl + (show.original_language === 'en' ? show.original_language = 'gb' : show.original_language).toUpperCase() + '.svg'" />
        </div>


        <p>voto : {{ getVote(show.vote_average) }}</p>

        <i v-for="star in (getVote(show.vote_average))" class="fa fa-star"></i>
        <i v-for="star in (5 - getVote(show.vote_average))" class="fa fa-star-o"></i>



    </div>
</template>

<style lang="scss" scoped></style>