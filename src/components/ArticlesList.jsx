import { SyncLoader } from "react-spinners";
import ArticlesCard from "./ArticlesCard";
import ErrorPage from "./ErrorPage";

function ArticlesList({ articlesArray, isLoading, error, user }) {
  if (isLoading) {
    return;
  }
  if (error) {
    return <ErrorPage error={error}></ErrorPage>;
  } else {
    return (
      <ol id="Articles-List">
        {articlesArray.map((article) => {
          return (
            <ArticlesCard
              article={article}
              user={user}
              key={`${article.article_id}`}
            ></ArticlesCard>
          );
        })}
      </ol>
    );
  }
}

export default ArticlesList;
