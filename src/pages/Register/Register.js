import styles from "./Register.module.css";
import LogoBlue from "../../Assets/Logoblue.svg";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";

const Register = () => {
  function handleSubmit(event) {
    console.log(event);
  }

  return (
    <section className={`${styles.register} animeLeft`}>
      <img className={styles.logoblue} src={LogoBlue} alt="Logo Adopet" />
      <h1 className={styles.subtitle}>
        Ainda não tem cadastro?
        <br />
        Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Escolha seu melhor email"
        />
        <Input
          label="Nome"
          type="text"
          name="name"
          placeholder="Digite seu nome completo"
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Crie uma senha"
        />
        <Input
          label="Confirme sua senha"
          type="password"
          name="confirme"
          placeholder="Repita a senha criada acima"
        />
      </form>
      <Button>Cadastrar</Button>
    </section>
  );
};
export default Register;
