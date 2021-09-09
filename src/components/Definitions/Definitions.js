import React from 'react';
import './Definitions.css';

const Definitions = ({ word, definitions, language, lightMode }) => {
  return (
    <div className='definitions'>
      {definitions[0] && word && language === 'en' && (
        <audio
          src={definitions[0].phonetics[0] && definitions[0].phonetics[0].audio}
          style={{ backgroundColor: '#FFF', borderRadius: 10 }}
          controls
        >
          Browser does not support audio
        </audio>
      )}

      {word === '' ? (
        <span className='subTitle'>Start by typing your word in Search</span>
      ) : (
        definitions.map((def) =>
          def.meanings.map((item) =>
            item.definitions.map((result) => (
              <div
                className='singleDef'
                style={{
                  backgroundColor: lightMode ? '#414141' : '#FFF',
                  color: lightMode ? '#fff' : 'black'
                }}
              >
                <b>{result.definition}</b>
                <hr style={{ backgroundColor: 'black', width: '100%' }} />
                {result.example && (
                  <span>
                    <b>Example: </b> {result.example}
                  </span>
                )}
                {result.synonyms && (
                  <span>
                    <b>synonyms: </b>{' '}
                    {result.synonyms.map((item) => `${item}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
