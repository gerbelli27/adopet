import styles from "./Profile.module.css";
import Input from "../../../components/Forms/Input";
import Button from "../../../components/Forms/Button";
import { useState } from "react";
import { PROFILE_PHOTO } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import useForm from "../../../Hooks/useForm";

const Profile = () => {
  const { data, error, loading, request } = useFetch();
  const nome = useForm();
  const telefone = "";
  const cidade = "";
  const sobre = "";
  const [img, setImg] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("telefone", telefone.value);
    formData.append("cidade", cidade.value);
    formData.append("sobre", sobre.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PROFILE_PHOTO(formData, token);
    request(url, options);
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
            {...nome}
          />
          <Input
            label="Telefone"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="tel"
            name="phone"
            style={{ background: "#FFFFFF", textAlign: "left" }}
            {...telefone}
          />
          <Input
            label="Cidade"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="text"
            name="cidade"
            style={{ background: "#FFFFFF", textAlign: "left" }}
            {...cidade}
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
            {...sobre}
          ></textarea>
          <Button>Salvar</Button>
        </form>
      </div>
    </section>
  );
};
export default Profile;
