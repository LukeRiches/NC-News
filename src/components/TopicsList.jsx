
function AvailableTopicsList({topicList}) {
  // console.log(topicList);

  return (
    <ol>
      {topicList.map((topic) => {
        return (
          <li key={`${topic.slug}`}>
            <div>
              <p>slug: {topic.slug}</p>
              <p>Description: {topic.description}</p>
            </div>
            <button >View Related Articles</button>
          </li>
        );
      })}
    </ol>
  );
}

export default AvailableTopicsList;
