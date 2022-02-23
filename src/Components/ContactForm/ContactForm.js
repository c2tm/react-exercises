import { useState } from "react";
import ContactList from "./ContactList";


function ContactForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const [contactArray, setContactArray] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setContactArray([...contactArray, {firstName: firstName, lastName: lastName, email: email, tel: tel }]);
    }

    return(
        <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-label">First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label className="contact-label">Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label className="contact-label">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="contact-label">Phone Number</label>
                <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} />
                <button type="submit" className="create-contact">Create Contact</button>
            </form>
            <div className="contact-list-container">
                <ContactList contactArray={contactArray} />
            </div>
        </div>
    )
}

export default ContactForm;