import { ContactDeleteBtn, ContactItem, ContactTextName, ContactTextNumber } from "./ContactListItem.styled";

const ContactListItem = ({ contact, removeContact }) => {
  const { id, name, number } = contact;

  return (
    <ContactItem>
      <ContactTextName>{name}:</ContactTextName>
      <ContactTextNumber>{number}</ContactTextNumber>
      <ContactDeleteBtn onClick={() => removeContact(id)}>REMOVE</ContactDeleteBtn>
    </ContactItem>
  );
};

export default ContactListItem;