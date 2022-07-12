import styles from "./Header.module.css";
import iconHome from "../Assets/Casa.svg";
import iconContact from "../Assets/Mensagens.svg";
import patas from "../Assets/Patas.png";
import UserAvatar from "../Assets/Usuario.png";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";

const Header = () => {
  const user = true; // trocar condicao com usuario logado

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <Link to="/">
        <img src={iconHome} alt="Ir para Homepage" />
      </Link>
      <Link to="/login/mensagem">
        <img src={iconContact} alt="Ir para mensagens" />
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
