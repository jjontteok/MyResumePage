"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export default function InfoPage() {
  const skills = [
    {
      label: "Strong",
      values: ["Unity", "C", "C#", "C++"],
    },
    {
      label: "Knowledge",
      values: [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "React.js",
        "Next.js",
        "Node.js",
        "MySQL",
      ],
    },
    {
      label: "Etc",
      values: ["Git"],
    },
  ];

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
          항상 겸손한 마음으로 지속적으로 발전하겠습니다. 감사합니다.
          <p />
        </span>
        <div className={styles.skill}>
          Skills
          {skills.map((skill, index) => (
            <div key={index}>
              <div className={styles.skillLabel}>{skill.label}</div>
              <div className={styles.skillText}>{skill.values.join(", ")}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
