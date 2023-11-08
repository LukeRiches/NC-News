function ErrorMessage({ error }) {
  return (
    <>
      <h3>Oops!</h3>
      <h4>
        {error.status} {error.data.msg}
      </h4>
    </>
  );
}

export default ErrorMessage;
