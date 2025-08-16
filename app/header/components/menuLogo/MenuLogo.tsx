import MenuLink from "../menuLink/MenuLink";
import Image from "next/image";
import styles from "./menuLogo.module.css";
import logo from "@/assets/ab-logo.png";

const MenuLogo: React.FC = () => {
  return (
    <MenuLink>
      <Image
        className={styles.logo}
        src={logo}
        alt="Anastasios Boletis logo"
        width="30"
        height="30"
        priority
        loading="eager"
      />
    </MenuLink>
  );
}

export default MenuLogo;