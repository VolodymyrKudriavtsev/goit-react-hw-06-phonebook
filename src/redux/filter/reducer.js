import { createReducer } from '@reduxjs/toolkit';

import { setFilter } from './actions';

export const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});
