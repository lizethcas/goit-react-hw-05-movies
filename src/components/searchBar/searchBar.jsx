import styles from "./searchBar.module.css";
import PropTypes from "prop-types";

const Searchbar = ({ handleSearch, search, userMovieSearch }) => {
  return (
    <>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={search}
          name={userMovieSearch}
        />
        <button type="submit" className={styles.button}>
          <span>Search</span>
        </button>
      </form>
    </>
  );
};
Searchbar.propTypes = {
  handleSearch: PropTypes.func,
  search: PropTypes.func,
  userMovieSearch: PropTypes.string,
};
export default Searchbar;
