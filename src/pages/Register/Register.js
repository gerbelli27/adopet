import styles from "./Register.module.css";
import LogoBlue from "../../Assets/Logoblue.png";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";

const Register = () => {
  function handleSubmit(event) {
    console.log(event);
  }

  return (
    <>
      <section className={`${styles.register} animeLeft`}>
        <img className={styles.logoblue} src={LogoBlue} alt="Logo Adopet" />
        <h1 className="subtitle pages">Ainda não tem cadastro?</h1>
        <p className="subtitle pages">
          Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </p>
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
            name="email"
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
    </>
  );
};
export default Register;
