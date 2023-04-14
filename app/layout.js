import Link from 'next/link'
import './globals.css'
import './page.module.css'
import { Inter } from 'next/font/google'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logoWhite from './assets/logoWhite.png'
import Image from 'next/image'
// import { useState } from 'react';


const inter = Inter({
  subsets: ['latin']
})

export default function RootLayout({ children }) {

  // const [activeLink, setActiveLink] = useState('Home');

  // const handleLinkClick = (event) => {
  //   setActiveLink(event.target.textContent);
  // };

  return (
    <html lang="en">
      <body>
        <nav className={inter.className}>
          <div className='brand-container'>
            <Link href='/' className='brand'>EarthImpact</Link>
          </div>
          <ul>
            <li><Link href='/calculate' className="nav-links">Estimate</Link></li>
            <li><Link href='/save' className='nav-links'>Preventions</Link></li>
            <li><Link href='/contact' className='nav-links'>Contact</Link></li>
          </ul>
          <Link className='github-link' href='https://github.com/prnvtripathi/EarthImpact'><FaGithub /> Github</Link>
        </nav>
        {children}

        <footer>
          <div className="container">
            <div className="logo">
              <Image src={logoWhite} alt="Earth Impact Logo" width={200}  height={100}/>
            </div>
            <div className="links">
              <a href="#">GitHub</a>
              <a href="#">Log in/Sign Up</a>
              <a href="#">Vercel</a>
              <a href="#">Wikipidia</a>
            </div>
            <div className="social-icons">
              <a href="#"><FaGithub /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
            <div className="copyright">
              &copy; 2023 Earth Impact. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
