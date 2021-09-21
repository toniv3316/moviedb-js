import { Box } from '@material-ui/core'
import React from 'react'
import FilmsSection from '../../components/filmsSection/FilmsSection'

const HomePage = ({actionMovies}) => {
    console.log(actionMovies.results)
    return (
        <>
            <Box>
                Home
                {/* <FilmsSection  filmsToMap={actionMovies} /> */}
            </Box>
        </>
    )
}

export default HomePage
