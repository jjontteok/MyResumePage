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
        <div className={styles.text}>
          저는 게임 클라이언트 개발자 직무를 희망하는 김나영입니다. <br />
          유니티 엔진을 사용하며, C, C++, C# 언어를 익혔습니다. <br />
          또한 프론트 엔드 개발 관련하여 학습하였습니다.
        </div>
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
