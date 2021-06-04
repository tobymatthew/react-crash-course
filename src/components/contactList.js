import React from 'react';

const ContactList= (props)=>{
    
     
    const RenderContactList= props.contact.map((contacts)=>{
        console.log(contacts)
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{contacts.name}</div>
                    <div>{contacts.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        );
    });

    return(
    <div className="ui celled list">{RenderContactList}</div>
    );
}

export default ContactList