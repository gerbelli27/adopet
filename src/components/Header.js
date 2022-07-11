import styles from "./Header.module.css";
import iconHome from "../Assets/Casa.png";
import iconContact from "../Assets/Mensagens.png";
import patas from "../Assets/Patas.png";
import UserAvatar from "../Assets/Usuario.png";
import { Link } from "react-router-dom";

const Header = () => {
  const user = false; // trocar condicao com usuario logado

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={iconHome} alt="" />
      </Link>
      <Link to="/cadastro">
        <img src={iconContact} alt="" />
      </Link>
      <div className={styles.user}></div>
      {user ? (
        <div className={styles.user}>
          <img src={UserAvatar} alt="user.nome" />
        </div>
      ) : (
        <div className={styles.patas}>
          <img className="patas" src={patas} alt="Ilustracao Patas" />
        </div>
      )}
    </header>
  );
};
export default Header;
