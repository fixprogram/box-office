import { React, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import apiGet from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = e => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>Null results</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map(it => (
            <div key={it.show.id}>{it.show.name}</div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
