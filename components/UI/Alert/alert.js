import styles from "./alert.module.css";

import Link from "next/link";

export default function Alert() {
  return (
    <div className={styles.alert}>
      <Link href="/api/exit-preview">
        <a>Click here to exit preview mode.</a>
      </Link>
    </div>
  );
}
