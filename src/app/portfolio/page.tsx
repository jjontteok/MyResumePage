"use client";

import styles from "./styles.module.css";
import BoxItem from "./box";

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "CrazyArcade",
      image: "/images/CrazyArcade.png",
      youtube: "https://www.youtube.com/watch?v=8ReW833pY_s",
      portfolioPath: "/files/CrazyArcade.pdf",
      portfolioName: "CrazyArcade_Portfolio.pdf",
      description: `유니티엔진 및 C++ IOCP 서버를 적용한 아케이드 게임입니다.
크레이지아케이드를 모작하여 만들었습니다.`,
      skills: `사용 기술 : UnityEngine, C++(IOCP)`,
      duration: `제작 기간: 2025.03 ~ 2025.05`,
    },
    {
      title: "빵빵특공대",
      image: "/images/Survivor.png",
      youtube: "https://www.youtube.com/watch?v=nnaoEbq3lGQ",
      portfolioPath: "/files/Survivor.pdf",
      portfolioName: "Survivor_Portfolio.pdf",
      description: `유니티로 만든 뱀서라이크 게임입니다.
탕탕 특공대를 모작하였습니다.`,
      skills: `사용 기술 : UnityEngine`,
      duration: `제작 기간: 2025.02 ~ 2025.03`,
    },
    {
      title: "Tic Tac Toe",
      image: "/images/tictactoe.png",
      youtube: "https://youtube.com/shorts/eY0XYJwy3Ys?feature=share",
      portfolioPath: "/files/TicTacToe.pdf",
      portfolioName: "TicTacToe.pdf",
      description: `유니티로 만든 Tic Tac Toe 게임입니다.`,
      skills: `사용 기술 : UnityEngine`,
      duration: `제작 기간: 2025.02.17~2025.02.19`,
    },
    {
      title: "Journey To Happiness",
      image: "/images/JourneyToHappiness.png",
      youtube: "https://www.youtube.com/watch?v=2vFnRNrJiD4",
      portfolioPath: "/files/JourneyToHappiness.pdf",
      portfolioName: "JourneyToHappiness_Portfolio.pdf",
      description: `쿠키런 오븐 브레이크를 모작한 횡스크롤 러너 게임입니다.`,
      skills: `사용 기술 : C++, WinAPI`,
      duration: `제작 기간: 2024.10 ~ 2024.11`,
    },
    {
      title: "JUXTA",
      image: "/images/Juxta.PNG",
      youtube: "https://youtu.be/zKVeZrvcO-8",
      portfolioPath: "files/JUXTA.pdf",
      portfolioName: "JUXTA.pdf",
      description: `부모님께서 요청하셔서 만든 바코드 입력 프로그램입니다.`,
      skills: `사용 기술 : UnityEngine`,
      duration: `제작 기간: 2025.04.25`,
    },
  ];

  return (
    <div className={styles.portfolio}>
      <div className={styles.explain}>게임 포트폴리오</div>
      {portfolioItems.map((item, index) => (
        <BoxItem key={index} {...item} />
      ))}
    </div>
  );
}
