import React, { useState } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { FilmSectionStyles } from './FilmsSectionStyles'

const FilmsSection = ({ filmsToMap }) => {
    const classes = FilmSectionStyles()
    const imagePath = 'https://image.tmdb.org/t/p/original/'
    const [trailerID, setTrailerID] = useState(null)

    //+ attr backdrop_path shows fullHD image
    //+ attr poster_path shows poster image
    /* overview popularity release_date title vote_average vote_count

    */

    const showTrailer = (id) => {
        setTrailerID((prev) => {
            prev === id ? (id = null) : setTrailerID(id)
        })
    }

    const films = filmsToMap.map((film) => {
        return (
            <>
                <Box key={film.title} className={classes.filmsSection__film}>
                    <Box className={classes.filmsSection__blurred}>
                        <Button
                            className={classes.filmsSection__button}
                            onClick={() => showTrailer(film.id)}
                        >
                            {trailerID === film.id ? (
                                <Box className={classes.filmsSection__trailer}></Box>
                            ) : (
                                <img
                                    className={classes.filmsSection__poster}
                                    src={`${imagePath}${film.backdrop_path}`}
                                    alt={film.original_title}
                                />
                            )}
                        </Button>
                    </Box>
                    <Typography variant='h5'>{film.original_title}</Typography>
                    //todo add star rating
                    {/* <Box>
                        <Typography variant='h6'>Rating</Typography>
                        <Rating name='customized-10' defaultValue={2} max={10} />
                    </Box> */}
                    <Box>
                        <Typography variant='body1'>{film.overview}</Typography>
                    </Box>
                    {/* <img src={`${imagePath}${film.backdrop_path}`} alt={film.original_title} /> */}
                    {/*  <img src={`${imagePath}${film.poster_path}`} alt={film.original_title} /> */}
                </Box>
            </>
        )
    })

    return (
        <>
            <Box className={classes.filmsSection}>{films}</Box>
        </>
    )
}

export default FilmsSection
