import styles from "./Header.module.css";
import iconHome from "../Assets/Casa.svg";
import iconContact from "../Assets/Mensagens.svg";
import patas from "../Assets/patas.svg";
import UserAvatar from "../Assets/Usuario.png";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";

const Header = () => {
  let location = window.location.pathname;
  console.log(location);

  const user = false; // trocar condicao com usuario logado

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

      {location === "/" ? (
        <div></div>
      ) : (
        <div>
          {user ? (
            <div className={styles.user}>
              <img src={UserAvatar} alt="user.nome" />
            </div>
          ) : (
            <div className={styles.patas}>
              <img className="patas" src={patas} alt="Ilustracao Patas" />
            </div>
          )}
        </div>
      )}
    </header>
  );
};
export default Header;
