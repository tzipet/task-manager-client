/* global fetch, localStorage */
const url =
  'https://tzipet-task-manager-server.herokuapp.com/tasks?sortBy=createdAt_desc';

export const getTasks = async () => {
  try {
    const token = localStorage.getItem('token');

    const res = await fetch(url, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.json();
  } catch (e) {
    throw new Error();
  }
};
