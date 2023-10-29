import { SyncLoader } from "react-spinners";
import ArticlesCard from "./ArticlesCard";

function ArticlesList({ articlesArray, isLoading, error, user}) {
  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
        <SyncLoader color="#36d7b7" margin={3} size={15} speedMultiplier={0.5}/>
      </div>
    )
  }
  if (error) {
    return <p>Error Message: {error}</p>;
  } else {
    return (
      <ol>
        {articlesArray.map((article) => {
          return (
            <ArticlesCard article={article} user={user} key={`${article.article_id}`}></ArticlesCard>
          )
        })}
      </ol>
  );
  }
  
}

export default ArticlesList;
