import React, {useState,useEffect} from "react";
import "./App.css";
import AddContactList from "./addContactList";
import ContactList from "./contactList";
// import contactCard from './contactCard';
import Header from "./Header";

function App() {
 const [contact, setContact] = useState([]);
 const LOCAL_STORAGE_KEY="contacts"
 
 const contactHandler=(contacts)=>{
   console.log(contacts)
   setContact([...contact,contacts])
 }

 useEffect(()=>{
 const retrieve=JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY,JSON.stringify(contact)));
  if(retrieve){
    setContact(retrieve)
  }
},[])

 useEffect(()=>{
   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contact))
 },[contact])
  return (
    <div>
      <Header />
      <AddContactList contactHandler={contactHandler} />
      <ContactList contact={contact} />

      {/* <contactCard/> */}
    </div>
  );
}

export default App;
