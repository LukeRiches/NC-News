function CommentsCard({ comment }) {
  return (
    <li>
      <div className="Top">
        <h3>{comment.author}</h3>
      </div>
      <p>{comment.body}</p>
      <div className="Bottom">
        <p>Votes: {comment.votes}</p>
        <p>{comment.created_at.slice(0, 10)}</p>
      </div>
    </li>
  );
}

export default CommentsCard;
