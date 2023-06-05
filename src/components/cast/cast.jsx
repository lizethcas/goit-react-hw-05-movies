import { useParams, useNavigate, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { creditsMovie } from "../../services/movieApi";
import styles from "./cast.module.css";
const Cast = () => {
  const { moviesId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  useEffect(() => {
    // Llamada a la API
    creditsMovie(moviesId).then((response) => {
      /*  console.log(response.data); */ // Imprimir la respuesta en la consola
    
      if (!response.data.cast) {
        return <Navigate to="/not-found" />;
      }
      const creditsMovie = response.data.cast.map((item) => ({
        name: item.name,
        id: item.id,
        photo: item.profile_path,
        character: item.character,
      }));

      setData(creditsMovie);
    });
  }, [moviesId, navigate]);
  
  return (
    <>
      {
        <ul className={styles.card__credits}>
          {data &&
            data.map(
              (item) =>
                item.photo !== null && (
                  <li key={item.id} className={styles.li}>
                    <img
                      className={styles.card__credits__img}
                      src={`https://image.tmdb.org/t/p/w500/${item.photo}`}
                      alt={item.name}
                    />
                    <h5>{item.name}</h5>
                    <p>{item.character}</p>
                  </li>
                )
            )}
        </ul>
      }
    </>
  );
};
export default Cast;
