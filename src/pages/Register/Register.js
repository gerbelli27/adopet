import styles from "./Register.module.css";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import LogoBlue from "../../Assets/Logoblue.svg";
import Error from "../../components/Helper/Error";
import useForm from "../../Hooks/useForm";
import { useContext, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { UserContext } from "../../UserContext";
import { USER_POST } from "../../api";
import { Navigate } from "react-router-dom";

const Register = () => {
  const name = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const password2 = useForm("password");
  const [check, setCheck] = useState(false);

  const { userLogin, login } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.value === password2.value) {
      const { url, options } = USER_POST({
        name: name.value,
        email: email.value,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) userLogin(email.value, password.value);
    } else {
      setCheck(true);
    }
  }
  if (login === true) return <Navigate to="/login/lista" />;
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
          id="email"
          type="email"
          name="email"
          placeholder="Escolha seu melhor email"
          {...email}
        />
        <Input
          label="Nome"
          id="name"
          type="text"
          name="name"
          placeholder="Digite seu nome completo"
          {...name}
        />
        <Input
          label="Senha"
          id="pwd"
          type="password"
          name="password"
          placeholder="Crie uma senha"
          {...password}
        />
        <Input
          label="Confirme sua senha"
          id="pwd2"
          type="password"
          name="password"
          placeholder="Repita a senha criada acima"
          {...password2}
        />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
        {check ? <Error error="Confirme sua senha" /> : <p></p>}
      </form>
    </section>
  );
};
export default Register;
