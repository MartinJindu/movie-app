import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("query");

  // to update url query with searchTerm
  const handleSearch = (search: string) => {
    if (search) {
      setSearchParams((params) => {
        params.set("query", search);
        return params;
      });
    } else {
      setSearchParams(undefined);
    }
  };

  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          name="search-query"
          defaultValue={searchTerm || ""}
          placeholder="Search through thousands of movies"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Search;
