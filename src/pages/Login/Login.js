import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import NotFound from "../../components/NotFound";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/login/lista" />;
  return (
    <section className={`${styles.login} animeLeft`}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        {/* <Route path="lost" element={<LoginPasswordLost />} /> */}
        {/* <Route path="reset" element={<LoginPasswordReset />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
export default Login;
