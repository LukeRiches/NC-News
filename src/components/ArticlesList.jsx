import ArticlesCard from "./ArticlesCard";

function ArticlesList({ articlesArray, isLoading, error}) {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.status} message: {error.msg}</p>;
  } else {
    return (
      <ol>
        {articlesArray.map((article) => {
          return (
            <ArticlesCard article={article}  key={`${article.article_id}`}></ArticlesCard>
          )
        })}
      </ol>
  );
  }
  
}

export default ArticlesList;
