import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Movie'
}

// export default function MovieDetail({params: {id}}: {params: {id: string}}) {
//     console.log(id)
//     return (
//         <h1>Movie {id}</h1>
//     )
// }

export default function MovieDetail({params: {id}, searchParams: {region, page}}: {params: {id: number}, searchParams: {region: string, page: number}}) {
    console.log(id)
    return (
        <h1>Movie id:{id}, region:{region}, page:{page}</h1>
    )
}

// test url: http://localhost:3000/movies/123?region=kr&page=2
