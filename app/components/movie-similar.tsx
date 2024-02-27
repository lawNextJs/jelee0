// import { API_URL } from '../(Home)/page'

const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getSimilars(id: string) {
    const response = await fetch(`${API_URL}/${id}/similar`)
    const json = await response.json()
    return json
}

export default async function MovieSimilar({id}: {id: string}) {
    const video = await getSimilars(id)
    return (
        <h5>{JSON.stringify(video)}</h5>
    )
}
