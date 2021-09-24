import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    heading: {
        margin: '2rem 0 .5rem 0',
    }
})

const CustomHeading = ({heading}) => {
    const classes = useStyles()
    return ( 
        <>
            <Typography className={classes.heading} variant='h4'>
                {heading}
            </Typography>
        </>
    )
}

export default CustomHeading