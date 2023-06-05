import { reviewsMovie } from "../../services/movieApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./reviews.module.css";

const Reviews = () => {
  const { moviesId } = useParams();

  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Llamada a la API
    reviewsMovie(moviesId).then((response) => {
      if (response.data.results.length === 0) {
        setNotFound(true);
      } else {
        const reviewsMovieData = response.data.results.map((item) => ({
          author: item.author,
          id: item.id,
          content: item.content,
        }));
        setData(reviewsMovieData);
      }
    });
  }, [moviesId]);

  return (
    <>
      {notFound ? (
        <div>
          <h2>We do not have any reviews for this movie</h2>
          {/* Aquí puedes agregar cualquier otro contenido relacionado con "not found" */}
        </div>
      ) : (
        <ul className={styles.card__credits}>
          {data.map((item) => (
            <li key={item.id} className={styles.li}>
              <h5>{item.author}</h5>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
