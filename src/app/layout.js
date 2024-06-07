import { Inter, Montserrat, Poiret_One } from 'next/font/google'
import './globals.css'
import TransitionProvider from '@/components/transitionProvider'



const inter = Inter({ subsets: ['latin'] })

const poiretOne = Poiret_One({
  subsets: ['latin'],
  weight: '400',
})


export const metadata = {
  title: 'Maximus - Portfolio',
  description: 'haha yes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poiretOne.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  )
}