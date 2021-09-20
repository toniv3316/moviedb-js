import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'

// RouteComponent - component that would be rendered if user is logged in
// currentUser - current user taken from AuthContext
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext)

    return (
        <>
            <Route
                {...rest}
                render={(routeProps) =>
                    !!currentUser ? (
                        <RouteComponent {...routeProps} />
                    ) : (
                        <Redirect to={'/login'} />
                    )
                }
            />
        </>
    )
}

export default PrivateRoute
