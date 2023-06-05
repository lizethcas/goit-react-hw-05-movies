import { Link, Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getMovie } from "../../services/movieApi";
import { nanoid } from "nanoid";
import styles from "./movies.module.css";

import Section from "../../components/section/section";
import BackLink from "../../components/backLink/backLink";
const MoviesDetails = () => {
  const { moviesId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/movies";

  console.log(backLinkHref);

  const [data, setData] = useState(null);

  useEffect(() => {
    // Llamada a la API
    getMovie(moviesId)
      .then((response) => {
        console.log(response.data); // Imprimir la respuesta en la consola

        const movieDetails = {
          title: response.data.original_title || response.data.original_name,
          id: response.data.id,
          path: response.data.backdrop_path || response.data.poster_path,
          overview: response.data.overview,
          popularity: response.data.popularity,
          year: response.data.release_date.split("-")[0],
          genres: response.data.genres.map((genre) => {
            return genre.name;
          }),
        };
        setData(movieDetails);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          navigate("/not-found"); // Redirige al usuario a la página de "not-found"
        }
      });
  }, [moviesId, navigate]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <main>
        <BackLink to={backLinkHref}>
          <h4>GO BACK</h4>
        </BackLink>
        {/*  <h4 className="link">GO BACK</h4> */}
        <div className={styles.card}>
          <img src={`https://image.tmdb.org/t/p/w500/${data.path}`} alt="" />
          <div className={styles.movieDetails}>
            <h2>
              {data.title} ({data.year})
            </h2>
            <p>User scrore: {data.popularity}</p>
            <h3>Overview</h3>
            <p className={styles.card__overview}> {data.overview}</p>
            <h2>Genres</h2>
            <ul className={styles.genres}>
              {data.genres.map((genre) => (
                <li key={nanoid()}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Section title="Additional information">
        <div className={styles.more__information}>
          <Link to={`/movies/${moviesId}/cast`} className="activeLink">
            Cast
          </Link>
          <Link to={`/movies/${moviesId}/reviews`} className="activeLink">
            Reviews
          </Link>

          <Outlet />
        </div>
      </Section>
    </>
  );
};

export default MoviesDetails;
