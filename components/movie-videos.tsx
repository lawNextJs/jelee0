// import { error } from "console"
import { API_MOVIE_LIST_URL } from '../app/(Home)/page'

async function getVideo(id: string) {
    // await new Promise(resolve => setTimeout(resolve, 5000))
    // throw new Error('something wrong...')
    const response = await fetch(`${API_MOVIE_LIST_URL}/${id}/videos`)
    const json = await response.json()
    return json
}

export default async function MovieVideos({id}: {id: string}) {
    const video = await getVideo(id)
    return (
        <h5>{JSON.stringify(video)}</h5>
    )
}
