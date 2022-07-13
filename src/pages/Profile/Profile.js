import styles from "./Profile.module.css";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";

const Profile = () => {
  function handleSubmit(event) {
    console.log(event);
  }

  return (
    <section className={`${styles.profile} animeLeft`}>
      <h1 className={styles.subtitle}>
        Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua
        mensagem.
      </h1>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="text"
            name="name"
            style={{ background: "#FFFFFF" }}
          />
          <Input
            label="Telefone"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="tel"
            name="phone"
            style={{ background: "#FFFFFF" }}
          />
          <Input
            label="Cidade"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="text"
            name="cidade"
            style={{ background: "#FFFFFF" }}
          />
          <label
            htmlFor="about"
            style={{ color: "#3772FF", fontWeight: "600" }}
          >
            Sobre
          </label>
          <textarea name="about" cols="30" rows="10"></textarea>
        </form>
        <Button>Salvar</Button>
      </div>
    </section>
  );
};
export default Profile;
