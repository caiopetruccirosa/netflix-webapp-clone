import MovieRow from "../MovieRow"

import './MovieLists.css'

const MovieLists = ({lists}) => {
    return (
        <section className="lists">
          {lists.map((item, key) => (
            <MovieRow key={key} title={item.title} movies={item.movies} />
          ))}
        </section>
    )
}

export default MovieLists