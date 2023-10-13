import ContactListItem from "components/ContactListItem/ContactListItem";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            removeContact={removeContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;