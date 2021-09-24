import React from 'react'
import { Box, Button, Typography, CardMedia, makeStyles } from '@material-ui/core'
import useBannerStyles from './useBannerStyles'
import ComplexBackground from '../complexBackground/ComplexBackground'

const Banner = ({ film }) => {
    const imagePath = 'https://image.tmdb.org/t/p/original/'
    const classes = useBannerStyles()

    return (
        <>
            <Box className={classes.banner}>
                <ComplexBackground image={`${imagePath}${film.backdrop_path}`}>
                    <Box className={classes.banner__inner}>
                        <Box className={classes.banner__heading}>
                            <Typography variant='h4'>
                                {film.title ? film.title : film.name}
                            </Typography>
                        </Box>
                        <Box className={classes.banner__wrapper}>
                            <Box className={classes.banner__description}>
                                <Box>
                                    <Typography variant='body1'>
                                        {film.overview}
                                    </Typography>
                                    <Button
                                        className={classes.banner__button}
                                        variant='outlined'
                                    >
                                        Learn more
                                    </Button>
                                </Box>
                                <Box></Box>
                            </Box>
                        </Box>
                    </Box>
                </ComplexBackground>
            </Box>
        </>
    )
}

export default Banner
