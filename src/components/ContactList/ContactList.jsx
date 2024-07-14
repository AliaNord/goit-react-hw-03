import Contacts from "../Contact/Contact";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map((item) => (
        <Contacts
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
1