"use client";

import styles from "./styles.module.css";
import BoxItem from "./box";

export default function PortfolioPage() {
  const gamePortfolioItems = [
    {
      title: "CrazyArcade",
      image: "/images/CrazyArcade.png",
      youtube: "https://www.youtube.com/watch?v=dotEO1Tbx8I",
      portfolioPath: "/files/CrazyArcade.pdf",
      portfolioName: "CrazyArcade_Portfolio.pdf",
      description: `유니티엔진 및 C++ IOCP 서버, Node.js, MySQL을 적용한 아케이드 게임입니다.
크레이지아케이드를 모작하여 만들었습니다.`,
      skills: `사용 기술 : UnityEngine, C++(IOCP), Node.js, MySQL`,
      duration: `제작 기간 : 2025.03 ~ 2025.05`,
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
      duration: `제작 기간 : 2025.02 ~ 2025.03`,
    },
    {
      title: "Unity Tic Tac Toe",
      image: "/images/tictactoe.png",
      youtube: "https://youtube.com/shorts/eY0XYJwy3Ys?feature=share",
      portfolioPath: "/files/TicTacToe.pdf",
      portfolioName: "TicTacToe.pdf",
      description: `유니티로 만든 Tic Tac Toe 게임입니다.`,
      skills: `사용 기술 : UnityEngine`,
      duration: `제작 기간 : 2025.02.17~2025.02.19`,
    },
    {
      title: "C# Tic Tac Toe",
      image: "/images/CSharpTicTacToe.png",
      youtube: "https://youtu.be/UFLtrNi8N10",
      portfolioPath: "/files/CSharpTicTacToe.pdf",
      portfolioName: "CSharpTicTacToe.pdf",
      description: `CSharp으로 만든 Tic Tac Toe 콘솔창 게임입니다`,
      skills: `C#`,
      duration: `제작 기간 : 2025.01.15`,
    },
    {
      title: "JUXTA",
      image: "/images/Juxta.PNG",
      youtube: "https://youtu.be/0cxnh8_FBZA",
      portfolioPath: "/files/JUXTA.pdf",
      portfolioName: "JUXTA.pdf",
      description: `부모님께서 요청하셔서 만든 바코드 입력 프로그램입니다.`,
      skills: `사용 기술 : UnityEngine`,
      duration: `제작 기간 : 2025.04.25`,
    },
    {
      title: "Journey To Happiness",
      image: "/images/JourneyToHappiness.png",
      youtube: "https://www.youtube.com/watch?v=2vFnRNrJiD4",
      portfolioPath: "/files/JourneyToHappiness.pdf",
      portfolioName: "JourneyToHappiness_Portfolio.pdf",
      description: `쿠키런 오븐 브레이크를 모작한 횡스크롤 러너 게임입니다.`,
      skills: `사용 기술 : C++, WinAPI`,
      duration: `제작 기간 : 2024.10 ~ 2024.11`,
    },
    {
      title: "PaintProgram",
      image: "/images/PaintProgram.PNG",
      youtube: "https://youtu.be/ONj-C46VWno",
      portfolioPath: "/files/PaintProgram.pdf",
      portfolioName: "PaintProgram.pdf",
      description: `C++을 사용한 페인트 프로그램입니다.`,
      skills: `사용 기술: C++, WinAPI`,
      duration: `제작 기간: 2024.08.22 ~ 2024.09.12`,
    },
  ];

  const gamePlanPortfolioItems = [
    {
      title: "게임 시스템 기획서",
      image: "/images/GameSystemPlan.PNG",
      portfolioPath: "/files/GameSystemPlan.pdf",
      portfolioName: "김나영_게임시스템_기획서.pdf",
      description: `국비 게임 프로그래머 양성 과정 교육 중 제작한 게임 시스템 기획서입니다.`,
      duration: `작성 일자 : 2025.01.10`,
    },
    {
      title: "게임 콘텐츠 기획서",
      image: "/images/GameContentsPlan.PNG",
      portfolioPath: "/files/GameContentsPlan.pdf",
      portfolioName: "김나영_게임콘텐츠_기획서.pdf",
      description: `국비 게임 프로그래머 양성 과정 교육 중 제작한 게임 콘텐츠 기획서입니다.`,
      duration: `작성 일자 : 2024.12.31`,
    },
  ];

  return (
    <div className={styles.portfolio}>
      <div className={styles.explain}>포트폴리오</div>
      {gamePortfolioItems.map((item, index) => (
        <BoxItem key={index} {...item} />
      ))}
      <div className={styles.explain}>게임 기획서 포트폴리오</div>
      {gamePlanPortfolioItems.map((item, index) => (
        <BoxItem key={index} {...item} />
      ))}
    </div>
  );
}
