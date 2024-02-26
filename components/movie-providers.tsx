import { API_MOVIE_LIST_URL } from '../app/(Home)/page'

async function getProviders(id: string) {
    const response = await fetch(`${API_MOVIE_LIST_URL}/${id}/providers`)
    const json = await response.json()
    return json
}

export default async function MovieProviders({id}: {id: string}) {
    const video = await getProviders(id)
    return (
        <h5>{JSON.stringify(video)}</h5>
    )
}
