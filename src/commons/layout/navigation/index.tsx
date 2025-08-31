"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickAboutMe = () => {
    router.push("/info");
  };

  const onClickPortfolio = () => {
    router.push("/portfolio");
  };

  // const onClickResumeDown = () => {
  //   const resumeLink = document.createElement("a"); //동적으로 <a>태그 생성
  //   resumeLink.href = "/files/kny_resume.pdf"; //다운 받을 파일
  //   resumeLink.download = "김나영_이력서.pdf"; //다운 받을 때 지정될 파일 이름
  //   resumeLink.click(); //a태그를 클릭한 걸로 지정
  // };

  return (
    <div className={styles.navigation}>
      <button onClick={onClickAboutMe} className={styles.menu}>
        About Me
      </button>
      <button onClick={onClickPortfolio} className={styles.menu}>
        Portfolio
      </button>
      {/* <button onClick={onClickResumeDown} className={styles.resume}>
        이력서 다운로드
      </button> */}
    </div>
  );
}
