import React from 'react'
import { makeStyles } from '@material-ui/core'

const ComplexBackground = ({ children, image }) => {
    const useStyles = makeStyles({
        container: {
            height: '100%',
            background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)), url(${image})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        },
    })

    const classes = useStyles()
    return (
        <>
            <div className={classes.container}>{children}</div>
        </>
    )
}

export default ComplexBackground
