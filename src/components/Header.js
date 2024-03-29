import styles from "./Header.module.css";
import iconHome from "../Assets/Casa.svg";
import iconContact from "../Assets/Mensagens.svg";
import patas from "../Assets/patas.svg";
import { Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  const location = window.location.pathname;

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Logo Ir para Homepage" />
      </Link>
      <Link to="/" className={styles.link}>
        <img src={iconHome} alt="Ir para Homepage" />
      </Link>
      <Link to="/login/mensagem" className={styles.link}>
        <img src={iconContact} alt="Ir para mensagens" />
      </Link>
      <div className={styles.user}></div>
      {location === "/" ? (
        <div></div>
      ) : (
        <div>
          {user ? (
            <div className={styles.user}>
              <Link to="/login/perfil">
                <div
                  className={styles.avatar}
                  style={{ backgroundImage: `url('${user.avatar}')` }}
                ></div>
              </Link>
            </div>
          ) : (
            <div className={`${styles.patas} animeLeft`}>
              <img src={patas} alt="Ilustracao Patas" />
            </div>
          )}
        </div>
      )}
    </header>
  );
};
export default Header;
