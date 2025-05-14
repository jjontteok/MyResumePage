"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export default function InfoPage() {
  return (
    <div className={styles.info}>
      <Image
        src="/images/mimoji.png"
        alt="내 사진"
        width={0}
        height={0}
        sizes="80vw"
        className={styles.image}
      />
      <div className={styles.textarea}>
        <span className={styles.text}>
          안녕하세요, 게임 프로그래머 직무를 희망하는 김나영입니다.
          <p />
          항상 겸손하고 끊임없이 발전하겠습니다. <p />
        </span>
        <hr />
        <div className={styles.skill}>
          Skills
          <div className={styles.skillLabel}>Strong</div>
          <div className={styles.skillText}>Unity, C, C++, C#</div>
          <div className={styles.skillLabel}>Knowledge</div>
          <div className={styles.skillText}>
            HTML, CSS, Javascript, React, Next.js, Node.js, MySQL
          </div>
          <div className={styles.skillLabel}>Etc</div>
          <div className={styles.skillText}>Git</div>
        </div>
      </div>
    </div>
  );
}
