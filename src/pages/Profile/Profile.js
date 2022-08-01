import styles from "./Profile.module.css";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { USER_UPDATE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../../components/Helper/Error";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { data, error } = useContext(UserContext);
  const { request } = useFetch();
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState({});
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [sobre, setSobre] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("media_id", img.raw);
    formData.append("name", nome);
    formData.append("sobre", sobre);
    formData.append("telefone", telefone);
    formData.append("cidade", cidade);
    const { url, options } = USER_UPDATE(formData);
    request(url, options);
    navigate("/login");
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
                  ? { backgroundImage: `url('${data.avatar}')` }
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
            name="media_id"
            id="media_id"
            style={{ background: "#FFFFFF" }}
            onChange={handleImgChange}
          />
          <Input
            label="Nome"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="text"
            name="name"
            style={{ background: "#FFFFFF", textAlign: "left" }}
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
          <Input
            label="Telefone"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="tel"
            name="phone"
            style={{ background: "#FFFFFF", textAlign: "left" }}
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />
          <Input
            label="Cidade"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="text"
            name="cidade"
            style={{ background: "#FFFFFF", textAlign: "left" }}
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
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
            value={sobre}
            onChange={(event) => setSobre(event.target.value)}
          ></textarea>
          {loading ? (
            <Button disabled>Salvando...</Button>
          ) : (
            <Button>Salvar</Button>
          )}
          <Error error={error} />
          <Link to="/login/animal" className={styles.link}>
            Cadastrar Animal
          </Link>
        </form>
      </div>
    </section>
  );
};
export default Profile;
