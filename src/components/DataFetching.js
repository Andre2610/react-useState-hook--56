import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFetching() {
  const [counter, setCounter] = useState(0);
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    console.log('What is my response', response);
    setArticles(response.data);
  };

  useEffect(() => {
    // console.log('Hello from the useEffect');
    fetchData();
  }, []);
  //   console.log('Hello from the global scope', articles);

  return (
    <div>
      <p>
        {counter} <button onClick={() => setCounter(counter + 1)}>+</button>
      </p>

      {articles.map((article) => {
        // console.log('each article', article);
        return (
          <div key={article.id}>
            <h4>{article.title}</h4>
            <p>{article.body}</p>
          </div>
        );
      })}
    </div>
  );
}
