import React, { useContext } from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import app from '../../components/authentification/firebase'
import { AuthContext } from '../../contexts/AuthContext'

const Home = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        <>
            <Box>
                <Box>
                    <Typography variant='h5'>Home</Typography>
                </Box>
                <Box>
                    <Typography variant='h6'>Welcome, {currentUser.email}</Typography>
                </Box>
                <Box>
                </Box>
                <Box>
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={() => app.auth().signOut()}
                    >
                        Sign out
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Home
