import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={` ${styles["header-title"]}`}>
        <h1>POD C Class</h1>
      </div>

      <nav>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <a href="Home">Home</a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
