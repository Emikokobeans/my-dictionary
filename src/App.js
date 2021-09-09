import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState([]);
  const [definitions, setDefinitions] = useState([]);
  const [language, setLanguage] = useState('en');

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/love'
      );
      setDefinitions(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div
      className='App'
      style={{ height: '100vh', backgroundColor: '#282c34', color: 'white' }}
    >
      <Container
        maxWidth='md'
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header language={language} setLanguage={setLanguage} />
      </Container>
    </div>
  );
}

export default App;
