import Link from "next/link";
import styles from "./headerLink.module.css";

const HeaderLink: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Link
      href={'/'}
      className={styles["menu-link"]}
    >
      {props.children}
    </Link>
  );
}

export default HeaderLink