import React from 'react'
import Banner from '../../components/banner/Banner'
import FilmsSection from '../../components/filmsSection/FilmsSection'

const HomePage = ({
    trendingMovies,
    netflixOriginals,
    topRatedMovies,
    actionMovies,
    horrorMovies,
    comedyMovies,
    romanceMovies,
    documentaryMovies,
    randomMovie
}) => {
    return (
        <>
            <Banner film={randomMovie} />
            <FilmsSection filmsToMap={actionMovies.results} sectionName='Action Movies' />
            <FilmsSection filmsToMap={horrorMovies.results} sectionName='Horror Movies' />
            <FilmsSection
                filmsToMap={trendingMovies.results}
                sectionName='Trending Movies'
            />
        </>
    )
}

export default HomePage
