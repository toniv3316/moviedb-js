import React, { useEffect, useState } from 'react'
import HomePage from './HomePage'
import { filmsRequests } from '../../api/Api'
import Loader from '../../components/loader/Loader'

const Home = () => {
    //isLoaded is used to control the render of Home component when all needed data is ready
    const [isLoaded, setIsLoaded] = useState(false)
    const [actionMovies, setActionMovies] = useState()

    //function should be async because of async fetching from server Api
    //after data is fetched from Api, it is putted into useState via setting functions
    async function getActionMovies() {
        setActionMovies(await filmsRequests.getActionMovies())
        setIsLoaded(true)
    }

    //useEffect will work once after component will be rendered. it will call the async function
    //to fetch data from Api via api requests
    useEffect(() => {
        getActionMovies()
    }, [])

    return <>{isLoaded ? <HomePage actionMovies={actionMovies} /> : <Loader />}</>
}

export default Home
