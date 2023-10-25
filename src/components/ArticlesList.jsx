function ArticlesList({ articlesArray, isLoading, error }) {
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
            <li key={`${article.article_id}`}>
              <div>
                {/* <p>Article ID: {article.article_id}</p> */}
                <div className="Top">
                <h3>{article.topic}</h3>
                <h4>{article.title}</h4>
                <p>Author: {article.author}</p>
                </div>

                <img
                  src={article.article_img_url}
                  alt={`A photo for the article, ${article.title}, uploaded by ${article.author}`}
                />

                <div className="Bottom">
                  <p>votes: {article.votes}</p>
                  <p>Comment Count: {article.comment_count}</p>
                  <p>Created at: {article.created_at}</p>
                </div>
              </div>
              <button>View Article</button>
            </li>
          )
        })}
      </ol>
  );
  }
  
}

export default ArticlesList;
