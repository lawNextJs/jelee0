import { API_MOVIE_LIST_URL } from '../app/(Home)/page'

async function getCredits(id: string) {
    const response = await fetch(`${API_MOVIE_LIST_URL}/${id}/credits`)
    const json = await response.json()
    return json
}

export default async function MovieCredits({id}: {id: string}) {
    const video = await getCredits(id)
    return (
        <h5>{JSON.stringify(video)}</h5>
    )
}
