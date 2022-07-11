import styles from "./Home.module.css";
import logo from "../../Assets/Logo.png";
import ilustrationHome from "../../Assets/ilustration_home.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className={`${styles.home} animeLeft`}>
        <img className={styles.logo} src={logo} alt="Logo Adopet" />
        <p className="title">Boas-vindas!</p>
        <h1 className="subtitle">
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </h1>
        <Link to="/login" className="link">
          Já tenho conta
        </Link>
        <Link to="/cadastro" className="link">
          Quero me cadastrar
        </Link>
        <img
          src={ilustrationHome}
          alt="Imagem ilustracao"
          className={styles.ilustrationHome}
        />
      </section>
    </>
  );
};
export default Home;
