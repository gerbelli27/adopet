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
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label} style={colorLabel}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        style={style}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
export default Input;
