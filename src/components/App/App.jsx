import { useState, useEffect } from 'react';
// import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';

import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

import { addContact, deleteContact } from 'redux/actions';

import { Container } from './App.styled';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts' ?? []));
  // });

  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    for (const contact of contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase())
        return alert(`${name} is already in contacts.`);
    }

    // const action = addContact({ name, number });
    // dispatch(action);

    dispatch(addContact({ name, number }));
  };

  // const addContact = ({ name, number }) => {
  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   for (const contact of contacts) {
  //     if (name.toLowerCase() === contact.name.toLowerCase())
  //       return alert(`${name} is already in contacts.`);
  //   }

  //   setContacts(prevContacts => [newContact, ...prevContacts]);
  // };

  const handleDeleteContact = contactId => {
    // const action = deleteContact(contactId);
    // dispatch(action);

    dispatch(deleteContact(contactId));
  };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  const chandgeFilter = e => setFilter(e.target.value);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const isContacts = Boolean(filteredContacts.length);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onchandgeFilter={chandgeFilter} />
      {isContacts && (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      )}
    </Container>
  );
};

export default App;
