import { Component } from "react"
import { FormButton, Form, FormInputContainer, InputField, InputLabel } from "./ContactForm.styled"
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
  name: '',
  number: ''  
  }

  addContact = (e)=> {
  e.preventDefault();
  const newContact = {
    name: this.state.name,
    number: this.state.number,
    id: nanoid()
    }
    this.props.addContactData(newContact, this.state); 
    this.setState({
      name: '',
      number: ''
    })

  }

  getContactData = ({ target: { name, value } }) => {
    this.setState({[name]: value})
  }

  render() {
    return <Form onSubmit={this.addContact}>
 			<FormInputContainer>
         <InputField
           type="tel"
           name="number"
           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          onChange={this.getContactData}
          value={this.state.number}
           required
         />
         <InputLabel>Number</InputLabel>
         <InputField
           type="text"
           name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           autoComplete="off"
            value={this.state.name}
           onChange={this.getContactData}
           required
         />
         <InputLabel>Name</InputLabel>
 			</FormInputContainer>
 				<FormButton type="submit">ADD CONTACTS</FormButton>
 		</Form>
  }

  
  

} 
export default ContactForm