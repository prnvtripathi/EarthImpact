import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <nav>
          <div className='nav-brand'>
            <Link href='/' className='brand'>CarbonCheck</Link>
          </div>
          <ul>
            <li><Link href='/calculate' className='nav-links'>Calculate</Link></li>
            <li><Link href='/about' className='nav-links'>About</Link></li>
            <li><Link href='/contact' className='nav-links'>Contact</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
