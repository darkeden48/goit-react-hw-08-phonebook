import React from 'react';
import Form from "../components/Form/Form";
import Contacts from "../components/Contacts/Contacts";
import Filter from "../components/Filter/Filter";

const PhoneBookPage = () => {

    return (
      <div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    );
  };
  export default PhoneBookPage;