import { getTrendingMovies } from "../../services/movieApi";
import List from "../../components/list/list";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setTData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    // Llamada a la API

    getTrendingMovies().then((response) => {
      const newData = response.data.results.map((item) => ({
        title: item.original_title || item.original_name,
        id: item.id,
      }));
      setTData(newData);
    });
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <List
        data={data}
        renderItem={(movie) => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        )}
      />
    </main>
  );
};
export default Home;
