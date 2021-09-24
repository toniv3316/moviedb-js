import React from 'react'
import { Box, Button } from '@material-ui/core'
import { useNavigationStyles } from './useNavigationStyles'
import { Link } from 'react-router-dom'
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher'

const Navigation = () => {
    const classes = useNavigationStyles()
    return (
        <>
            <nav className={classes.navigation}>
                <Box className={classes.navigation__primary}>
                    <Link className={classes.navigation__link} to='/'>
                        Home
                    </Link>
                    <Link className={classes.navigation__link} to='/films'>
                        Originals
                    </Link>
                    <Link className={classes.navigation__link} to='/shows'>
                        Trending
                    </Link>
                    <Link className={classes.navigation__link} to='/shows'>
                        Top rated
                    </Link>
                    <Link className={classes.navigation__link} to='/shows'>
                        Actions
                    </Link>
                    <Link className={classes.navigation__link} to='/shows'>
                        Comedies
                    </Link>
                    <Link className={classes.navigation__link} to='/shows'>
                        Horrors
                    </Link>
                    <Link className={classes.navigation__link} to='/shows'>
                        Romances
                    </Link>
                    <Link className={classes.navigation__link} to='/shows'>
                        Documentaries
                    </Link>
                    <Link className={classes.navigation__link} to='/shows'>
                        Random Movie
                    </Link>
                </Box>
                <Box className={classes.navigation__subordinate}>
                    <Link className={classes.navigation__link} to='/profile'>
                        Profile
                    </Link>
                    <ThemeSwitcher />
                    <Box>
                        <Button className={classes.navigation__btn} variant='outlined'>Log out</Button>
                    </Box>
                </Box>
            </nav>
        </>
    )
}

export default Navigation
