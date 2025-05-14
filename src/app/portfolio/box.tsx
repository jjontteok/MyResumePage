import Image from "next/image";
import styles from "./styles.module.css";

interface IPortfolioItemProps {
  title: string;
  image: string;
  youtube: string;
  portfolioPath: string;
  portfolioName: string;
  description: string;
  skills: string;
  duration: string;
}

export default function BoxItem(props: IPortfolioItemProps) {
  const onClickYoutube = () => {
    window.open(props.youtube, "_blank");
  };

  const onClickPortfolioDown = () => {
    const link = document.createElement("a");
    link.href = props.portfolioPath;
    link.download = props.portfolioName;
    link.click();
  };

  return (
    <div className={styles.box}>
      <Image
        src={props.image}
        alt={`${props.title} 이미지`}
        width={0}
        height={0}
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.title}>
        {props.title}
        <div className={styles.text}>
          {props.description}
          <p />
          <p />
          {props.skills}
          <p />
          {props.duration}
        </div>
      </div>
      <div className={styles.btnBox}>
        <button onClick={onClickYoutube} className={styles.youtubeBtn}>
          유튜브 링크
        </button>
        <button onClick={onClickPortfolioDown} className={styles.portfolioBtn}>
          포트폴리오 다운로드
        </button>
      </div>
    </div>
  );
}
