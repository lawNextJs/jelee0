// import { API_URL } from '../(Home)/page'
const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getCredits(id: string) {
    const response = await fetch(`${API_URL}/${id}/credits`)
    const json = await response.json()
    return json
}

export default async function MovieCredits({id}: {id: string}) {
    const video = await getCredits(id)
    return (
        <h5>{JSON.stringify(video)}</h5>
    )
}
