import MenuLink from "../menuLink/MenuLink";
import styles from "./menuName.module.css"

const MenuName: React.FC = () => {
  return (
    <MenuLink>
      <h1 className={styles["header-name"]}>Anastasios Boletis</h1>
    </MenuLink>
  );
}

export default MenuName;