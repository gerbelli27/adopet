import styles from "./Home.module.css";
import logo from "../../../Assets/Logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={`${styles.home} animeLeft`}>
      <img className={styles.logo} src={logo} alt="Logo Adopet" />
      <p className={styles.title}>Boas-vindas!</p>
      <h1 className={styles.subtitle}>
        Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
      </h1>
      <Link to="/login" className="link">
        Já tenho conta
      </Link>
      <Link to="/cadastro" className="link">
        Quero me cadastrar
      </Link>
      <span className={styles.ilustrationHome}></span>
    </section>
  );
};
export default Home;
