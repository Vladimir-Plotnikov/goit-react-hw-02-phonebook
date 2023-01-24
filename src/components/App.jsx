import React, { Component } from 'react'
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Sorting from './Sorting/Sorting';

import './ContactForm/ContactForm.css';
import './Sorting/Sorting.css'
import './ContactItem/ContactItem.css'
export class App extends Component{

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
  }

addContact = contact => {
    if (
      !this.state.contacts.find(
        ({ name }) => name.toLocaleLowerCase() === contact.name.toLowerCase()
      )
    ) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    } else {
      alert(`${contact.name} is already in contacts.`);
    }
  };
  // addContact
  /// this.state.contact.find(contact=>contact.name.toLowerCase()!=newContact.name.toLowerCase())
filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
};

findContact = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
};
  
 deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };


//   formSubmitHandler =
//     ({ name, number }) => {
//       this.setState({name, number})
// }

  render() {
    return (
      <div className='GlobalClass'>
        <div className='PhoneBookBox' >
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <Sorting
            value={this.state.filter}
            onChange={this.findContact}
          />
          <ContactList
            contacts={this.filterContacts()}
            deleteContact={this.deleteContact}
             />
        </div>
      </div>
  )
}


}


