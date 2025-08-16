import { FiAlignJustify } from "react-icons/fi";
import MenuLink from "../menuLink/MenuLink";
import styles from "./menuButton.module.css";

const MenuButton: React.FC = () => {
  return (
    <MenuLink>
      <div className={styles["menu-button-background"]}>
        {/* //TODO ANBOL add motion */}
        <FiAlignJustify
          className={styles["menu-button"]}
          size="24"
        />
      </div>
    </MenuLink>
  );
}

export default MenuButton;