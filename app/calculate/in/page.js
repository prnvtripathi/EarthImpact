"use client"

import '../../globals.css'
import { Montserrat } from 'next/font/google'
import { useState } from 'react'
import { FaDiscord } from 'react-icons/fa'
import Link from 'next/link'
import Form from './form'


const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['100', '300', '400', '600', '900'],
    style: ["italic", "normal"],
})

const CarbonFootprintCalculator = () => {


    return (
        <div className={montserrat.className} style={{ textAlign: 'center' }}>
            <div className='form-box'>
                <h1>Carbon Footprint Calculator</h1>
                <Form />
            </div>
            <Link href='https://bit.ly/3GOCHEK'>
                <div className='discord-btn'>
                    <FaDiscord size={24}/> Link our Discord bot in your servers
                </div>
            </Link>


        </div>

    );
};

export default CarbonFootprintCalculator;