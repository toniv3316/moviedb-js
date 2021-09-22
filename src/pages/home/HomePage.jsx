import { Box } from '@material-ui/core'
import React from 'react'
import FilmsSection from '../../components/filmsSection/FilmsSection'

const HomePage = ({ actionMovies, horrorMovies }) => {
    console.log(actionMovies.results)
    return (
        <>
            <FilmsSection filmsToMap={actionMovies.results} />
            <FilmsSection filmsToMap={horrorMovies.results} />
        </>
    )
}

export default HomePage
