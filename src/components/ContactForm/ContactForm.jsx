import React, { Component } from 'react'

export class ContactForm extends Component{
    render() {
        return (
        <div className='ContactForm'>
        
        <h2>Name</h2>
                
    <input className='InputField'
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
          
    />
            <button className='Button' type='button'>Add contact</button>
        </div>
    )
}
}