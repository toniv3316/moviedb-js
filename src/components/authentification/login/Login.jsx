import React, { useCallback, useContext } from 'react'
import { Box, Typography, TextField, Button } from '@material-ui/core'
import { withRouter, Redirect } from 'react-router'
import app from '../firebase'
import { AuthContext } from '../../../contexts/AuthContext'
import { Link } from 'react-router-dom'

const Login = ({ history }) => {
    //async function that logs into the account via firebase inset method signInWithEmailAndPassword()
    // uses history to get access to routing and change route if needed
    // if login is sucesfull, redirecting new user to default path '/' that will open homepage
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault()
            const { email, password } = event.target.elements
            try {
                await app.auth().signInWithEmailAndPassword(email.value, password.value)
                history.push('/')
            } catch (error) {
                alert(error)
            }
        },
        [history]
    )

    //if currentUser is not empty, it will redirect to homepage
    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to='/' />
    }

    return (
        <>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignContent='center'
                textAlign='center'
                minWidth='350px'
                maxWidth='700px'
                border={1}
                borderColor='primary.main'
                color='primary.main'
                px={3}
                pt={3}
            >
                <form onSubmit={(e) => handleLogin(e)}>
                    <Box mb={3} minWidth='300px'>
                        <Typography variant='h3'>Login</Typography>
                    </Box>
                    <Box mb={2} minWidth='300px'>
                        <TextField
                            required
                            fullWidth
                            label='Email'
                            variant='outlined'
                            type='email'
                            name='email'
                        />
                    </Box>
                    <Box mb={2} minWidth='300px'>
                        <TextField
                            required
                            fullWidth
                            label='Password'
                            variant='outlined'
                            type='password'
                            name='password'
                        />
                    </Box>
                    <Box mb={3}>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            disableElevation
                        >
                            Login
                        </Button>
                    </Box>
                </form>
                <Box>
                    <Typography paragraph>
                        Do not have an account? <Link to='/registration'> Register </Link>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

//withRouter is a HOC that used to controll pathes that are available to reach without logging in
export default withRouter(Login)
