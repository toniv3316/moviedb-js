import axios from 'axios'

const API_KEY = '053868e11d49c0b87e0f32b1c1cea68d'
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export const filmsRequests = {
    getActionMovies() {
        return instance
            .get(`discover/movie?api_key=${API_KEY}&with_genres=28`)
            .then((response) => {
                return response.data
            })
    },
    getHorrorMovies() {
        return instance
            .get(`discover/movie?api_key=${API_KEY}&with_genres=27`)
            .then((response) => {
                return response.data
            })
    },
    getTrendingMovies() {
        return instance
            .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                return response.data
            })
    },
    getNetflixOriginals() {
        return instance
            .get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
            .then((response) => {
                return response.data
            })
    },
    getTopRated() {
        return instance
            .get(`movie/top_rated?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                return response.data
            })
    },
    getComedyMovies() {
        return instance
            .get(`discover/movie?api_key=${API_KEY}&with_genres=35`)
            .then((response) => {
                return response.data
            })
    },
    getRomanceMovies() {
        return instance
            .get(`discover/movie?api_key=${API_KEY}&with_genres=10749`)
            .then((response) => {
                return response.data
            })
    },
    getDocumentaryMovies() {
        return instance
            .get(`discover/movie?api_key=${API_KEY}&with_genres=99`)
            .then((response) => {
                return response.data
            })
    },
    getRandomMovie() {
        const randomMovie = Math.floor(Math.random() * 20)
        return instance
            .get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
            .then((response) => {
                return response.data.results[randomMovie]
            })
    },
}
