import styles from "./Input.module.css";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
  style,
  colorLabel,
  id,
}) => {
  return (
    <>
      <label htmlFor={name} className={styles.label} style={colorLabel}>
        {label}
      </label>
      {error && <p className={styles.error}>{error}</p>}
      <input
        id={id || name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        style={style}
      />
    </>
  );
};
export default Input;
