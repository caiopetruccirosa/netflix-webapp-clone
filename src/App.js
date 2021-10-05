import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import MovieRow from "./components/MovieRow/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";

import Tmdb from "./services/Tmdb/Tmdb";

import './App.css'

const App = () => {
  const [homeData, setHomeData] = useState([])
  const [featuredMovie, setFeaturedMovie] = useState([])

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

  return (
    <div className="page">
      <Header />

      {featuredMovie &&
        <FeaturedMovie movie={featuredMovie}/>
      }

      {homeData && homeData.length > 0 &&
        <section className="lists">
          {homeData.map((item, key) => (
            <MovieRow key={key} title={item.title} movies={item.movies} />
          ))}
        </section>
      }
    </div>
  )
}

export default App;
