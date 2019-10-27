/* global fetch, Headers, localStorage */
const url = 'https://tzipet-task-manager-server.herokuapp.com/tasks';

const myHeaders = new Headers();

myHeaders.append('Authorization', localStorage.getItem('token'));

export const getTasks = async () => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: myHeaders,
    });
    return res.json();
  } catch (e) {
    throw new Error();
  }
};
