import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import ButtonAppBar from './AppBar';
import SpacingGrid from './Grids';
import FooterComp from './Footer';
import AuthProvider from './context/AuthContext';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#9e9e9e',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <header className="App-header">
            <ButtonAppBar />
            <SpacingGrid />
            <FooterComp />
          </header>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
