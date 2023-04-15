import Link from 'next/link'
import './globals.css'
import './page.module.css'
import { Inter } from 'next/font/google'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logoWhite from './assets/logoWhite.png'
import Image from 'next/image'
import Head from 'next/head'


const inter = Inter({
  subsets: ['latin']
})

export default function RootLayout({ children }) {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <html lang="en">
      <Head>
        <title>Earth Impact</title>
      </Head>
      <body>
        <nav className={inter.className}>
          <div className='brand-container'>
            <Link href='/' className='brand'>EarthImpact</Link>
          </div>
          <ul>
            <li><Link href='/' className="nav-links">Home</Link></li>
            <li><Link href='/calculate' className="nav-links">Estimate</Link></li>
            <li><Link href='/save' className='nav-links'>Preventions</Link></li>
            <li><Link href='/todo' className='nav-links'>Actions</Link></li>
          </ul>
          <Link className='github-link' href='https://github.com/prnvtripathi/EarthImpact'><FaGithub /> Github</Link>
        </nav>
        {children}

        <footer className={inter.className}>
          <div className="container">
            <div className="logo">
              <Image src={logoWhite} alt="Earth Impact Logo" width={200} height={100} />
            </div>
            <div className="links">
              <Link href="https://github.com/prnvtripathi/EarthImpact">GitHub</Link>
              <Link href="/">Log in/Sign Up</Link>
              <Link href="https://earth-impact.vercel.app">Vercel</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
            <div className="social-icons">
              <Link href="/contact"><FaGithub /></Link>
              <Link href="/contact"><FaTwitter /></Link>
              <Link href="/contact"><FaLinkedin /></Link>
            </div>
            <div className="copyright">
              &copy; {year} Earth Impact. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
