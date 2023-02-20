import { ADD_CONTACT, DELETE_CONTACT } from './constants';

const initialState = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      // const moreContacts = [...state.contacts, action.payload];
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        // contacts: moreContacts,
      };
    case DELETE_CONTACT:
      // const lessContacts = state.contacts.filter(item => item.id !== action.payload);
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
        // contacts: lessContacts,
      };
    default:
      return state;
  }
};

export default rootReducer;
