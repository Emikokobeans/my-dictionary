import React from 'react';
import './Definitions.css';

const Definitions = ({ word, definitions, language }) => {
  return (
    <div className='definitions'>
      {word === '' ? (
        <span className='subTitle'>Start by typing your word in Search</span>
      ) : (
        definitions.map((def) =>
          def.meanings.map((item) =>
            item.definitions.map((result) => (
              <div
                className='singleDef'
                style={{ backgroundColor: 'white', color: 'black' }}
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
