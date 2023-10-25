import { useEffect, useState } from 'react'
import axios from 'axios';
import ArticlesSearch from './ArticlesSearch';
import ArticlesList from './ArticlesList';
import Pagination from './pagination';

function Articles({isLoading, setIsLoading, error, setError, setArticleID}) {
  const [articlesArray, setArticlesArray] = useState([])
  const [articlesLength, setArticlesLength] = useState(0)

  const [limit, setLimit] = useState(10)

  const [p, setP] = useState(1)
  
  function limitOnChange(event) {
    const value = event.target.value;
    setLimit(value);
  }

  function pOnChange(event) {
    const value = event.target.value;
    setP(value);
  }

  return (
    <main className='Articles'>
      <h2>Articles</h2>
        <ArticlesSearch setArticlesArray={setArticlesArray} setArticlesLength={setArticlesLength} limit={limit} p={p} isLoading={isLoading} setIsLoading={setIsLoading}  error={error} setError={setError}/>
        <ArticlesList articlesArray={articlesArray } isLoading={isLoading} error={error} setArticleID={setArticleID}/>
        <Pagination  articlesLength={articlesLength} limit={limit} setLimit={setLimit} p={p} setP={setP} isLoading={isLoading}/>
    </main>
  )
}

export default Articles