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
                case 'uk':
                    language = "UA";
                    break;
                case 'el':
                    language = "GR";
                    break;
                case 'da':
                    language = "DK";
                    break;

                default:
                    language = language;
            }
            //console.log(language);
            return language
        }

    },
}
</script>

<template>
    <div class="col-3 my-2 position-relative my_card">

        <div :style="{ backgroundImage: `url(${state.baseImgUrl}${show.poster_path})` }" class="front">

            <div class="type d-flex justify-content-evenly align-items-center">

                <h5>{{ (show.original_title != null ? 'Film' : 'Serie TV') }}</h5>
                <div class="vote d-flex gap-2">
                    <i v-for="  star   in   (getVote(show.vote_average))  " class="fa fa-star"></i>
                    <i v-for="  star   in   (5 - getVote(show.vote_average))  " class="fa fa-star-o"></i>
                </div>

            </div>

            <!-- <img class="poster" :src="'https://image.tmdb.org/t/p/w154/' + show.poster_path" alt=""> -->

        </div>

        <div class="back " :style="{ backgroundImage: `url(${state.baseImgUrl}${show.poster_path})` }">

            <div class="content">
                <div class="original_title_name">
                    <div class="text-center" v-if="show.original_title != null">
                        <p class="m-0">Titolo Originale</p>
                        <h5 class="m-0">{{ show.original_title }}</h5>
                    </div>
                    <div class="text-center" v-else>
                        <p>Titolo Originale:</p>
                        <h5>{{ show.original_name }}</h5>
                    </div>
                </div>

                <div class="title_name mt-2">

                    <div class="text-center" v-if="show.title != null">
                        <p class="m-0">Titolo</p>
                        <h5 class="m-0">{{ show.title }}</h5>
                    </div>
                    <div class="text-center" v-else>
                        <p>Titolo :</p>
                        <h5>{{ show.name }}</h5>
                    </div>

                </div>

                <div class="language d-flex justify-content-center align-items-center gap-2">
                    <p class="m-0">lingua :</p>

                    <img width="40" :alt="this.getLanguage(show.original_language)"
                        :src="state.baseFlagUrl + (this.getLanguage(show.original_language).toUpperCase()) + '.svg'" />
                    <h4>{{ show.original_language }}</h4>
                </div>



                <div class="vote d-flex justify-content-center align-items-center gap-2">
                    <p class="m-0">voto : </p>
                    <i v-for="  star   in   (getVote(show.vote_average))  " class="fa fa-star"></i>
                    <i v-for="  star   in   (5 - getVote(show.vote_average))  " class="fa fa-star-o"></i>
                </div>
            </div>
        </div>




    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.my_card {

    height: 450px;
    position: relative;

    .type {
        position: relative;
        width: 400px;
        background: $type_bg;
        rotate: -90deg;
        top: 46%;
        right: 11rem;
        border-radius: 50px;

        h5 {
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 10px;
            font-weight: 700;
            margin: 0;
            padding: 0.3rem 0;
        }

    }

    .front {
        height: 100%;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;

        border-radius: 50px;

    }

    .back {
        display: none;
        height: 100%;

    }
}

.my_card:hover {

    .front {
        display: none;

    }

    .back {
        display: block;
        border-radius: 50px;
        text-transform: uppercase;

        .content {
            rotate: -5deg;
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: $type_bg;
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5.3px);
            -webkit-backdrop-filter: blur(5.3px);
            border: 1px solid rgba(255, 0, 0, 0.16);
            border-radius: 50px;
            animation: rotateEnter 700ms linear;
            animation-iteration-count: 1;
        }

    }
}

@keyframes rotateEnter {
    0% {
        rotate: 0;
        scale: 0;
    }

    10% {
        rotate: calc($rotatin_deg * 1);
        scale: 10%;
    }

    20% {
        rotate: calc($rotatin_deg * 2);
        scale: 20%;
    }

    30% {
        rotate: calc($rotatin_deg * 3);
        scale: 30%;
    }

    40% {
        rotate: calc($rotatin_deg * 4);
        scale: 40%;

    }

    50% {
        rotate: calc($rotatin_deg * 5);
        scale: 50%;

    }

    60% {
        rotate: calc($rotatin_deg * 6);
        scale: 60%;
    }

    70% {
        rotate: calc($rotatin_deg * 7);
        scale: 70%;
    }

    80% {
        rotate: calc($rotatin_deg * 8);
        scale: 80%;
    }

    90% {
        rotate: calc($rotatin_deg * 9);
        scale: 90%;
    }

    100% {
        rotate: calc($rotatin_deg * 10.5);
        scale: 100%;
    }
}
</style>