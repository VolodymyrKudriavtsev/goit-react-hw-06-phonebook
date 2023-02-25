import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => [...state, payload],
      prepare: data => {
        return {
          payload: {
            id: shortid.generate(),
            ...data,
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
