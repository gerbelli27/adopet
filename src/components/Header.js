import styles from "./Header.module.css";
import iconHome from "../Assets/Casa.png";
import iconContact from "../Assets/Mensagens.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src={iconHome} alt="" />
      </a>
      <a href="/">
        <img src={iconContact} alt="" />
      </a>
      <div className={styles.user}></div>
    </header>
  );
};
export default Header;
