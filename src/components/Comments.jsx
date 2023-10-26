import { useEffect, useState} from "react";
import axios from "axios";
import CommentsCard from "./CommentsCard";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router-dom";

function Comments({ isLoading, setIsLoading, error, setError }) {
  const { articleID } = useParams();
  const [commentsArray, setCommentsArray] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://northcoders-news-api-phe8.onrender.com/api/articles/${articleID}/comments`
      )
      .then(({ data }) => {
        setIsLoading(false);
        if(data.msg){
          setError(data.msg);
        } else {
          setError(null);
          setCommentsArray(data);
        }
      })
      .catch((err) => {
        setError({err});
        setIsLoading(false);
      });
  }, [articleID]);


  if (error) {
    return (
      <section>
        <h4>Comments:</h4>
        <ErrorPage error={error}></ErrorPage>
      </section>
    )
  } 
  if(commentsArray.length > 1){
    return (
      <section>
        <h4>Comments:</h4>
        <ol>
          {commentsArray.map((comment) => {
            return (
              <CommentsCard
                comment={comment}
                key={`comment-${comment.comment_id}`}
              ></CommentsCard>
            );
          })}
        </ol>
      </section>
    );
  }
}

export default Comments;
