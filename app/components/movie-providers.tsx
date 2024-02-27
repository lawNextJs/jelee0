// import { API_URL } from '../(Home)/page'

const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getProviders(id: string) {
    const response = await fetch(`${API_URL}/${id}/providers`)
    const json = await response.json()
    return json
}

export default async function MovieProviders({id}: {id: string}) {
    const video = await getProviders(id)
    return (
        <h5>{JSON.stringify(video)}</h5>
    )
}
