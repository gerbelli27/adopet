import { useState } from "react";
import { PHOTO_POST } from "../../api";
import Button from "../../components/Forms/Button";
import Input from "../../components/Forms/Input";
import styles from "./NewAnimal.module.css";
import useFetch from "../../Hooks/useFetch";

const NewAnimal = () => {
  const { request } = useFetch();
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [porte, setPorte] = useState("");
  const [comportamento, setComportamento] = useState("");
  const [estado, setEstado] = useState("");
  const [img, setImg] = useState({});

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome);
    formData.append("idade", idade);
    formData.append("porte", porte);
    formData.append("comportamento", comportamento);
    formData.append("cidade", cidade);
    formData.append("estado", estado);
    const { url, options } = PHOTO_POST(formData);
    request(url, options);
  }

  return (
    <section className={styles.newanimal}>
      <h1 className={styles.subtitle}>Cadastrar novo animal</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="nome"
          placeholder="Insira o nome do animal"
          onChange={(e) => setNome(e.target.value)}
          {...nome}
        />
        <Input
          label="Idade"
          type="number"
          name="idade"
          placeholder="Insira a idade do animal"
          onChange={(e) => setIdade(e.target.value)}
          {...idade}
        />
        <Input
          label="Porte"
          type="text"
          name="porte"
          placeholder="Insira o porte do animal"
          onChange={(e) => setPorte(e.target.value)}
          {...porte}
        />
        <Input
          label="comportamento"
          type="text"
          name="comportamento"
          placeholder="Insira o comportamento do animal"
          onChange={(e) => setComportamento(e.target.value)}
          {...comportamento}
        />
        <Input
          label="Cidade"
          type="text"
          name="cidade"
          placeholder="Insira a cidade"
          onChange={(e) => setCidade(e.target.value)}
          {...cidade}
        />
        <Input
          label="Estado"
          type="text"
          name="estado"
          placeholder="Insira o estado"
          onChange={(e) => setEstado(e.target.value)}
          {...estado}
        />
        <input
          className={styles.inputfoto}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        <Button>Enviar</Button>
      </form>
    </section>
  );
};
export default NewAnimal;
