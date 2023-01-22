import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export class ContactForm extends Component{
     state = {
  contacts: [],
  name: ''
     }
      
    handleNameChange = e => {
          this.setState({ name: e.currentTarget.value })
      }
    
      
    handleSubmit = e => {
    e.preventDefault()
          this.props.onSubmit(this.state);
          this.reset();
      }
    
    reset = () => {
        this.setState({contacts: [], name: ''})
    }

    nameIdGenerate = nanoid();



    render() {
        return (
        <div className='ContactForm'>
        
            <h2>Name</h2>
            <form
              className='inputButton'
              onSubmit={this.handleSubmit}>
            
             <label>
              <input className='InputField' 
  type="text"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleNameChange}
  name={this.state.name}      
    /></label>     
            <button 
                    className='Button'
                    type='submit'>Add contact</button>
                </form>
            </div>
    )
}
}