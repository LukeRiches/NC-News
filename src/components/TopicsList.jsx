import { Link } from "react-router-dom";

function AvailableTopicsList({ topicList }) {
  return (
    <ol id="Topics-List">
      {topicList.map((topic) => {
        return (
          <li key={`${topic.slug}`} id="Topic-Item">
            <Link to={`../articles?topic=${topic.slug}`} className="TopicCard">
              <div className="card">
                <h3>
                  {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                </h3>
                <p>Description: {topic.description}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export default AvailableTopicsList;
