import React from 'react';
import ContactCard from './contactCard';

const ContactList= (props)=>{
    
     
    const RenderContactList= props.contact.map((contacts)=>{
        console.log(contacts)
        return(
           <ContactCard contacts = {contacts}/>
        );
    });

    return(
    <div className="ui celled list">{RenderContactList}</div>
    );
}

export default ContactList