import './FeaturedMovie.css'

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

const FeaturedMovie = ({movie}) => {
    const firstAirDate = new Date(movie.first_air_date)
    
    const genres = []
    for (let i in movie.genres) {
        genres.push(movie.genres[i].name)
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${TMDB_IMAGE_BASE_URL}${movie.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {movie.original_name}
                    </div>

                    <div className="featured--info">
                        <div className="featured--points">
                            {movie.vote_average}
                        </div>

                        <div className="featured--year">
                            {firstAirDate.getFullYear()}
                        </div>

                        <div className="featured--seasons">
                            {movie.number_of_seasons} temporadas
                        </div>
                    </div>

                    <div className="featured--description">
                        {movie.overview}
                    </div>
                    <div className="featured--buttons">

                    </div>
                    <div className="featured--genres">
                        <strong>Gêneros: </strong>{genres.join(', ')}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie