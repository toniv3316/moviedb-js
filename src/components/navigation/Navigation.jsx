import React from 'react'
import { Box, Button, Switch } from '@material-ui/core'
import { NavigationStyles } from './NavigationStyles'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Link } from 'react-router-dom'
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher'

const Navigation = () => {
    const classes = NavigationStyles()
    return (
        <>
            <nav className={classes.navigation}>
                <Box className={classes.navigation__primary}>
                    <Link className={classes.navigation__link} to='/'>
                        Home
                    </Link>
                    <Link className={classes.navigation__link} to='/films'>
                        Films
                    </Link>
                    <Link className={classes.navigation__link} to='/shows'>
                        TV Shows
                    </Link>
                </Box>
                <Box className={classes.navigation__subordinate}>
                    <Link className={classes.navigation__link} to='/profile'>
                        Profile
                    </Link>
                    <ThemeSwitcher />
                    <Button variant='outlined'>Log out</Button>
                </Box>
            </nav>
        </>
    )
}

export default Navigation
