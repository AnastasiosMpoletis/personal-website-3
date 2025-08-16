import styles from "./page.module.css";
import HeaderMenuButton from "./components/menuButton/MenuButton";
import HeaderLogo from "./components/headerLogo/HeaderLogo";
import HeaderName from "./components/headerName/HeaderName";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <HeaderMenuButton />
      <HeaderLogo />
      <HeaderName />
    </header>
  );
}

export default Header;