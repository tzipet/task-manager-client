import React, { Component, createContext } from 'react'

export const AuthContext = createContext()

class AuthContainer extends Component {
    state = {
        user: user,
        tasks: tasks,
    }

    render() {

        return(
            <AuthContext.Provider value={{...this.state}}>
                {this.props.childern}
            </AuthContext.Provider>
        )
            
    }
}

export default AuthContainer