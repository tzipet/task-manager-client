/* global fetch, localStorage, Headers */
const url = 'https://tzipet-task-manager-server.herokuapp.com/tasks';

export const addTask = async task => {
  try {
    const headers = new Headers();

    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    headers.append('content-type', 'application/json');
    const body = JSON.stringify(task);
    const res = await fetch(url, {
      method: 'POST',
      body,
      headers,
    });
    return res.json();
  } catch (e) {
    throw new Error();
  }
};
