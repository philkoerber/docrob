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

      <body
        className={poppins.className}>
        <Header />
        <div className='mx-auto max-w-[720px] my-12'>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
