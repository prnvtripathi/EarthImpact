import '../globals.css';
import { Montserrat } from 'next/font/google';
import Accordion from './accordion.js';
import { accordionData } from './content';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    styles: ['normal', 'italic'],
})

export default function Save() {
    return (
        <div className={montserrat.className}>
            <h1 className='save-heading'>Let us help you in saving your carbon footprints 👣</h1>

            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
        </div>
    );
}