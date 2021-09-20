import React, { useCallback } from 'react'
import { Box, Typography, TextField, Button } from '@material-ui/core'
import { withRouter } from 'react-router'
import app from '../firebase'
import { Link } from 'react-router-dom'

const Registration = ({ history }) => {
    // async registration function, creates an account and automatically logs into it
    // uses history to get access to routing and change route if needed
    // if registration is sucesfull, redirecting new user to default path '/'
    const handleRegistration = useCallback(
        async (event) => {
            event.preventDefault()
            const { email, password } = event.target.elements
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value)
                history.push('/')
            } catch (error) {
                alert(error)
            }
        },
        [history]
    )

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
                <form onSubmit={(e) => handleRegistration(e)}>
                    <Box mb={3} minWidth='300px'>
                        <Typography variant='h3'>Registration</Typography>
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
                            Register
                        </Button>
                    </Box>
                </form>
                <Box>
                    <Typography paragraph>
                        Already have an account? <Link to='/login'> Log in </Link>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default withRouter(Registration)
