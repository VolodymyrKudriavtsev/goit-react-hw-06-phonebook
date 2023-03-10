import { useSelector, useDispatch } from 'react-redux';

import { getContacts, addContact } from 'redux/contacts/slice';

import { Form } from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleAddContact = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    for (const contact of contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase())
        return alert(`${name} is already in contacts.`);
    }

    dispatch(addContact({ name, number }));
    e.target.reset();
  };

  return (
    <Form onSubmit={handleAddContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  );
};

export default ContactForm;
