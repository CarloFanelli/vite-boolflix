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
        getLanguage(language) {
            switch (language) {
                case 'ja':
                    language = "JP";
                    break;
                case 'en':
                    language = "GB";
                    break;
                case 'zh':
                    language = "CN";
                    break;
                case 'ko':
                    language = "KR";
                    break;
                case 'hi':
                    language = "IN";
                    break;

                default:
                    language = language;
            }
            console.log(language);
            return language
        }

    },
}
</script>

<template>
    <div class="col-3 py-3 border position-relative my_card">
        <div class="front">
            <div class="type">

                <h5>{{ (show.original_title != null ? 'Film' : 'Serie TV') }}</h5>

            </div>

            <div class="original_title_name">
                <p v-if="show.original_title != null">titolo originale : {{ show.original_title }}</p>
                <p v-else>titolo originale : {{ show.original_name }}</p>
            </div>
            <img :src="'https://image.tmdb.org/t/p/w154/' + show.poster_path" alt="">

        </div>

        <div class="back">

            <div class="title_name">
                <p v-if="show.title != null">titolo originale : {{ show.title }}</p>
                <p v-else>titolo originale : {{ show.name }}</p>
            </div>

            <div class="language">
                <p>lingua :</p>

                <img width="44" :alt="this.getLanguage(show.original_language)"
                    :src="state.baseFlagUrl + (this.getLanguage(show.original_language).toUpperCase()) + '.svg'" />
                <h4>{{ show.original_language }}</h4>
            </div>


            <p>voto : {{ getVote(show.vote_average) }}</p>

            <i v-for="star in (getVote(show.vote_average))" class="fa fa-star"></i>
            <i v-for="star in (5 - getVote(show.vote_average))" class="fa fa-star-o"></i>
        </div>




    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

/* .type {
    background: $bf_logo;
    position: absolute;
    rotate: -90deg;
    width: 500px;
    left: -44%;
    top: 50%;
} */
.back {
    display: none;
}

.my_card:hover {

    .front {
        display: none;
    }

    .back {
        display: block;
    }
}
</style>