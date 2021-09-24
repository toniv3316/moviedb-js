import React, { useState } from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { useFilmSectionStyles } from './useFilmsSectionStyles'
import Rating from '@mui/material/Rating'
import CustomHeading from '../customHeading/CustomHeading'

const FilmsSection = ({ filmsToMap, sectionName }) => {
    const classes = useFilmSectionStyles()
    const imagePath = 'https://image.tmdb.org/t/p/original/'
    const [trailerID, setTrailerID] = useState(null)

    //+ attr backdrop_path shows fullHD image
    //+ attr poster_path shows poster image
    /* overview popularity release_date title vote_average vote_count backdrop_path poster_path

    */

    const showTrailer = (id) => {
        setTrailerID((prev) => {
            prev === id ? (id = null) : setTrailerID(id)
        })
    }

    const films = filmsToMap.map((film) => (
        <Box key={film.id} className={classes.filmsSection__film}>
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
            <Box className={classes.filmsSection__description}>
                <Typography variant='h5'>
                    {film.title ? film.title : film.name}
                </Typography>
                <Box>
                    <Rating
                        name='film-rating'
                        readOnly
                        precision={0.1}
                        max={10}
                        value={film.vote_average}
                    />
                </Box>
                <Box>
                    <Typography variant='body1'>{film.overview}</Typography>
                </Box>
                <Box className={classes.filmsSection__functional}>
                    <Button variant='outlined' className={classes.filmsSection__btn}>
                        Learn more
                    </Button>
                </Box>
            </Box>
        </Box>
    ))

    return (
        <>
            <Box className={classes.filmsSection}>
                <Box className={classes.filmsSection__heading}>
                    <CustomHeading heading={`${sectionName}`} />
                </Box>
                <Box className={classes.filmsSection__slider}>{films}</Box>
            </Box>
        </>
    )
}

export default FilmsSection
