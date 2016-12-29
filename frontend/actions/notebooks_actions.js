import axios from 'axios';

export const REQUEST_NOTEBOOKS = 'REQUEST_NOTEBOOKS';
export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';

export const requestNotebooks = userId => ({
  type: REQUEST_NOTEBOOKS,
  userId
})

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS
  notebooks
})
