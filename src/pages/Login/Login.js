import styles from "./Login.module.css";
import LogoBlue from "../../Assets/Logoblue.svg";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
const Login = () => {
  function handleSubmit(event) {
    console.log(event);
  }

  return (
    <section className={`${styles.login} animeLeft`}>
      <img className={styles.logoblue} src={LogoBlue} alt="Logo Adopet" />
      <h1 className={styles.subtitle}>Já tem conta? Faça seu login:</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Insira seu email"
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Insira sua senha"
        />
      </form>
      <p>Esqueci minha senha</p>
      <Button>Entrar</Button>
    </section>
  );
};
export default Login;
