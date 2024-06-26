"use client";
import {usePathname} from "next/navigation";
import styles from "../app/app.module.css";

interface IProps {
  setIsLoading?: (value: boolean) => void;
}

export default function AppSideBar(props: IProps) {
  const pathname = usePathname();

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBar__container}>
        <div className={styles.title}>Danh mục</div>
        <div className={styles.options}>
          <a
            href={pathname === "/" ? "/" : "/buyer"}
            className={`${styles.options__link} ${
              pathname === "/" || pathname === "/buyer"
                ? styles.options__link_focus
                : ""
            }`}
            onClick={() =>props.setIsLoading?.(true)}
          >
            Tất cả
          </a>
        </div>
        <div className={styles.options}>
          <a
            href="/buyer/iphone"
            className={`${styles.options__link} ${
              pathname === "/buyer/iphone" ? styles.options__link_focus : ""
            }`}
            onClick={() =>props.setIsLoading?.(true)}
          >
            Iphone
          </a>
        </div>
        <div className={styles.options}>
          <a
            href="/buyer/samsung"
            className={`${styles.options__link} ${
              pathname === "/buyer/samsung" ? styles.options__link_focus : ""
            }`}
            onClick={() =>props.setIsLoading?.(true)}
          >
            Sam Sung
          </a>
        </div>
        <div className={styles.options}>
          <a
            href="/buyer/vivo"
            className={`${styles.options__link} ${
              pathname === "/buyer/vivo" ? styles.options__link_focus : ""
            }`}
            onClick={() =>props.setIsLoading?.(true)}
          >
            Vivo
          </a>
        </div>
        <div className={styles.options}>
          <a
            href="/buyer/huawei"
            className={`${styles.options__link} ${
              pathname === "/buyer/huawei" ? styles.options__link_focus : ""
            }`}
            onClick={() =>props.setIsLoading?.(true)}
          >
            Huawei
          </a>
        </div>
        <div className={styles.options}>
          <a
            href="/buyer/oppo"
            className={`${styles.options__link} ${
              pathname === "/buyer/oppo" ? styles.options__link_focus : ""
            }`}
            onClick={() =>props.setIsLoading?.(true)}
          >
            Oppo
          </a>
        </div>
        <div className={styles.options}>
          <a
            href="/buyer/mi"
            className={`${styles.options__link} ${
              pathname === "/buyer/mi" ? styles.options__link_focus : ""
            }`}
            onClick={() =>props.setIsLoading?.(true)}
          >
            MI
          </a>
        </div>
      </div>
    </div>
  );
}
