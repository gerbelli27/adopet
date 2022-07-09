import styles from "./BtnLink.module.css";

const Button = ({ props, children }) => {
  return (
    <a className={styles.button} {...props}>
      {children}
    </a>
  );
};
export default Button;
