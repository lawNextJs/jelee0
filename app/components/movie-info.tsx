import { API_URL } from '../(Home)/page'
import styles from '../styles/movie-info.module.css'

// const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

export async function getMovie(id: string) {
    // await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(API_URL)
    const response = await fetch(`${API_URL}/${id}`)
    const json = await response.json()
    return json
}

export default async function MovieInfo({id}: {id: string}) {
    const movie = await getMovie(id)
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={'_blank'}>Homepage &rarr;</a>
            </div>
        </div>
    )
}
