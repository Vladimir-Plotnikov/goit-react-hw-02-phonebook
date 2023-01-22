import React, { Component } from 'react'
import './ContactForm/ContactForm.css';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component{
  state = {
  contacts: [],
  name: ''
  }


  render() {
    return (
      <div className='GlobalClass'>
        <div className='PhoneBookBox'>
          <h1>Phonebook</h1>
          <ContactForm/>
        </div>
      </div>
  )
}


}


