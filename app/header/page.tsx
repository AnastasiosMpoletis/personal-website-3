import styles from "./page.module.css";
import MenuButton from "./components/menuButton/MenuButton";
import MenuLogo from "./components/menuLogo/MenuLogo";
import MenuName from "./components/menuName/MenuName";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <MenuButton />
      <MenuLogo />
      <MenuName />
    </header>
  );
}

export default Header;