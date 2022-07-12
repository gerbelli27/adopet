import styles from "./Message.module.css";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";

const Message = () => {
  function handleSubmit(event) {
    console.log(event);
  }

  return (
    <section className={`${styles.message} animeLeft`}>
      <h1 className={styles.subtitle}>
        Envie uma mensagem para a pessoa ou instituição que está cuidado do
        animal:
      </h1>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="text"
            name="name"
            placeholder="Insira seu nome completo"
            style={{ background: "#FFFFFF" }}
          />
          <Input
            label="Telefone"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="number"
            name="phone"
            placeholder="Insira seu telefone e/ou whatsapp"
            style={{ background: "#FFFFFF" }}
          />
          <Input
            label="Nome do animal"
            colorLabel={{ color: "#3772FF", fontWeight: "600" }}
            type="text"
            name="animal"
            placeholder="Por qual animal você se interessou?"
            style={{ background: "#FFFFFF" }}
          />
          <label
            htmlFor="message"
            style={{ color: "#3772FF", fontWeight: "600" }}
          >
            Mensagem
          </label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Por qual animal você se interessou?"
          ></textarea>
        </form>
        <Button>Enviar</Button>
      </div>
    </section>
  );
};
export default Message;
