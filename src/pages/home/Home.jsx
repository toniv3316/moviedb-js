import React, { useEffect, useState } from 'react'
import HomePage from './HomePage'
import { filmsRequests } from '../../api/Api'
import Loader from '../../components/loader/Loader'

const Home = () => {
    //isLoaded is used to control the render of Home component when all needed data is ready
    const [isLoaded, setIsLoaded] = useState(false)
    const [trendingMovies, setTrendingMovies] = useState([])
    const [netflixOriginals, setNetflixOriginals] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [actionMovies, setActionMovies] = useState([])
    const [horrorMovies, setHorrorMovies] = useState([])
    const [comedyMovies, setComedyMovies] = useState([])
    const [romanceMovies, setRomanceMovies] = useState([])
    const [documentaryMovies, setDocumentaryMovies] = useState([])
    const [randomMovie, setRandomMovie] = useState(0)

    //function should be async because of async fetching from server Api
    //after data is fetched from Api, it is putted into useState via setting functions
    async function getMovies() {
        setTrendingMovies(await filmsRequests.getTrendingMovies())
        setNetflixOriginals(await filmsRequests.getNetflixOriginals())
        setTopRatedMovies(await filmsRequests.getTopRated())
        setActionMovies(await filmsRequests.getActionMovies())
        setHorrorMovies(await filmsRequests.getHorrorMovies())
        setComedyMovies(await filmsRequests.getComedyMovies())
        setRomanceMovies(await filmsRequests.getRomanceMovies())
        setDocumentaryMovies(await filmsRequests.getDocumentaryMovies())
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
                    trendingMovies={trendingMovies}
                    netflixOriginals={netflixOriginals}
                    topRatedMovies={topRatedMovies}
                    actionMovies={actionMovies}
                    horrorMovies={horrorMovies}
                    comedyMovies={comedyMovies}
                    romanceMovies={romanceMovies}
                    documentaryMovies={documentaryMovies}
                    randomMovie={randomMovie}
                />
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Home
