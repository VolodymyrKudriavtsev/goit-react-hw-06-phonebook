import { useSelector, useDispatch } from 'react-redux';

import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

import {
  getContacts,
  getFilteredContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/slice';
import { getFilter, setFilter } from 'redux/filter/slice';

import { Container } from './App.styled';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleAddContact = ({ name, number }) => {
    for (const contact of contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase())
        return alert(`${name} is already in contacts.`);
    }

    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const isContacts = Boolean(filteredContacts.length);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onchandgeFilter={handleFilter} />
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
