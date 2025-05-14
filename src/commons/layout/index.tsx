"use client";

import { usePathname } from "next/navigation";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styles from "./styles.module.css";
import { useEffect } from "react";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  const pathname = usePathname();

  const isBackgroundVisible = pathname === "/";

  useEffect(() => {
    if (!isBackgroundVisible) document.body.classList.add("noBackground");
    else document.body.classList.remove("noBackground");
  }, [isBackgroundVisible]);

  return (
    //layout 스타일은 무조건 적용될 스타일.
    //isBackground가 true이면 styles.noBackground 반환
    <div className={styles.layout}>
      <div className={styles.top}>
        <LayoutHeader />
        <LayoutNavigation />
      </div>
      <div className={styles.content}>{children}</div>
      <LayoutFooter />
    </div>
  );
}
