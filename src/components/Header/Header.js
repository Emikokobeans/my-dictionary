import React from 'react';
import './Header.css';
import {
  TextField,
  createTheme,
  ThemeProvider,
  MenuItem
} from '@material-ui/core';

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#FFF'
      },
      type: 'dark'
    }
  });

  return (
    <div className='header'>
      <span className='title'>Dictionary</span>
      <div className='input'>
        <ThemeProvider theme={darkTheme}>
          <TextField id='standard-basic' label='Standard' />
          <TextField
            id='standard-select-currency'
            select
            label='Select'
            helperText='Please select your currency'
          >
            <MenuItem>English</MenuItem>
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
