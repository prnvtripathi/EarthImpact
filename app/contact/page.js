import { Montserrat } from "next/font/google"
import contacts from "./contacts";
import Card from "./card";

const montserrat = Montserrat({
    weights: [400, 500, 600, 700],
    subsets: ['latin'],
    variants: ['normal', 'italic'],
})

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            name={contact.name}
            image={contact.imgURL}
            twt={contact.twitter}
            email={contact.email}
        />
    );
}

const Contact = () => {
    return (
        <div className={montserrat.className}>
            <h1 className="contact-heading">Contact the Developers</h1>
            <div className="card-container">
                {contacts.map(createCard)}
            </div>
        </div>
    )
}

export default Contact;