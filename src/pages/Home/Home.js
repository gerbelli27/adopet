import styles from "./Home.module.css";
import logo from "../../Assets/Logo.png";
import ilustrationHome from "../../Assets/ilustration_home.png";
import BtnLink from "../../components/BtnLink";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <img className={styles.logo} src={logo} alt="Logo Adopet" />
        <p className="title">Boas-vindas!</p>
        <h1 className="subtitle">
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </h1>
        <Link to="/login">Já tenho conta</Link>
        <BtnLink>Já tenho conta</BtnLink>
        <BtnLink>Quero me cadastrar</BtnLink>
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
