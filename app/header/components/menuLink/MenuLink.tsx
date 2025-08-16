import Link from "next/link";
import styles from "./menuLink.module.css";

const MenuLink: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Link
      href={'/'}
      className={styles["menu-link"]}
    >
      {props.children}
    </Link>
  );
}

export default MenuLink