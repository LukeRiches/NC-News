
function CommentsCard({comment}) {
  return (
    <li>
      <div className="Top">
        <h3>{comment.author}</h3>
        <p>Created at: {comment.created_at}</p>
      </div>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </li>
  );
}

export default CommentsCard;
