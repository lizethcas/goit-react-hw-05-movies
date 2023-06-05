import PropTypes from "prop-types";
import styles from "./list.module.css";


const List = ({ data,  renderItem  }) => {
  return (
    <ul>
      {data &&
        data.map((movie) => (
          <li key={movie.id} className={styles.movie__item}>
             {renderItem(movie)}
       
          </li>
        ))}
    </ul>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,

};
export default List;
