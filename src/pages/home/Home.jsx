import React, { useEffect, useState } from 'react'
import HomePage from './HomePage'
import { filmsRequests } from '../../api/Api'
import Loader from '../../components/loader/Loader'

const Home = () => {
    //isLoaded is used to control the render of Home component when all needed data is ready
    const [isLoaded, setIsLoaded] = useState(false)
    const [actionMovies, setActionMovies] = useState([])
    const [horrorMovies, setHorrorMovies] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])
    const [randomMovie, setRandomMovie] = useState(null)

    //function should be async because of async fetching from server Api
    //after data is fetched from Api, it is putted into useState via setting functions
    async function getMovies() {
        setActionMovies(await filmsRequests.getActionMovies())
        setHorrorMovies(await filmsRequests.getHorrorMovies())
        setTrendingMovies(await filmsRequests.getTrendingMovies())
        setRandomMovie(await filmsRequests.getRandomMovie())
        setIsLoaded(true)
    }

    //useEffect will work once after component will be rendered. it will call the async function
    //to fetch data from Api via api requests
    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            {isLoaded ? (
                <HomePage
                    actionMovies={actionMovies}
                    horrorMovies={horrorMovies}
                    trendingMovies={trendingMovies}
                    randomMovie={randomMovie}
                />
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Home
