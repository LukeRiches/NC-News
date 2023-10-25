import { useEffect, useState } from 'react'
import axios from 'axios';
import ArticlesCard from './ArticlesCard';


function Article({articleID, setIsLoading, setError}) {
  const [article, setArticle] = useState({})

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`https://northcoders-news-api-phe8.onrender.com/api/articles/${articleID}`)
      .then(({data}) => {
        setIsLoading(false)
        setError(null)
        setArticle(data)
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false)
      });
  }, []);

  return (
    <main className='Article'>
      <h2>Article</h2>
      <ArticlesCard article={article}></ArticlesCard>
    </main>
  )
}

export default Article

