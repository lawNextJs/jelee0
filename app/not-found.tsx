import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Not Found',
    // description: 'Not Found DESC.'
}

export default function() {
    return (
        <div>
            <h1>this is not found page</h1>
        </div>
    )
}
