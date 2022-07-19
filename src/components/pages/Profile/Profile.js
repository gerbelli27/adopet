import styles from "./Profile.module.css";
import Input from "../../../components/Forms/Input";
import Button from "../../../components/Forms/Button";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";

const Profile = () => {
  const { data } = useContext(UserContext);
  const [nome, setNome] = useState(data ? data.username : "");
  const [img, setImg] = useState({});
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [sobre, setSobre] = useState("");

  function handleSubmit(event) {
    console.log(event);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.profile} animeLeft`}>
      <h1 className={styles.subtitle}>
        Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua
        mensagem.
      </h1>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Perfil</h2>
        <p className={styles.labelphoto}>Foto</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          {img.preview ? (
            <div
              className={styles.picture}
              style={{ backgroundImage: `url('${img.preview}')` }}
            ></div>
          ) : (
            <div
              className={styles.picture}
              style={
                data
                  ? { backgroundImage: `url('${data.url}')` }
                  : { backgroundColor: "#FFF" }
              }
            ></div>
          )}
          <Input
            label="Clique na foto para editar"
            colorLabel={{
              color: "#fc7071",
              fontWeight: "400",
              fontSize: "0.75rem",
            }}
            type="file"
            name="img"
            id="img"
            style={{ background: "#FFFFFF" }}
            onChange={handleImgChange}
          />
          <Input
            label="Nome"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="text"
            name="name"
            style={{ background: "#FFFFFF", textAlign: "left" }}
            onChange={(event) => setNome(event.target.value)}
            value={nome}
          />
          <Input
            label="Telefone"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="tel"
            name="phone"
            style={{ background: "#FFFFFF", textAlign: "left" }}
            onChange={(event) => setTelefone(event.target.value)}
            value={telefone}
          />
          <Input
            label="Cidade"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="text"
            name="cidade"
            style={{ background: "#FFFFFF", textAlign: "left" }}
            onChange={(event) => setCidade(event.target.value)}
            value={cidade}
          />
          <label
            htmlFor="about"
            style={{ color: "#3772FF", fontWeight: "600" }}
          >
            Sobre
          </label>
          <textarea
            className={styles.about}
            name="about"
            cols="30"
            rows="10"
            onChange={(event) => setSobre(event.target.value)}
            value={sobre}
          ></textarea>
          <Button>Salvar</Button>
        </form>
      </div>
    </section>
  );
};
export default Profile;
