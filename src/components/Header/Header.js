import React from 'react';
import './Header.css';
import languages from '../../data/language';
import {
  TextField,
  createTheme,
  ThemeProvider,
  MenuItem
} from '@material-ui/core';

const Header = ({ language, setLanguage, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? '#000' : '#EBECF0'
      },
      type: lightMode ? 'light' : 'dark'
    }
  });

  const handleChange = (language) => {
    setLanguage(language);
    setWord('');
  };

  return (
    <div className='header'>
      <span className='title'>{word ? word : 'Dictionary'}</span>
      <div className='input'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className='search'
            label='Search'
            value={word}
            onChange={(event) => setWord(event.target.value)}
          />
          <TextField
            className='select'
            select
            label='Language'
            value={language}
            onChange={(event) => handleChange(event.target.value)}
            helperText='Please select language'
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
