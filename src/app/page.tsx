"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function Home() {
  const router = useRouter();

  const onClickInfo = () => {
    router.push("/info");
  };

  const onClickPortfolio = () => {
    router.push("/portfolio");
  };

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.title}>
          NAYEONG&apos;S
          <br />
          PORTFOLIO
        </div>
        <div className={styles.hello}>
          안녕하세요. 게임 프로그래머 직무를 희망하는 김나영입니다.
        </div>
        <div className={styles.buttonBox}>
          <button onClick={onClickInfo} className={styles.button}>
            이력서&자기소개서
          </button>
          <button onClick={onClickPortfolio} className={styles.button}>
            포트폴리오
          </button>
        </div>
      </div>
    </div>
  );
}
