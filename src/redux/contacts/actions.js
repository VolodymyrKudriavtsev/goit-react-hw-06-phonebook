import shortid from 'shortid';

import { ADD_CONTACT, DELETE_CONTACT } from './constants';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: shortid.generate(),
      ...payload,
    },
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};
