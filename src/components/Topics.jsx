import { useEffect, useState } from 'react'
import Search from './TopicSearch'
import TopicsList from './TopicsList'
import axios from 'axios'

function Topics({isLoading, setIsLoading, error, setError}) {
  const [topicList, setTopicList ] = useState([])
  
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`https://northcoders-news-api-phe8.onrender.com/api/topics`)
      .then(({data}) => {
        setIsLoading(false)
        setError(null)
        setTopicList(data)
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false)
      });
  }, []);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.status} message {error.msg}</p>;
  }

  return (
    <main>
      <h2>Topics</h2>
        {/* <TopicSearch setItemList={setTopicList}/> */}
        <TopicsList topicList={topicList}/>
    </main>
  )
}

export default Topics
