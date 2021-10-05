const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = process.env.REACT_APP_TMDB_API_KEY

const LANGUAGE = 'pt-BR'
const NETFLIX_NETWORK = 213

const GENRE_CODE = {
    ACTION_GENRE: 28,
    COMEDY_GENRE: 35,
    HORROR_GENRE: 27,
    ROMANCE_GENRE: 10749,
    DOCUMENTARY_GENRE: 99,
}

const ENDPOINTS = {
    DISCOVER_MOVIE: '/discover/movie',
    DISCOVER_TV: '/discover/tv',
    TRENDING: '/trending/all/week',
    TOP_RATED: '/movie/top_rated',
    MOVIE: '/movie',
    TV: '/tv',
}

const fetchFromTmdb = async (path) => {
    let url = `${API_BASE_URL}${path}`

    if (url.includes('?')) {
        url += `&api_key=${API_KEY}`
    } else {
        url += `?api_key=${API_KEY}`
    }

    const res = await fetch(url)
    const body = await res.json()

    return body
}

const Tmdb = {
    fetchHomeData: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                movies: await fetchFromTmdb(`${ENDPOINTS.DISCOVER_TV}?with_network=${NETFLIX_NETWORK}&language=${LANGUAGE}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                movies: await fetchFromTmdb(`${ENDPOINTS.TRENDING}?with_network=${NETFLIX_NETWORK}&language=${LANGUAGE}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                movies: await fetchFromTmdb(`${ENDPOINTS.TOP_RATED}?with_network=${NETFLIX_NETWORK}&language=${LANGUAGE}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                movies: await fetchFromTmdb(`${ENDPOINTS.DISCOVER_MOVIE}?with_genres=${GENRE_CODE.ACTION_GENRE}&language=${LANGUAGE}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                movies: await fetchFromTmdb(`${ENDPOINTS.DISCOVER_MOVIE}?with_genres=${GENRE_CODE.COMEDY_GENRE}&language=${LANGUAGE}`)
            },
            {
                slug: 'horror',
                title: 'Terror/Suspense',
                movies: await fetchFromTmdb(`${ENDPOINTS.DISCOVER_MOVIE}?with_genres=${GENRE_CODE.HORROR_GENRE}&language=${LANGUAGE}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                movies: await fetchFromTmdb(`${ENDPOINTS.DISCOVER_MOVIE}?with_genres=${GENRE_CODE.ROMANCE_GENRE}&language=${LANGUAGE}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                movies: await fetchFromTmdb(`${ENDPOINTS.DISCOVER_MOVIE}?with_genres=${GENRE_CODE.DOCUMENTARY_GENRE}&language=${LANGUAGE}`)
            },
        ]
    },
    fetchMovieData: async (id, type) => {
        let path = ''
        if (type === 'movie') {
            path = `${ENDPOINTS.MOVIE}/${id}`
        } else if (type === 'tv') {
            path = `${ENDPOINTS.TV}/${id}`
        }

        return await fetchFromTmdb(`${path}?language=${LANGUAGE}`)
    }
}

export default Tmdb