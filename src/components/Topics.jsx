import { useEffect, useState } from "react";
import Search from "./TopicSearch";
import TopicsList from "./TopicsList";
import axios from "axios";
import { SyncLoader } from "react-spinners";

function Topics({ isLightMode, isDarkMode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://northcoders-news-api-phe8.onrender.com/api/topics`)
      .then(({ data }) => {
        setIsLoading(false);
        setError(null);
        setTopicList(data);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading && isLightMode) {
    return (
      <div>
        <h2>Loading Topics...</h2>
        <SyncLoader
          color="#4b89ef"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </div>
    );
  }

  if (isLoading && isDarkMode) {
    return (
      <div>
        <h2>Loading Topics...</h2>
        <SyncLoader
          color="#ef5f4b"
          margin={3}
          size={15}
          speedMultiplier={0.5}
        />
      </div>
    );
  }

  if (error) {
    return (
      <p>
        Error: {error.status} message {error.msg}
      </p>
    );
  }

  return (
    <main>
      <h2>Topics</h2>
      {/* <TopicSearch setItemList={setTopicList}/> */}
      <TopicsList topicList={topicList} />
    </main>
  );
}

export default Topics;
