import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('conacts/add', data => {
  return {
    payload: {
      ...data,
      id: shortid.generate(),
    },
  };
});

export const deleteContact = createAction('conacts/detele');
