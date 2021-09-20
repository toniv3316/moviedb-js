import React, { useEffect, useState } from 'react'
import { Box, Container } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Registration from './components/authentification/registration/Registration'
import Login from './components/authentification/login/Login'
import Home from './pages/home/Home'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './routes/PrivateRoute'

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Container maxWidth={false}>
                        <Box
                            width='100%'
                            height='100vh'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <PrivateRoute exact path='/' component={Home} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/registration' component={Registration} />
                        </Box>
                    </Container>
                </Router>
            </AuthProvider>
        </>
    )
}

export default App
