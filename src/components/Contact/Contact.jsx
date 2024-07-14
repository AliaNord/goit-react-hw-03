const Contact = ({ id, name, number, handleDeleteContact }) => {
  return (
    <li>
      <div>
        <p>{name}</p>
        <a href="">{number}</a>
      </div>
      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;
