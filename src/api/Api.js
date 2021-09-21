// 053868e11d49c0b87e0f32b1c1cea68d

import axios from 'axios'

const API_KEY = '053868e11d49c0b87e0f32b1c1cea68d'

const requests = {
    getTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    getNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    getTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    getRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    getDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
}

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

const getFilms = (request) => {
    return (
        instance.get(request).then(response => {return response.data})
    )
}

export const filmsRequests = {
    getActionMovies() {
        return (
            instance.get(`discover/movie?api_key=${API_KEY}&with_genres=28`)
                .then(response => {
                    return response.data
                })
        )
    },
    getHorrorMovies() {
        return (
            instance.get(`discover/movie?api_key=${API_KEY}&with_genres=27`)
                .then(response => {
                    return response.data
                })
        )
    },
}

//     getUserInfo(userId) {
//         console.log('Use profileAPI to work with profile')
//         return profileAPI.getUserInfo(userId)
//     },