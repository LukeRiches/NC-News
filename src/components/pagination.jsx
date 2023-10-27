function Pagination({ articlesLength, limit, setLimit, p, setP, isLoading, error }) {

  const pages = [];

  const availablePages = Math.ceil(articlesLength / limit);

  for (let i = 1; i <= availablePages; i++) {
    pages.push(i);
  }

  const previous = p - 1;

  const next = p + 1;

  const half = Math.ceil(articlesLength / 2);

  const quarter = Math.ceil(articlesLength / 4);

  if(isLoading){
    return 
  }
  if(error){
    return
  }

  if (p === 1 && limit !== articlesLength) {
    return (
      <footer>
        <div className="Page Selection">
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setP(page);
                }}
                className={page === p ? "Current_Page" : ""}
              >
                {page}
              </button>
            );
          })}
          <button
            key="Next Page"
            onClick={() => {
              setP(next);
              window.scrollTo(0, 0);
            }}
          >
            Next
          </button>
        </div>

        <button
          onClick={() => {
            setLimit(articlesLength);
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
        <div className="Page Selection">
          <button
            key="Previous Page"
            onClick={() => {
              window.scrollTo(0, 0);
              setP(previous);
            }}
          >
            Previous
          </button>
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setP(page);
                }}
                className={page === p ? "Current_Page" : ""}
              >
                {page}
              </button>
            );
          })}
        </div>
        
        <button
          onClick={() => {
            setP(1);
            setLimit(articlesLength);
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
          onClick={() => {
            setLimit(10);
          }}
        >
          Reset View
        </button>
      </footer>
    );
  } else {
    return (
      <footer>
        <div className="Page Selection">
          <button
            key="Previous Page"
            onClick={() => {
              setP(p - 1);
              window.scrollTo(0, 0);
            }}
          >
            Previous
          </button>
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setP(page);
                }}
                className={page === p ? "Current_Page" : ""}
              >
                {page}
              </button>
            );
          })}
          <button
            key="Next Page"
            onClick={() => {
              setP(p + 1);
              window.scrollTo(0, 0);
            }}
          >
            Next
          </button>
        </div>

        <button
          onClick={() => {
            setP(1);
            setLimit(articlesLength);
          }}
        >
          View All
        </button>
      </footer>
    );
  }
}

export default Pagination;
