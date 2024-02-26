import { API_MOVIE_LIST_URL } from '../app/(Home)/page'

async function getMovie(id: string) {
    // await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await fetch(`${API_MOVIE_LIST_URL}/${id}`)
    const json = await response.json()
    return json
}

export default async function MovieInfo({id}: {id: string}) {
    const movie = await getMovie(id)
    return (
        <h5>{JSON.stringify(movie)}</h5>
    )
}
