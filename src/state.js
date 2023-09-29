import { reactive } from "vue";
import axios from '../node_modules/axios'

export const state = reactive({
    baseFilmURL: 'https://api.themoviedb.org/3/search/movie?',
    baseSeriesURL: 'https://api.themoviedb.org/3/search/tv?',
    api_key: 'f09ece8e1bf00a0af6a649c3ccfd6bfa',
    query: '',
    querySpan: '',
    filmList: null,
    tvList: null,
    baseFlagUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/',
    baseImgUrl: 'https://image.tmdb.org/t/p/w780/',


    fetchData() {
        /* film */
        axios.get(this.baseFilmURL + `api_key=${this.api_key}` + `&query=${this.query}`)
            .then(response => {
                //console.log('response...', response);
                //console.log('film:', response.data.results);
                this.filmList = response.data.results;

                for (let i = 0; i < this.filmList.length; i++) {

                    /* actors */
                    axios
                        .get(`https://api.themoviedb.org/3/movie/${this.filmList[i].id}/credits?api_key=${this.api_key}`)
                        .then(response => {
                            //console.log('cast ', this.filmList[i].title, response.data.cast);

                            let cast = [];

                            for (let j = 0; j < response.data.cast.length; j++) {

                                //console.log(response.data.cast[j]);
                                cast.push(response.data.cast[j].name)

                            }

                            //console.log(cast);
                            this.filmList[i].cast = cast
                            //console.log(this.filmList);

                        });

                    /* genres */
                    axios
                        .get(`https://api.themoviedb.org/3/movie/${this.filmList[i].id}?api_key=${this.api_key}`)
                        .then(response => {
                            //console.log('cast ', this.filmList[i].title, response.data.cast);

                            let genres = [];

                            for (let j = 0; j < response.data.genres.length; j++) {

                                //console.log(response.data.genres[j].name);
                                genres.push(response.data.genres[j].name)

                            }
                            console.log(genres);
                            this.filmList[i].genres = genres

                        });
                }

            })
            .catch(error => {
                console.log('error : ', error);
            })

        /* serie tv */
        axios.get(this.baseSeriesURL + `api_key=${this.api_key}` + `&query=${this.query}`)
            .then(response => {
                //console.log('response...', response);
                this.querySpan = this.query;
                this.query = '';
                //console.log('serie tv: ', response.data.results);
                this.tvList = response.data.results;

                for (let i = 0; i < this.tvList.length; i++) {

                    /* actors */
                    axios
                        .get(`https://api.themoviedb.org/3/tv/${this.tvList[i].id}/credits?api_key=${this.api_key}`)
                        .then(response => {
                            //console.log('cast ', this.tvList[i].title, response.data.cast);

                            let cast = [];

                            for (let j = 0; j < response.data.cast.length; j++) {

                                //console.log(response.data.cast[j]);
                                cast.push(response.data.cast[j].name)

                            }

                            //console.log(cast);
                            this.tvList[i].cast = cast
                        })

                    /* genres */
                    axios
                        .get(`https://api.themoviedb.org/3/tv/${this.tvList[i].id}?api_key=${this.api_key}`)
                        .then(response => {
                            //console.log('cast ', this.filmList[i].title, response.data.cast);

                            let genres = [];

                            for (let j = 0; j < response.data.genres.length; j++) {

                                //console.log(response.data.genres[j].name);
                                genres.push(response.data.genres[j].name)

                            }
                            //console.log(genres);
                            this.tvList[i].genres = genres

                        });
                }

                console.log(this.tvList);

            }


            )
            .catch(error => {
                console.log('error : ', error);
            })

        /* out from axios because .then it's asinc and start only when it recive datas  */
        this.querySpan = this.query;

    }


})