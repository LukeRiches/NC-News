import ArticlesCard from "./ArticlesCard";

function ArticlesList({ articlesArray, isLoading, error, user}) {
  if (isLoading) {
    return <p>Loading...</p>;
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
