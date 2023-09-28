import { reactive } from "vue";
import axios from '../node_modules/axios'

export const state = reactive({
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=f09ece8e1bf00a0af6a649c3ccfd6bfa',
    query: '',
    filmList: null,

    fetchData() {
        axios.get(this.baseURL + `&query=${this.query}`)
            .then(response => {
                console.log('response...', response);
                this.query = ''
                console.log(response.data.results);
                this.filmList = response.data.results;

            })
            .catch(error => {
                console.log('error : ', error);
            })
    }
})