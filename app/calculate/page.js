import Link from 'next/link'
import '../globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['100', '300', '400', '600', '900'],
    style: ["italic", "normal"],
})

const Calculate = ()  => {
    return (
        <div className={montserrat.className}>
            <h1 className='calc-head'>Who are you?</h1>
            <p className='calc-para'>Earth Impact uses different algorithms for devising accurate carbon footprints. Choose a category to proceed further.</p>
            <div className='div-btns'>
                <Link href="/calculate/in">
                    <div className='div-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <h2>I'm an Individual</h2>
                    </div>
                </Link>
                <Link href="/calculate/com">
                    <div className='div-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <h2>I'm an Organization</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Calculate
