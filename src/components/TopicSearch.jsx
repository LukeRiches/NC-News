import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");

  function createSearch(event) {
    const value = event.target.value;
    setSearch(value);
  }

  // useEffect(() => {
  //   axios
  //     .get(`https://northcoders-news-api-phe8.onrender.com/api/topics`)
  //     .then(({data}) => {
  //       console.log(data);
  //       // console.log(data.items);
  //       setTopicList(data.items)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [search]);

  return (
    <search>
      <form action="">
        <label htmlFor="Search">Search</label>
        <input
          type="text"
          name="Search"
          id="Search"
          value={search}
          onChange={createSearch}
        />
      </form>
    </search>
  );
}

export default Search;
