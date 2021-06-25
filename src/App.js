import Header from './Pages/Header';
// import Main from './Pages/Main';
import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'


const theme = createMuiTheme({
  typography: {
    fontFamily: "Rubik",
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <Main /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
