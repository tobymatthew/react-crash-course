import React from "react";
import "./App.css";
import AddContactList from "./addContactList";
import ContactList from "./contactList";
// import contactCard from './contactCard';
import Header from "./Header";

function App() {
  const contact = [
    {
      name: "Tobi",
      email: "trobi18@gmail.com",
    },
    {
      name: "Adeboye",
      email: "trob18@gmail.com",
    },
  ];
  return (
    <div>
      <Header />
      <AddContactList />
      <ContactList contact={contact} />

      {/* <contactCard/> */}
    </div>
  );
}

export default App;
