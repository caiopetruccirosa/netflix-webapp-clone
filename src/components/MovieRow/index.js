import { NavigateBefore, NavigateNext } from '@material-ui/icons'
import { useState } from 'react'

import './MovieRow.css'

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
const TMDB_IMAGE_SIZE = '/w500'

const MovieRow = ({title, movies}) => {
    const MOVIE_WIDTH = 150
    const ROW_WIDTH = (movies.results.length * MOVIE_WIDTH) + 80
    const SKIP_WIDTH = Math.round(window.innerWidth / 2)

    const [scroll, setScroll] = useState(0)

    const handlePrevious = () => {
        let s = scroll + SKIP_WIDTH
        if (s > 0) {
            s = 0
        }

        setScroll(s)
    }

    const handleNext = () => {
        let s = scroll - SKIP_WIDTH
        if (s < (window.innerWidth - ROW_WIDTH)) {
            s = window.innerWidth - ROW_WIDTH
        }
        
        setScroll(s)
    }

    return (
        <div className="movierow">
            <h2>{title}</h2>

            <div className="movierow--previous" onClick={handlePrevious}>
                <NavigateBefore style={{fontSize: 50}}/>
            </div>

            <div className="movierow--next" onClick={handleNext}>
                <NavigateNext style={{fontSize: 50}}/>
            </div>

            <div className="movierow--listarea">
                <div className="movierow--list" style={{
                    marginLeft: scroll, 
                    width: ROW_WIDTH
                }}>
                    {movies.results.map((movie, key) => (
                        <div className="movierow--item" key={key}>
                            <img 
                                src={`${TMDB_IMAGE_BASE_URL}${TMDB_IMAGE_SIZE}${movie.poster_path}`} 
                                alt={movie.original_title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow