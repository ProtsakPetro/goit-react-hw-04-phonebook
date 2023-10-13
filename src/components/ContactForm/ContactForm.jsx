import React, { useState } from "react";
import {
  FormButton,
  Form,
  FormInputContainer,
  InputField,
  InputLabel,
} from "./ContactForm.styled";
import { nanoid } from 'nanoid';

function ContactForm({ addContactData }) {
  const [formData, setFormData] = useState({
    name: '',
    number: ''
  });

  const addContact = (e) => {
    e.preventDefault();
    const newContact = {
      name: formData.name,
      number: formData.number,
      id: nanoid()
    };
    addContactData(newContact, formData);
    setFormData({
      name: '',
      number: ''
    });
  };

  const getContactData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Form onSubmit={addContact}>
      <FormInputContainer>
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          onChange={getContactData}
          value={formData.number}
          required
        />
        <InputLabel>Number</InputLabel>
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          value={formData.name}
          onChange={getContactData}
          required
        />
        <InputLabel>Name</InputLabel>
      </FormInputContainer>
      <FormButton type="submit">ADD CONTACTS</FormButton>
    </Form>
  );
}

export default ContactForm;