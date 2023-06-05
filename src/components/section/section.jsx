import styles from "./section.module.css";

import PropTypes from "prop-types";

const Section = ({ children, title }) => {
  return (
    <section className={styles.aditional__information}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};
export default Section;
