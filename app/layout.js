import Link from 'next/link'
import './globals.css'
import './page.module.css'
import { Inter } from 'next/font/google'
import {FaGithub} from 'react-icons/fa'

const inter = Inter({
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className={inter.className}>
          <div className='brand-container'>
            <Link href='/' className='brand'>CarbonCheck</Link>
          </div>
          <ul>
            <li><Link href='/calculate' className='nav-links'>Calculate</Link></li>
            <li><Link href='/about' className='nav-links'>About</Link></li>
            <li><Link href='/contact' className='nav-links'>Contact</Link></li>
          </ul>
          <Link className='github-link' href='https://github.com/prnvtripathi/carbon-check'><FaGithub /> Github</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
