import { Component } from "react";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./index.styled";
import Filter from "./Filter/Filter";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Misjko Lutij', number: '555-15-15'},
    {id: 'id-2', name: 'Antonio Linuvui', number: '444-14-14'},
    {id: 'id-3', name: 'Marusia Nechemna', number: '666-55-44'},
     ],
  filter: '',

  }

  addContactData = (newContact) => {
    const isTrue = this.state.contacts.some(({name})=>name === newContact.name)
    if (isTrue) {
      Notify.failure(`${newContact.name} is already with us`)
      return
    }
    this.setState(({contacts}) => ({
    contacts: [newContact, ...contacts]
  }))
  }

  removeContact = (id) => {
		this.setState((prev) => ({
			contacts: prev.contacts.filter((contact) => contact.id !== id),
		}))
	
  }

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase().trim()))
  }

  getFilterData = ({target:{value}}) => {
    this.setState({
      filter: value,
      })
  }
  
  render() {
    const filterContacts = this.getFilterContacts();
    return <Container>
        <h1>PHONEBOOK</h1>
      <ContactForm addContactData={ this.addContactData} />
      <h2>CONTACTS</h2>
      <Filter filter={this.state.filter} getFilterData={this.getFilterData} />
      <ContactList contacts={filterContacts} removeContact={this.removeContact} getFilterContacts={ this.getFilterContacts} />
    </Container>
  }
}

export default App;