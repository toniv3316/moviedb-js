import { Box } from '@material-ui/core'
import React from 'react'
import Banner from '../../components/banner/Banner'
import FilmsSection from '../../components/filmsSection/FilmsSection'

const HomePage = ({ actionMovies, horrorMovies, trendingMovies, randomMovie }) => {

    return (
        <>
            <Banner film={randomMovie} />
            <FilmsSection filmsToMap={actionMovies.results} />
            <FilmsSection filmsToMap={horrorMovies.results} />
            <FilmsSection filmsToMap={trendingMovies.results} />
        </>
    )
}

export default HomePage
