import { Link } from "react-router-dom";

function AvailableTopicsList({ topicList }) {
  // return (
  // <ol>
  //   {topicList.map((topic) => {
  //     return (
  //       <li key={`${topic.slug}`}>
  //         <div>
  //           <p>slug: {topic.slug}</p>
  //           <p>Description: {topic.description}</p>
  //         </div>
  //         <Link to={`../articles?topic=${topic.slug}`}>
  //           <button>View Related Articles</button>
  //         </Link>
  //       </li>
  //     );
  //   })}
  // </ol>
  // );
  // ^^ With a button as Link
  // return (
  //   <ol>
  //     {topicList.map((topic) => {
  //       return (
  //         <li key={`${topic.slug}`}>
  //           <Link to={`../articles?topic=${topic.slug}`}>
  //             <div className="card">
  //               <p>slug: {topic.slug}</p>
  //               <p>Description: {topic.description}</p>
  //             </div>
  //           </Link>
  //         </li>
  //       );
  //     })}
  //   </ol>
  // );
  // ^^ Whole card is the link
  return (
    <ol>
      {topicList.map((topic) => {
        return (
          <li key={`${topic.slug}`}>
            <Link to={`../articles?topic=${topic.slug}`}>
              <button className="TopicCard">
                <div className="card">
                  <h3>
                    {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                  </h3>
                  <p>Description: {topic.description}</p>
                </div>
              </button>
            </Link>
          </li>
        );
      })}
    </ol>
  );
  // ^^ Whole card is the link as a button
}

export default AvailableTopicsList;
