import React, { Component } from 'react'
import './ContactForm/ContactForm.css';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component{

  formSubmitHandler = data => {
    return (data)
}
  // state = {
  // contacts: [],
  // name: ''
  // }


  render() {
    return (
      <div className='GlobalClass'>
        <div className='PhoneBookBox' >
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <h1>Contacts</h1>
                <ul>
                    <li>{this.formSubmitHandler()}</li>
                </ul>
        </div>
      </div>
  )
}


}


