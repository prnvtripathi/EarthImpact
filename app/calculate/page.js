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
            <p className='calc-para'>Earth Impact uses different algorithms for devising accurate carbon footprint. Choose a category to proceed further</p>
            <div className='div-btns'>
                <Link href="/calculate/in">
                    <div className='div-btn'>
                        <h2>I'm an Individual</h2>
                    </div>
                </Link>
                <Link href="/calculate/com">
                    <div className='div-btn'>
                        <h2>I'm an Organization</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Calculate
