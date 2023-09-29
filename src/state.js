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
    baseImgUrl: 'https://image.tmdb.org/t/p/w500/',


    fetchData() {
        /* film */
        axios.get(this.baseFilmURL + `api_key=${this.api_key}` + `&query=${this.query}`)
            .then(response => {
                //console.log('response...', response);
                console.log('film:', response.data.results);
                this.filmList = response.data.results;

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
                console.log('serie tv: ', response.data.results);
                this.tvList = response.data.results;

            })
            .catch(error => {
                console.log('error : ', error);
            })

        /* out from axios because .then it's asinc and start only when it recive datas  */
        this.querySpan = this.query;

    }


})