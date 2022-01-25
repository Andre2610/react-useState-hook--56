import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MoreDataFetching() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);

  async function getQuotes() {
    const response = await axios.get('https://api.quotable.io/quotes');
    // console.log('What is my response', response.data.results);
    setQuotes(response.data.results);
  }

  const fetchRandomQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    console.log('Our response', response);
    setRandomQuote(response.data);
  };

  useEffect(() => {
    getQuotes();
    fetchRandomQuote();
  }, []);

  console.log('Our quotes state', quotes);
  console.log('Our random quote', randomQuote);
  return (
    <div>
      {quotes.length && (
        <div>
          {quotes.map((quote) => {
            // console.log('each quote', quote);
            const { _id, content, author } = quote;
            return (
              <div key={_id}>
                <h4>{content}</h4>
                <p>By: {author}</p>
              </div>
            );
          })}
        </div>
      )}
      {randomQuote ? (
        <div>
          <h2>Random quote</h2>
          <h4>{randomQuote.content}</h4>
          <p>By: {randomQuote.author}</p>
          <p>
            {randomQuote.tags.map((tag, i) => {
              return <span key={i}>{tag} </span>;
            })}
          </p>
        </div>
      ) : null}
    </div>
  );
}
