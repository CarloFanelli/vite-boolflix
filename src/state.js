import { reactive } from "vue";
import axios from '../node_modules/axios'

export const state = reactive({
    baseFilmURL: 'https://api.themoviedb.org/3/search/movie?api_key=f09ece8e1bf00a0af6a649c3ccfd6bfa',
    baseSeriesURL: 'https://api.themoviedb.org/3/search/tv?api_key=f09ece8e1bf00a0af6a649c3ccfd6bfa',
    query: '',
    querySpan: '',
    filmList: null,
    tvList: null,
    baseFlagUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/',


    fetchData() {
        axios.get(this.baseFilmURL + `&query=${this.query}`)
            .then(response => {
                //console.log('response...', response);
                this.querySpan = this.query;
                this.query = '';
                //console.log(response.data.results);
                this.filmList = response.data.results;

            })
            .catch(error => {
                console.log('error : ', error);
            })

        axios.get(this.baseSeriesURL + `&query=${this.query}`)
            .then(response => {
                console.log('response...', response);
                this.querySpan = this.query;
                this.query = '';
                console.log(response.data.results);
                this.tvList = response.data.results;

            })
            .catch(error => {
                console.log('error : ', error);
            })
    }


})