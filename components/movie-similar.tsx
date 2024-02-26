import { API_MOVIE_LIST_URL } from '../app/(Home)/page'

async function getSimilars(id: string) {
    const response = await fetch(`${API_MOVIE_LIST_URL}/${id}/similar`)
    const json = await response.json()
    return json
}

export default async function MovieSimilar({id}: {id: string}) {
    const video = await getSimilars(id)
    return (
        <h5>{JSON.stringify(video)}</h5>
    )
}
