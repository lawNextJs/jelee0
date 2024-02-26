import Navigation from '../components/navication'

export const metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'empty',
  },
  description: 'Generated by Next.js',
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
