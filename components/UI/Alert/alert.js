import styles from "./alert.module.css";

export default function Alert() {
  return (
    <div className={styles.alert}>
      <a href="/api/exit-preview">Click here to exit preview mode.</a>
    </div>
  );
}
