import Searchbar from "../../components/searchBar/searchBar";
import { Link, useNavigate, useSearchParams,useLocation } from "react-router-dom";
import { searchMovies } from "../../services/movieApi";

import { useState, useEffect } from "react";

import List from "../../components/list/list";

const Movies = () => {
  const [data, setTData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [userMovie, setUserMovie] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get("query");

  useEffect(() => {
    setSearchParams({ query: userMovie });
  }, [userMovie, setSearchParams]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const user = e.target.children[0].value;
    setUserMovie(user);
    e.target.reset();
    searchMovies(user)
      .then((response) => {
        if (response.data.results.length === 0) {
          setNotFound(true);
        } else {
          const newData = response.data.results.map((item) => ({
            title: item.original_title || item.original_name,
            id: item.id,
          }));
          setTData(newData);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 404) {
          navigate("/not-found");
        }
      });
  };

  return (
    <>
      <Searchbar handleSearch={handleSearch} userMovieSearch={query} />
      {notFound && data.length === 0 ? (
        <h2>There are no results</h2>
      ) : (
        <List
          data={data}
          renderItem={(movie) => (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}?query=${userMovie}`} state={{from:location}} 
            >m
              {movie.title}
            </Link>
          )}
        />
      )}
    </>
  );
};

export default Movies;
