import styles from "./Feed.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={`${styles.feed} animeLeft`}>
      <h1 className={styles.subtitle}>
        Olá! Veja os amigos disponíveis para adoção!
      </h1>
      <ul className={styles.cardslist}>
        <li>
          <div className={styles.card}>
            {/* <img src={image} alt="Foto animal" /> */}
            <div className={styles.description}>
              <p className={styles.name}>Dunga</p>
              <p className={styles.data}>2 anos</p>
              <p className={styles.data}>Porte pequeno</p>
              <p className={styles.data}>calmo e educado</p>
              <p className={styles.city}>Rio de janeiro (RJ)</p>
              <Link to="/" className={styles.contact}>
                Falar com responsável
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};
export default Home;
