import styles from "./Feed.module.css";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import Error from "../../components/Helper/Error";
import FeedItem from "./FeedItem";

const Feed = () => {
  const { data, request, error, loading } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 9;
      const { url, options } = PHOTOS_GET({ page: 1, total, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <section className={styles.feed1}></section>;
  if (data)
    return (
      <section className={`${styles.feed} animeLeft`}>
        <h1 className={styles.subtitle}>
          Olá! Veja os amigos disponíveis para adoção!
        </h1>
        <ul className={styles.cardslist}>
          {data.map((card) => (
            <FeedItem key={card.id} card={card} />
          ))}
        </ul>
      </section>
    );
  else return null;
};
export default Feed;
