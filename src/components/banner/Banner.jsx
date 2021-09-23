import React from 'react'
import { Box, Button, Typography, CardMedia } from '@material-ui/core'
import useBannerStyles from './useBannerStyles'

const Banner = ({ film }) => {
    const imagePath = 'https://image.tmdb.org/t/p/original/'
    const classes = useBannerStyles()

    return (
        <>
            <CardMedia
                image={`${imagePath}${film.backdrop_path}`}
                className={classes.banner}
            >
                <Box className={classes.banner__heading}>
                    <Typography variant='h4'>
                        {film.title ? film.title : film.name}
                    </Typography>
                </Box>
                <Box className={classes.banner__wrapper}>
                    <Box className={classes.banner__description}>
                        <Box>
                            <Typography variant='body1'> {film.overview} </Typography>
                            <Button className={classes.banner__button} variant='outlined'>
                                Learn more
                            </Button>
                        </Box>
                        <Box></Box>
                    </Box>
                </Box>
            </CardMedia>
        </>
    )
}

export default Banner
