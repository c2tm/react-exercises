function ContactList(props) {

    const {contactArray} = props;

    const contactsHTML = contactArray.map((contact, index) => 
        <li className="list-item" key={index}>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>{contact.tel}</p>
            <p>{contact.email}</p>
        </li>
    )

    return(
        <ul className="contact-list">
            {contactsHTML}
        </ul>
    )
}

export default ContactList;