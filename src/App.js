import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import MovieLists from "./components/MovieLists/MovieLists"
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";

import Tmdb from "./services/Tmdb/Tmdb";

import './App.css'

const App = () => {
  const [homeData, setHomeData] = useState()
  const [featuredMovie, setFeaturedMovie] = useState()
  const [headerBackground, setHeaderBackground] = useState(false)

  useEffect(() => {
    const fetchAndLoad = async () => {
      const data = await Tmdb.fetchHomeData()
      setHomeData(data)

      const [originals] = data.filter(i => i.slug === 'originals')
      const idx = Math.floor(Math.random() * originals.movies.results.length)
      const featured = originals.movies.results[idx]
      const featuredData = await Tmdb.fetchMovieData(featured.id, 'tv')

      setFeaturedMovie(featuredData)
    }

    fetchAndLoad()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 15) {
        setHeaderBackground(true)
      } else {
        setHeaderBackground(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (
    <div className="page">
      <Header background={headerBackground} />

      {featuredMovie &&
        <FeaturedMovie movie={featuredMovie}/>
      }

      {homeData &&
        <MovieLists lists={homeData} />
      }
    </div>
  )
}

export default App;
