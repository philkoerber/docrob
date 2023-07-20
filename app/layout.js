import Footer from './Footer'
import Header from './Header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400"})

export const metadata = {
  title: 'DOC.ROB',
  description: 'your portal to the doc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body
        className={poppins.className}>
        <Header />
        <div className='mx-auto max-w-[1080px] my-12'>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
