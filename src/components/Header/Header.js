import React from 'react';
import './Header.css';
import languages from '../../data/language';
import {
  TextField,
  createTheme,
  ThemeProvider,
  MenuItem
} from '@material-ui/core';

const Header = ({ language, setLanguage }) => {
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
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            helperText='Please select your currency'
          >
            {languages.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
