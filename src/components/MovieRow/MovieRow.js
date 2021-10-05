import './MovieRow.css'

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
const TMDB_IMAGE_SIZE = '/w500'

const MovieRow = ({title, movies}) => {
    return (
        <div className="movierow">
            <h2>{title}</h2>
            <div className="movierow--listarea">
                <div className="movierow--list">
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