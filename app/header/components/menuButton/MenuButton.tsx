import { FiAlignJustify } from "react-icons/fi";
import HeaderLink from "../headerLink/HeaderLink";
import styles from "./MenuButton.module.css";

const HeaderMenuButton: React.FC = () => {
  return (
    <HeaderLink>
      <div className={styles["menu-button-background"]}>
        {/* //TODO ANBOL add motion */}
        <FiAlignJustify
          className={styles["menu-button"]}
          size="24"
        />
      </div>
    </HeaderLink>
  );
}

export default HeaderMenuButton;