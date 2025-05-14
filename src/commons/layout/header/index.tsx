"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function LayoutHeader() {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/");
  };

  return (
    <div className={styles.header}>
      <button onClick={onClickLogo} className={styles.button}>
        <Image
          src="/images/logo.png"
          alt="로고이미지"
          width={110}
          height={60}
          sizes="100vw"
          style={{ width: "110px", height: "60px" }}
        />
      </button>
    </div>
  );
}
