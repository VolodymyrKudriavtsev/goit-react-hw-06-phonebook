import { SET_FILTER } from './constans';

export const setFilter = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};
