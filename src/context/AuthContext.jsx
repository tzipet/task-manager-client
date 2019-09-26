import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isValidated: false,
    user: localStorage.getItem('user'),
    token: localStorage.getItem('token'),
  };

  // const isValidated = () => {
  //     if (token) {
  //         isValidated = true
  //     }
  // }

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state }}>
        {this.props.childern}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
