import { Link } from "react-router-dom";
import styles from "./FeedItem.module.css";

const FeedItem = ({ card }) => {
  return (
    <li>
      <div className={styles.card}>
        <img src={card.src} alt={card.title} />
        <div className={styles.description}>
          <p className={styles.name}>{card.title}</p>
          <p className={styles.data}>{card.idade} ano(s)</p>
          <p className={styles.data}>{card.porte}</p>
          <p className={styles.data}>{card.comportamento}</p>
          <p className={styles.city}>
            {card.cidade} ({card.estado})
          </p>
          <Link to="/login/mensagem" className={styles.contact}>
            Falar com responsável
          </Link>
        </div>
      </div>
    </li>
  );
};
export default FeedItem;
