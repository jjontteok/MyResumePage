"use client";

import styles from "./styles.module.css";

export default function LayoutFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <div className={styles.label}>E-mail</div>
        <div className={styles.text}>nayeong0121@gmail.com</div>
      </div>
      <div className={styles.footerItem}>
        <div className={styles.label}>Github</div>
        <div className={styles.text}>https://github.com/jjontteok</div>
      </div>
    </div>
  );
}
