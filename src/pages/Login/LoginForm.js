import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import { Link } from "react-router-dom";
import LogoBlue from "../../Assets/Logoblue.svg";
import styles from "./LoginForm.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import useForm from "../../Hooks/useForm";
import Error from "../../components/Helper/Error";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const [type, setType] = useState("password");

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  async function handlePassword() {
    if (type === "password") setType("text");
    else setType("password");
  }

  return (
    <>
      <img className={styles.logoblue} src={LogoBlue} alt="Logo Adopet" />
      <h1 className={styles.subtitle}>Já tem conta? Faça seu login:</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="username"
          placeholder="Insira seu email"
          {...username}
        />
        <Input
          label="Senha"
          id="pwd"
          type={type}
          name="password"
          placeholder="Insira sua senha"
          {...password}
        />
        <i className={styles.pwdShow} onClick={handlePassword}></i>
        {loading ? (
          <Button disabled>Entrando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Email ou senha incorretos"} />
      </form>
      <Link to="/">Esqueci minha senha</Link>
    </>
  );
};
export default LoginForm;
