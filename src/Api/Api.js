import axios from 'axios';

axios.defaults.baseURL = 'https://62ff62f79350a1e548dd6fb0.mockapi.io/';

export const addNoteOnBackend = async value => {
  const response = await axios.post('/Hello', value);
  return response.data;
};

export const getNotes = async () => {
  const response = await axios.get('/Hello');
  return response.data;
};

export const removeNote = async id => {
  const response = await axios.delete(`./Hello/${id}`);
  return response.data;
};

export const updateNote = async note => {
  const response = await axios.put(`./Hello/${note.id}`, note);
  console.log(response.data);
  return response.data;
};
