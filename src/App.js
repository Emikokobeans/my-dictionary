import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Switch, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [word, setWord] = useState(['']);
  const [definitions, setDefinitions] = useState([]);
  const [language, setLanguage] = useState('en');
  const [lightMode, setLightMode] = useState(false);

  const Mode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500]
      },
      '&$checked + $track': {
        backgroundColor: grey[500]
      }
    },
    checked: {},
    track: {}
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      );
      setDefinitions(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(definitions);

  useEffect(() => {
    dictionaryApi();
  }, [word, language]);

  return (
    <div
      className='App'
      style={{
        height: '100vh',
        backgroundColor: lightMode ? '#fff' : '#282c34',
        color: lightMode ? 'black' : '#EBECF0',
        transition: 'all 0.5s linear'
      }}
    >
      <Container
        maxWidth='md'
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-evenly'
        }}
      >
        <div
          style={{ position: 'absolute', top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightMode ? 'Dark' : 'Light'} Mode</span>
          <Mode checked={lightMode} onChange={() => setLightMode(!lightMode)} />
        </div>
        <Header
          language={language}
          setLanguage={setLanguage}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {definitions && (
          <Definitions
            word={word}
            definitions={definitions}
            language={language}
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
