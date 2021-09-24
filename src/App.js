import React from 'react'
import { Box } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Registration from './components/authentification/registration/Registration'
import Login from './components/authentification/login/Login'
import Home from './pages/home/Home'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './routes/PrivateRoute'
import Profile from './pages/profile/Profile'
import Navigation from './components/navigation/Navigation'

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Box>
                        <PrivateRoute path='/' component={Navigation} />
                        <PrivateRoute exact path='/' component={Home} />
                        <PrivateRoute exact path='/profile' component={Profile} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/registration' component={Registration} />
                    </Box>
                </Router>
            </AuthProvider>
        </>
    )
}

export default App
