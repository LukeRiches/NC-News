function Pagination({
  articlesLength,
  limit,
  setLimit,
  p,
  setP,
  isLoading,
  error,
  setSearchParams,
}) {
  const pages = [];

  const availablePages = Math.ceil(articlesLength / limit);

  for (let i = 1; i <= availablePages; i++) {
    pages.push(i);
  }

  const previous = p - 1;

  const next = p + 1;

  const half = Math.ceil(articlesLength / 2);

  const quarter = Math.ceil(articlesLength / 4);

  if (isLoading) {
    return;
  }
  if (error) {
    return;
  }
  if (articlesLength === 0) {
    return;
  }
  if (p === 1 && limit !== articlesLength) {
    return (
      <footer>
        <div>
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  setP(page);
                  setSearchParams(
                    (previous) => {
                      previous.set("p", page);
                      return previous;
                    },
                    { replace: true }
                  );
                }}
                className={page === p ? "Current_Page" : "PageSelection"}
              >
                {page}
              </button>
            );
          })}
          <button
            className="PageSelection"
            key="Next Page"
            onClick={() => {
              setP(next);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setSearchParams(
                (previous) => {
                  previous.set("p", next);
                  return previous;
                },
                { replace: true }
              );
            }}
          >
            Next
          </button>
        </div>

        <button
          className="PageSelection"
          onClick={() => {
            setLimit(articlesLength);
            setSearchParams(
              (previous) => {
                previous.set("limit", articlesLength);
                return previous;
              },
              { replace: true }
            );
            setSearchParams(
              (previous) => {
                previous.set("p", 1);
                return previous;
              },
              { replace: true }
            );
          }}
        >
          View All
        </button>
      </footer>
    );
  }
  if (p === availablePages && limit !== articlesLength) {
    return (
      <footer>
        <div>
          <button
            className="PageSelection"
            key="Previous Page"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setP(previous);
              setSearchParams(
                (previousUrl) => {
                  previousUrl.set("p", previous);
                  return previousUrl;
                },
                { replace: true }
              );
            }}
          >
            Previous
          </button>
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  setP(page);
                  setSearchParams(
                    (previous) => {
                      previous.set("p", page);
                      return previous;
                    },
                    { replace: true }
                  );
                }}
                className={page === p ? "Current_Page" : "PageSelection"}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          className="PageSelection"
          onClick={() => {
            setP(1);
            setLimit(articlesLength);
            setSearchParams(
              (previous) => {
                previous.set("limit", articlesLength);
                return previous;
              },
              { replace: true }
            );
            setSearchParams(
              (previous) => {
                previous.set("p", 1);
                return previous;
              },
              { replace: true }
            );
          }}
        >
          View All
        </button>
      </footer>
    );
  }
  if (limit === articlesLength) {
    return (
      <footer>
        <button
          className="PageSelection"
          onClick={() => {
            setLimit(10);
            setSearchParams(
              (previous) => {
                previous.set("limit", 10);
                return previous;
              },
              { replace: true }
            );
          }}
        >
          Reset View
        </button>
      </footer>
    );
  } else {
    return (
      <footer>
        <div>
          <button
            className="PageSelection"
            key="Previous Page"
            onClick={() => {
              setP(p - 1);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setSearchParams(
                (previous) => {
                  previous.set("p", p - 1);
                  return previous;
                },
                { replace: true }
              );
            }}
          >
            Previous
          </button>
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  setP(page);
                  setSearchParams(
                    (previous) => {
                      previous.set("p", page);
                      return previous;
                    },
                    { replace: true }
                  );
                }}
                className={page === p ? "Current_Page" : "PageSelection"}
              >
                {page}
              </button>
            );
          })}
          <button
            className="PageSelection"
            key="Next Page"
            onClick={() => {
              setP(p + 1);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setSearchParams(
                (previous) => {
                  previous.set("p", p + 1);
                  return previous;
                },
                { replace: true }
              );
            }}
          >
            Next
          </button>
        </div>

        <button
          className="PageSelection"
          onClick={() => {
            setP(1);
            setLimit(articlesLength);
            setSearchParams(
              (previous) => {
                previous.set("limit", articlesLength);
                return previous;
              },
              { replace: true }
            );
            setSearchParams(
              (previous) => {
                previous.set("p", 1);
                return previous;
              },
              { replace: true }
            );
          }}
        >
          View All
        </button>
      </footer>
    );
  }
}

export default Pagination;
