import { Link } from "react-router-dom";

function AvailableTopicsList({topicList}) {

  return (
    <ol>
      {topicList.map((topic) => {
        return (
          <li key={`${topic.slug}`}>
            <div>
              <p>slug: {topic.slug}</p>
              <p>Description: {topic.description}</p>
            </div>
            <Link to={`../articles?topic=${topic.slug}`}><button >View Related Articles</button></Link>
          </li>
        );
      })}
    </ol>
  );
}

export default AvailableTopicsList;
