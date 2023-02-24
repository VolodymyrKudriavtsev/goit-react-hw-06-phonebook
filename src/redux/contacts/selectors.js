export const getContacts = ({ contacts }) => contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};
