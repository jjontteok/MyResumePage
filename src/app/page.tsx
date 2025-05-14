import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.title}>
          NAYEONG&apos;S
          <br />
          PORTFOLIO
        </div>
        <div className={styles.hello}>
          안녕하세요. 게임 클라이언트 개발자 직무를 희망하는 김나영입니다.
        </div>
        {/* <div className={styles.buttonBox}>
          <button className={styles.button}>이력서&자기소개서</button>
          <button className={styles.button}>포트폴리오</button>
        </div> */}
      </div>
    </div>
  );
}
