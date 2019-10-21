/* global localStorage */
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

// class AuthContextProvider extends Component {
//   state = {
//     isValidated: false,
//     user: localStorage.getItem('user'),
//     token: localStorage.getItem('token'),
//   };

//   const isValidated = () => {
//       if (token) {
//           isValidated = true
//       }
//   }

const AuthContextProvider = ({ children }) => {
  let userData;

  try {
    userData = JSON.parse(localStorage.getItem('user'));
  } catch (err) {
    console.error('Error in parsing user data from local storage');
  }

  const initialState = {
    user: userData,
  };

  const [auth, setAuth] = useState(initialState);

  const updateAuth = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);

    setAuth({ user, token });
  };

  return (
    <AuthContext.Provider value={{ user: auth.user, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
